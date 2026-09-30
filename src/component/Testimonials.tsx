import { testimonialsIntro, testimonials } from "../data/siteData"

function Testimonials() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-telecom-navy">
            Témoignages <span className="text-brand-cyan">Clients</span>
          </h2>
          <p className="text-on-surface-variant mt-3">{testimonialsIntro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name + i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-telecom-navy text-sm">{t.name}</span>
                  <span className="text-xs text-outline">{t.role}</span>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="material-symbols-outlined text-solar-amber text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                « {t.quote} »
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials