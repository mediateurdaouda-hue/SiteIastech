import { servicesIntro, services, interventionZones } from "../data/siteData"

function Services() {
  return (
    <>
      <section className="bg-gradient-signal pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p data-aos="fade-down" className="text-white/80 text-sm font-bold uppercase tracking-wider mb-3">Notre offre</p>
          <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-white">Nos Services</h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 mt-4 max-w-lg text-sm leading-relaxed">{servicesIntro}</p>
        </div>
      </section>

      {/* ── Cartes : max-w-5xl + gap-5 + image h-36 + p-5 = taille moyenne ── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-cyan/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image plus courte (h-44 → h-36) + léger zoom au survol */}
              <div className="w-full h-36 bg-surface-container-low overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Badge icône plus petit, à cheval sur l'image */}
                <div className="w-10 h-10 rounded-xl bg-white text-brand-cyan flex items-center justify-center mb-3 -mt-10 relative z-10 shadow-md ring-1 ring-slate-100">
                  <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
                </div>

                <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-semibold mb-2">
                  {s.tag}
                </span>

                <h3 className="font-bold text-telecom-navy text-base leading-snug mb-1.5">{s.title}</h3>

                {/* 3 lignes max → toutes les cartes gardent la même hauteur */}
                <p className="text-on-surface-variant text-[13px] leading-relaxed mb-3 line-clamp-3">{s.text}</p>

                <ul className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-slate-100 text-[13px] text-outline">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-cyan text-[16px]">check</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-2xl font-bold text-telecom-navy mb-6">Zones d'intervention</h2>
          <div className="flex flex-wrap gap-3">
            {interventionZones.map((zone, i) => (
              <span key={zone} data-aos="zoom-in" data-aos-delay={i * 80} className="border border-outline-variant px-4 py-2 rounded-lg text-sm bg-white">
                {zone}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-signal">
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 data-aos="fade-right" className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
            Besoin d'un devis pour votre projet réseau ?
          </h3>
          <a data-aos="fade-left" href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-white hover:bg-surface-container-low text-brand-cyan font-semibold shadow-md transition-colors whitespace-nowrap">
            Contactez-nous
          </a>
        </div>
      </section>
    </>
  )
}

export default Services
