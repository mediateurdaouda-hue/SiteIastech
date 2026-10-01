import { useEffect, useState } from "react"
import { useLanguage } from "../i18n/LanguageContext"

// Mets tes deux images dans le dossier /public/ (ou change les chemins)
const heroImages = [
  { src: "/hero1.jpg", alt: "Infrastructure réseau et serveurs" },
  { src: "/hero2.jpg", alt: "Équipe technique en salle serveurs" },
]

const SLIDE_DELAY = 5000 // ms entre deux images

function Hero() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, SLIDE_DELAY)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-telecom-navy pt-32 pb-16 min-h-[85vh] flex items-center">
      {/* ========== PHOTO À DROITE, fondue dans le fond sombre (style ECODEV) ========== */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-3/5 opacity-40 lg:opacity-100 [mask-image:linear-gradient(to_right,transparent,black_35%)]"
        aria-hidden="true"
      >
        {heroImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* ========== TEXTE À GAUCHE ========== */}
        <div className="max-w-2xl flex flex-col justify-center">
          <p className="text-sky-400 font-semibold text-base md:text-lg mb-3">{t.hero.badge}</p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            {t.hero.line1} <br />
            <span className="text-sky-400">{t.hero.highlight}</span> {t.hero.line2}
          </h1>

          <p className="text-base md:text-lg text-white/80 mt-5 leading-relaxed max-w-xl">{t.hero.text}</p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0b63c5] to-[#0ea5e9] text-white font-bold shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl hover:shadow-sky-500/40"
            >
              {t.hero.ctaServices}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-surface-container-low text-primary font-bold shadow-lg transition-all hover:-translate-y-0.5"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        {/* Points de navigation du diaporama */}
        <div className="flex items-center gap-2 mt-10">
          {heroImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setCurrent(i)}
              aria-label={`${t.hero.showImage} ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-8 bg-white" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero