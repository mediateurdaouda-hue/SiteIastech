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

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden">

              <div className="w-full h-44 bg-surface-container-low overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low text-brand-cyan flex items-center justify-center mb-4 -mt-12 relative z-10 bg-white shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">{s.icon}</span>
                </div>

                <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant text-xs font-semibold mb-2">
                  {s.tag}
                </span>

                <h3 className="font-bold text-telecom-navy text-lg mb-2">{s.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{s.text}</p>

                <ul className="flex flex-col gap-2 mt-auto text-sm text-outline">
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