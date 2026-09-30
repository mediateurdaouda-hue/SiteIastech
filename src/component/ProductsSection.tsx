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
          {products.map((p) => (
            <div
              key={p.name}
              data-aos="zoom-in"
              className="bg-gradient-signal rounded-2xl overflow-hidden shadow-md grid md:grid-cols-2 items-center gap-8 p-6 md:p-10"
            >
              {/* Texte à gauche */}
              <div data-aos="fade-right" data-aos-delay="150" className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-white text-[28px]">{p.icon}</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-white/70 font-bold mb-1">{p.tagline}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">{p.headline}</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">{p.description}</p>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-telecom-navy text-sm font-semibold hover:bg-surface-container-low transition-colors"
                >
                  En savoir plus
                </a>
              </div>

              {/* Image à droite */}
              <div data-aos="fade-left" data-aos-delay="300" className="w-full bg-white/10 p-3 rounded-xl">
                <img
                  src={p.image}
                  alt={`Aperçu de ${p.name}`}
                  className="w-full rounded-lg shadow-lg border border-white/20 object-cover object-top max-h-80"
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