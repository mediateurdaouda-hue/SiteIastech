import { historyIntro, missionText, timeline, values } from "../data/siteData"

function Historique() {
  return (
    <>
      <section className="bg-gradient-signal pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
       
         <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-white">
  À propos de <span className="text-brand-cyan">IASTECHNOLOGIE</span>
</h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 mt-4 max-w-lg text-sm leading-relaxed">{historyIntro}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div data-aos="fade-up" className="bg-surface-container-low rounded-xl p-8">
          <h2 className="text-xl font-bold text-telecom-navy mb-3">Notre mission</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">{missionText}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 data-aos="fade-up" className="text-2xl font-bold text-telecom-navy mb-10">Notre histoire</h2>
        <div className="relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-brand-cyan/30"></div>
          {timeline.map((item, i) => (
            <div key={item.title} data-aos="fade-right" className={`relative ${i < timeline.length - 1 ? "pb-12" : ""}`}>
              <div className="absolute left-[-2px] top-1 w-4 h-4 rounded-full bg-brand-cyan border-4 border-white"></div>
              <p className="text-brand-cyan font-bold text-sm">{item.year}</p>
              <h3 className="font-bold mt-1 text-telecom-navy">{item.title}</h3>
              <p className="text-on-surface-variant text-sm mt-2 leading-relaxed max-w-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-2xl font-bold text-telecom-navy mb-8">Nos valeurs</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} data-aos="zoom-in" data-aos-delay={i * 100} className="bg-white p-5 rounded-lg shadow-sm">
                <p className="font-bold text-telecom-navy">{v.title}</p>
                <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Historique