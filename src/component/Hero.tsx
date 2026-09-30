import { useEffect, useState } from "react"
import { heroBadge, heroTitle, heroText, trustIndicators } from "../data/siteData"

// 🖼️ Mets tes deux images dans le dossier /public/images/ (ou change les chemins)
const heroImages = [
  { src: "/cloud2.jpg", alt: "Infrastructure réseau et serveurs" },
  { src: "/images.jpg", alt: "Équipe technique en salle serveurs" },
]

// 📞 Lien du bouton de support (remplace par ton numéro WhatsApp)
const SUPPORT_URL = "https://wa.me/22670468331"

const SLIDE_DELAY = 5000 // ms entre deux images

function Hero() {
  const [current, setCurrent] = useState(0)

  // Défilement automatique : on passe à l'image suivante toutes les 5 s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, SLIDE_DELAY)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-telecom-navy pt-32 pb-16">

      {/* ========== ARRIÈRE-PLAN : 2 images en fondu enchaîné ========== */}
      <div className="absolute inset-0" aria-hidden="true">
        {heroImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Voile bleu par-dessus pour garder le texte lisible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,68,124,0.96) 0%, rgba(12,68,124,0.88) 55%, rgba(12,68,124,0.70) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ========== COLONNE GAUCHE : texte ========== */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low w-fit shadow-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-signal-emerald animate-pulse"></span>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">
                {heroBadge}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {heroTitle.line1} <br />
              <span className="text-solar-amber">{heroTitle.highlight}</span> {heroTitle.line2}
            </h1>

            <p className="text-base md:text-lg text-white/85 max-w-2xl mt-4 leading-relaxed">
              {heroText}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-surface-container-low text-primary font-semibold shadow-md transition-transform hover:-translate-y-0.5"
              >
                Découvrir nos services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-surface-container-low text-primary font-semibold shadow-md transition-transform hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-solar-amber text-[20px]">bolt</span>
                Nous contacter / Devis immédiat
              </a>
            </div>
          </div>

          {/* ========== COLONNE DROITE : carte image arrondie ========== */}
          <div className="relative hidden lg:block h-[460px]">
            {/* Accent rouge en haut à gauche */}
            <div className="absolute -top-4 -left-4 w-28 h-44 rounded-tl-[2rem] bg-red-600" aria-hidden="true"></div>

            {/* Cadre des images (les 2 mêmes images défilent ici aussi) */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/20">
              {heroImages.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Carte flottante de support */}
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 -right-4 flex items-center gap-4 bg-white rounded-full pl-4 pr-8 py-4 shadow-xl hover:-translate-y-0.5 transition-transform"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-signal-emerald text-white">
                <span className="material-symbols-outlined text-[28px]">chat</span>
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                  Support
                </span>
                <span className="text-base font-bold text-telecom-navy">
                  Parlez à un expert
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* ========== INDICATEURS DE CONFIANCE (inchangés) ========== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-14">
          {trustIndicators.map((item) => (
            <div key={item.title} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-signal-emerald text-[22px]">
                {item.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-telecom-navy">{item.title}</span>
                <span className="text-xs text-outline-variant">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Points de navigation du diaporama */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {heroImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setCurrent(i)}
              aria-label={`Afficher l'image ${i + 1}`}
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