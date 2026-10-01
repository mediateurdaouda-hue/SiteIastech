import { products } from "../data/siteData"

function ProductsSection() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-telecom-navy">Nos Produits</h2>
          <p className="text-on-surface-variant mt-3">Des outils pensés pour aller plus loin que l'installation.</p>
        </div>

        <div className="space-y-10">
          {products.map((p, i) => (
            <div
              key={p.name}
              data-aos="zoom-in"
              className="bg-gradient-signal rounded-3xl overflow-hidden shadow-[0_10px_30px_-12px_rgba(30,60,120,0.35)] grid md:grid-cols-2 items-center gap-8 p-6 md:p-10"
            >
              {/* Texte (à droite une carte sur deux pour varier le rythme) */}
              <div
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="150"
                className={`flex flex-col items-start ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-white text-[30px]">{p.icon}</span>
                </div>
                <span className="text-sm text-white/80 font-semibold mb-1">{p.tagline}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{p.headline}</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">{p.description}</p>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-telecom-navy text-sm font-bold hover:bg-surface-container-low transition-colors"
                >
                  En savoir plus
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>

              {/* Image */}
              <div
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay="300"
                className={`w-full bg-white/10 p-3 rounded-2xl ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <img
                  src={p.image}
                  alt={`Aperçu de ${p.name}`}
                  className="w-full rounded-xl shadow-lg border border-white/20 object-cover object-top max-h-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection