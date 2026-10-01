import { Link } from "react-router-dom"
import Hero from "../component/Hero"
import StatsSection from "../component/StatsSection"
import ProductsSection from "../component/ProductsSection"
import CoverageSection from "../component/CoverageSection"
import Testimonials from "../component/Testimonials"
import { services } from "../data/siteData"

function Accueil() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductsSection />

      {/* Cartes de services : style ECODEV (4 colonnes, très arrondies, icône dans un rond) */}
      <section className="w-full bg-brand-cyan/5 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-telecom-navy mb-10">
            Entrez dans la connectivité
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/expertise/${s.slug}`}
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
                aria-label={`Découvrir : ${s.title}`}
                className="group bg-white rounded-3xl shadow-[0_10px_30px_-12px_rgba(30,60,120,0.25)] hover:shadow-[0_18px_40px_-12px_rgba(30,60,120,0.35)] hover:-translate-y-1 transition-all duration-300 px-6 py-9 flex flex-col items-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan"
              >
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[32px]">{s.icon}</span>
                </div>

                <h3 className="font-bold text-telecom-navy text-lg leading-snug mb-3">{s.title}</h3>

                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-4">{s.text}</p>

                <span className="mt-auto pt-5 inline-flex items-center gap-1 text-brand-cyan text-sm font-bold">
                  En savoir plus
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carte de couverture Wi-Fi */}
      <CoverageSection />

      <Testimonials />
    </>
  )
}

export default Accueil