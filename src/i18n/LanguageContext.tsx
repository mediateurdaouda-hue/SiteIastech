import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

/* ============================================================
   TRADUCTION AUTOMATIQUE DE TOUT LE SITE (Google Traduction)
   - Le site est écrit en français.
   - Quand on choisit English, TOUTE la page (et toutes les pages
     du site) est traduite automatiquement, sans toucher aux autres fichiers.
   ============================================================ */

export type Lang = "fr" | "en"
export type NavLinkKey = "home" | "services" | "ourServices" | "history" | "contact"

export const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
]

/* Textes français utilisés par le Header et le Hero.
   (La traduction en anglais est faite automatiquement par Google.) */
const fr = {
  nav: {
    home: "Accueil",
    services: "Services",
    ourServices: "Nos services",
    history: "Historique",
    contact: "Contact",
    call: "Appeler",
    homeAria: "IAS Tech — Accueil",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    badge: "Partenaire IT & Télécoms de Référence en Afrique",
    line1: "IAS-TECHNOLOGIE",
    highlight: "Votre partenaire IT",
    line2: "au Burkina Faso.",
    text: "Distribution, installation et supervision d'équipements réseau haute disponibilité (routeurs, switchs managés, kits Starlink & faisceaux hertziens) à travers le Burkina Faso et l'Afrique de l'Ouest.",
    ctaServices: "Découvrir nos services",
    ctaContact: "Nous contacter / Devis immédiat",
    showImage: "Afficher l'image",
  },
}

/* ---------- Google Traduction ---------- */

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => unknown
      }
    }
  }
}

const SOURCE_LANG = "fr"

function getCookie(name: string): string | null {
  const match = document.cookie.split("; ").find((row) => row.startsWith(name + "="))
  return match ? decodeURIComponent(match.split("=")[1]) : null
}

function setTranslateCookie(target: Lang) {
  const host = window.location.hostname
  if (target === SOURCE_LANG) {
    const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = `googtrans=; ${expired}; path=/`
    document.cookie = `googtrans=; ${expired}; path=/; domain=${host}`
  } else {
    const value = `/${SOURCE_LANG}/${target}`
    document.cookie = `googtrans=${value}; path=/`
    document.cookie = `googtrans=${value}; path=/; domain=${host}`
  }
}

function readLangFromCookie(): Lang {
  const value = getCookie("googtrans")
  return value && value.endsWith("/en") ? "en" : "fr"
}

/* Google Traduction modifie le DOM, ce qui peut faire planter React
   ("removeChild" / "insertBefore"). Ce correctif évite le problème. */
let domPatched = false
function patchDomForGoogleTranslate() {
  if (domPatched || typeof Node === "undefined") return
  domPatched = true

  const originalRemoveChild = Node.prototype.removeChild
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child
    return originalRemoveChild.call(this, child) as T
  }

  const originalInsertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function <T extends Node>(this: Node, newNode: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return newNode
    return originalInsertBefore.call(this, newNode, ref) as T
  }
}

function loadGoogleTranslate() {
  if (document.getElementById("google-translate-script")) return

  let box = document.getElementById("google_translate_element")
  if (!box) {
    box = document.createElement("div")
    box.id = "google_translate_element"
    box.style.display = "none"
    document.body.appendChild(box)
  }

  window.googleTranslateElementInit = () => {
    if (!window.google) return
    new window.google.translate.TranslateElement(
      { pageLanguage: SOURCE_LANG, includedLanguages: "fr,en", autoDisplay: false },
      "google_translate_element"
    )
  }

  const script = document.createElement("script")
  script.id = "google-translate-script"
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  script.async = true
  document.body.appendChild(script)
}

/* ---------- Contexte React ---------- */

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof fr
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang] = useState<Lang>(readLangFromCookie)

  useEffect(() => {
    document.documentElement.lang = lang
    if (lang === "en") {
      patchDomForGoogleTranslate()
      loadGoogleTranslate()
    }
  }, [lang])

  // Changer de langue : on enregistre le choix puis on recharge la page,
  // et Google traduit tout le site d'un coup.
  const setLang = (next: Lang) => {
    if (next === lang) return
    setTranslateCookie(next)
    window.location.reload()
  }

  return <LanguageContext.Provider value={{ lang, setLang, t: fr }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage doit être utilisé à l'intérieur de <LanguageProvider>")
  return ctx
}