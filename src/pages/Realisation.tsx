import { contactIntro, contact, officeHours, socials } from "../data/siteData"

function Contact() {
  return (
    <>
      <section className="bg-telecom-navy pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-signal-emerald text-sm font-bold uppercase tracking-wider mb-3">
            Parlons de votre projet
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Contactez-nous</h1>
          <p className="text-white/60 mt-4 max-w-lg text-sm leading-relaxed">{contactIntro}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        <form className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-telecom-navy">Nom complet</label>
              <input type="text" className="border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Votre nom" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-telecom-navy">Téléphone</label>
              <input type="tel" className="border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="+226 XX XX XX XX" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-telecom-navy">Email</label>
            <input type="email" className="border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="vous@exemple.com" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-telecom-navy">Sujet</label>
            <select className="border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary">
              <option>Demande de devis</option>
              <option>Support technique</option>
              <option>Kit Starlink</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-telecom-navy">Message</label>
            <textarea rows={5} className="border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Décrivez votre besoin…" />
          </div>

          <button type="submit" className="mt-2 inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-primary hover:opacity-90 text-white font-semibold shadow-md transition-colors w-fit">
            Envoyer le message
          </button>
        </form>

        <div className="flex flex-col gap-6">

          <div className="bg-surface-container-low rounded-xl p-6">
            <h3 className="font-bold text-telecom-navy mb-4">Coordonnées</h3>
            <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
              <p>📍 {contact.address}</p>
              <p>✉️ {contact.email}</p>
              <p>📞 {contact.phone}</p>
              <p>💬 WhatsApp : {contact.whatsapp}</p>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-6">
            <h3 className="font-bold text-telecom-navy mb-4">Horaires</h3>
            <div className="flex flex-col gap-2 text-sm">
              {officeHours.map((item) => (
                <div key={item.day} className="flex justify-between text-on-surface-variant">
                  <span>{item.day}</span>
                  <span className="font-semibold text-telecom-navy">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-6">
            <h3 className="font-bold text-telecom-navy mb-4">Réseaux sociaux</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white text-sm font-semibold text-telecom-navy hover:bg-primary hover:text-white transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact