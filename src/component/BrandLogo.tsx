import { useEffect, useState } from "react"

/* ============================================================
   Logo sans fond blanc, rogné automatiquement et éclairci
   pour rester visible sur un fond sombre.

   mode="light"    → couleurs éclaircies (recommandé sur fond marine)
   mode="white"    → silhouette blanche (comme le logo ECODEV)
   mode="original" → couleurs d'origine, juste sans le fond
   ============================================================ */

export type LogoMode = "light" | "white" | "original"

const cache = new Map<string, Promise<string>>()

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4
  return [h / 6, s, l]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  if (s === 0) return [l * 255, l * 255, l * 255]
  const hue = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  return [hue(p, q, h + 1 / 3) * 255, hue(p, q, h) * 255, hue(p, q, h - 1 / 3) * 255]
}

async function processLogo(src: string, mode: LogoMode): Promise<string> {
  const img = new Image()
  img.src = src
  await img.decode()

  const w = img.naturalWidth
  const h = img.naturalHeight
  const canvas = document.createElement("canvas")
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext("2d", { willReadFrequently: true })
  if (!ctx) throw new Error("Canvas indisponible")
  ctx.drawImage(img, 0, 0)

  const data = ctx.getImageData(0, 0, w, h)
  const px = data.data
  let minX = w
  let minY = h
  let maxX = 0
  let maxY = 0

  for (let i = 0; i < px.length; i += 4) {
    const r = px[i]
    const g = px[i + 1]
    const b = px[i + 2]

    // "Couleur vers transparence" : le blanc devient transparent
    const a = Math.max(255 - r, 255 - g, 255 - b) / 255
    if (a < 0.1) {
      px[i + 3] = 0
      continue
    }

    // Retrouve la vraie couleur du pixel (sans le blanc mélangé)
    let cr = Math.min(255, Math.max(0, (r - 255 * (1 - a)) / a))
    let cg = Math.min(255, Math.max(0, (g - 255 * (1 - a)) / a))
    let cb = Math.min(255, Math.max(0, (b - 255 * (1 - a)) / a))

    if (mode === "white") {
      cr = cg = cb = 255
    } else if (mode === "light") {
      const [hh, ss, ll] = rgbToHsl(cr, cg, cb)
      ;[cr, cg, cb] = hslToRgb(hh, ss, Math.max(ll, 0.66))
    }

    px[i] = cr
    px[i + 1] = cg
    px[i + 2] = cb
    px[i + 3] = Math.round(a * 255)

    if (a > 0.2) {
      const idx = i / 4
      const x = idx % w
      const y = Math.floor(idx / w)
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
  ctx.putImageData(data, 0, 0)

  // Rogne les marges vides autour du logo
  if (maxX <= minX || maxY <= minY) return canvas.toDataURL("image/png")
  const pad = Math.round(Math.max(w, h) * 0.01)
  const sx = Math.max(0, minX - pad)
  const sy = Math.max(0, minY - pad)
  const sw = Math.min(w - sx, maxX - minX + 1 + pad * 2)
  const sh = Math.min(h - sy, maxY - minY + 1 + pad * 2)

  const out = document.createElement("canvas")
  out.width = sw
  out.height = sh
  out.getContext("2d")!.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh)
  return out.toDataURL("image/png")
}

type BrandLogoProps = {
  src?: string
  mode?: LogoMode
  alt?: string
  className?: string
}

export default function BrandLogo({
  src = "/logo.jpeg",
  mode = "light",
  alt = "IAS Tech",
  className = "",
}: BrandLogoProps) {
  const [url, setUrl] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    const key = `${src}|${mode}`
    if (!cache.has(key)) cache.set(key, processLogo(src, mode))
    cache
      .get(key)!
      .then((u) => !cancelled && setUrl(u))
      .catch(() => {
        cache.delete(key)
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [src, mode])

  // Si le traitement échoue, on affiche le logo d'origine
  const visible = failed || url !== null
  return (
    <img
      src={url ?? src}
      alt={alt}
      className={`${className} object-contain transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  )
}