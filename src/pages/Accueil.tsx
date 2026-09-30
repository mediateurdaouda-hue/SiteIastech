import Hero from "../component/Hero"
import StatsSection from "../component/StatsSection"
import ProductsSection from "../component/ProductsSection"
import { servicesIntro, services, interventionZones } from "../data/siteData"
import RealisationsSlider from "../component/RealisationsSlider"

 import { Link } from "react-router-dom"
import Testimonials from "../component/Testimonials"

function Accueil() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductsSection />


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((s, i) => (
    <Link
      key={s.slug}
      to={`/expertise/${s.slug}`}
      data-aos="fade-up"
      data-aos-delay={(i % 3) * 120}
      aria-label={`Découvrir : ${s.title}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan"
    >
      <div className="w-full h-44 bg-surface-container-low overflow-hidden">
        <img
          src={s.image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div
          data-aos="zoom-in"
          data-aos-delay={300 + (i % 3) * 120}
          className="w-12 h-12 rounded-lg text-brand-cyan flex items-center justify-center mb-4 -mt-12 relative z-10 bg-white shadow-sm"
        >
          <span className="material-symbols-outlined text-[26px]">{s.icon}</span>
        </div>

        <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant text-xs font-semibold mb-2">
          {s.tag}
        </span>

        <h3 className="font-bold text-telecom-navy text-lg mb-2">{s.title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{s.text}</p>

        <ul className="flex flex-col gap-2 mb-6 text-sm text-outline">
          {s.points.map((p, j) => (
            <li
              key={p}
              data-aos="fade-left"
              data-aos-delay={400 + j * 100}
              className="flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-brand-cyan text-[16px]">check</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {/* Bouton : poussé en bas de carte, cartes de même hauteur alignées */}
        <span className="mt-auto inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-brand-cyan text-brand-cyan text-sm font-bold group-hover:bg-brand-cyan group-hover:text-white transition-colors">
          En savoir plus
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  ))}
</div>
      <Testimonials />
    </>
  )
}

export default Accueil