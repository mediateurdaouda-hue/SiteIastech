import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import AOS from "aos"
import { expertises } from "../data/siteData"

const backTo = "/services" // ou "/" si tu préfères revenir à l'accueil
const ctaTo = "/contact"
const ctaLabel = "Demander un devis"

function ExpertisePage() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? expertises[slug] : undefined

  // Remonter en haut, recalculer les animations et mettre à jour l'onglet
  useEffect(() => {
    window.scrollTo(0, 0)
    if (data) document.title = `${data.title} | IKA Solution`
    const t = setTimeout(() => AOS.refreshHard(), 100)
    return () => clearTimeout(t)
  }, [slug, data])

  if (!data) return <Navigate to="/" replace />

  const { intervention, actions, ...page } = data

  return (
    // overflow-x-clip : évite le scroll horizontal causé par les animations AOS
    <div className="overflow-x-clip">
      {/* ------------------------------ HERO -------------------------------- */}
      <section className="relative bg-telecom-navy text-white overflow-hidden">
        <img
          src={page.heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-telecom-navy/80" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div data-aos="fade-right">
            <Link
              to={backTo}
              className="inline-flex items-center px-5 py-3 rounded-full border border-white/30 bg-white/10 text-sm font-bold hover:bg-white/20 transition-colors"
            >
              {page.backLabel}
            </Link>

            <p className="mt-10 text-xs font-extrabold tracking-[0.2em] uppercase text-brand-red">
              {page.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              {page.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
              {page.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {page.pills.map((pill) => (
                <span
                  key={pill}
                  className="px-5 py-3 rounded-full bg-white text-sm font-bold text-brand-blue"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Image + bloc rouge + carte flottante */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none" data-aos="fade-left">
            <div
              className="absolute -top-5 -left-5 w-28 h-28 rounded-3xl bg-brand-red"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={page.heroImage}
                alt={page.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="absolute -bottom-6 right-4 sm:right-2 bg-white text-telecom-navy rounded-2xl shadow-xl px-6 py-5"
            >
              <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-brand-red">
                {page.badgeLabel}
              </p>
              <p className="mt-1 text-2xl font-extrabold">{page.badgeTitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- INTERVENTION --------------------------- */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div data-aos="fade-up">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-brand-red">
              {intervention.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-telecom-navy">
              {intervention.title}
            </h2>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-on-surface-variant text-base leading-8 lg:pt-8"
          >
            {intervention.text}
          </p>
        </div>
      </section>

      {/* ------------------------ CE QUE NOUS METTONS EN PLACE --------------- */}
      <section className="bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          {/* Colonne gauche */}
          <div data-aos="fade-up" className="lg:sticky lg:top-32">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-brand-red">
              {actions.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-telecom-navy">
              {actions.title}
            </h2>
            <Link
              to={ctaTo}
              className="mt-8 inline-flex items-center px-7 py-4 rounded-full bg-brand-red text-white font-bold shadow-lg shadow-brand-red/25 hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Grille 2 x 2 */}
          <div className="grid sm:grid-cols-2 gap-5">
            {actions.items.map((item, i) => (
              <article
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 2) * 120}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <span className="w-11 h-11 rounded-xl bg-brand-blue text-white text-sm font-extrabold flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 text-sm leading-7 text-on-surface-variant">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpertisePage