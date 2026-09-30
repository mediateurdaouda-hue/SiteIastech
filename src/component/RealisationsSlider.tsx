import { useEffect, useState } from "react"
import { realisations } from "../data/siteData"

function RealisationsSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % realisations.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (i: number) => setIndex(i)
  const prev = () => setIndex((p) => (p - 1 + realisations.length) % realisations.length)
  const next = () => setIndex((p) => (p + 1) % realisations.length)

  return (
    <section className="w-full bg-surface-container-low py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-telecom-navy">Nos Réalisations</h2>
          <p className="text-on-surface-variant mt-3">Quelques exemples de déploiements menés sur le terrain.</p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-10 min-h-[220px] flex flex-col justify-center items-center text-center transition-all duration-500">
            <span className="text-xs uppercase tracking-wider text-brand-cyan font-bold mb-3">
              {realisations[index].category}
            </span>
            <h3 className="text-xl font-bold text-telecom-navy mb-2">
              {realisations[index].title}
            </h3>
            <p className="text-on-surface-variant text-sm">📍 {realisations[index].location}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-telecom-navy">chevron_left</span>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-telecom-navy">chevron_right</span>
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {realisations.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-brand-cyan" : "w-2 bg-outline-variant"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealisationsSlider