import { useState } from "react"
import type { FormEvent } from "react"
import { Forminit } from "forminit"
import { contactIntro, contact, officeHours, socials } from "../data/siteData"

const FORM_ID = import.meta.env.VITE_FORMINIT_ID as string
const forminit = new Forminit()

type Status = "idle" | "loading" | "success" | "error"

// Forminit exige le format international (E.164) : +22670000000
// Accepte "70 00 00 00", "+226 70 00 00 00" ou "00226 70 00 00 00".
function normalizePhone(raw: string): string | null {
  const cleaned = raw.replace(/[\s.\-()]/g, "")
  if (!cleaned) return "" // champ facultatif
  let phone = cleaned
  if (phone.startsWith("00")) phone = "+" + phone.slice(2)
  else if (/^\d{8}$/.test(phone)) phone = "+226" + phone // numéro local du Burkina
  return /^\+\d{8,15}$/.test(phone) ? phone : null
}

const inputClass =
  "border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-cyan"

function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    // Anti-spam : ce champ est caché, seuls les robots le remplissent
    if (formData.get("website")) {
      setStatus("success")
      form.reset()
      return
    }
    formData.delete("website")

    // Téléphone : on le met au format international, ou on le retire s'il est vide
    const phone = normalizePhone(String(formData.get("fi-sender-phone") ?? ""))
    if (phone === null) {
      setStatus("error")
      setErrorMessage("Numéro de téléphone invalide. Exemple : +226 70 00 00 00")
      return
    }
    if (phone) formData.set("fi-sender-phone", phone)
    else formData.delete("fi-sender-phone")

    setStatus("loading")
    setErrorMessage("")

    const { error } = await forminit.submit(FORM_ID, formData)

    if (error) {
      setStatus("error")
      setErrorMessage(error.message)
      return
    }

    setStatus("success")
    form.reset()
  }

  return (
    <>
      <section className="bg-gradient-signal pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-white/80 text-sm font-bold uppercase tracking-wider mb-3">
            Parlons de votre projet
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Contactez-nous</h1>
          <p className="text-white/80 mt-4 max-w-lg text-sm leading-relaxed">{contactIntro}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-telecom-navy">
                Nom complet
              </label>
              <input
                id="name"
                name="fi-sender-fullName"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                placeholder="Votre nom"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-telecom-navy">
                Téléphone
              </label>
              <input
                id="phone"
                name="fi-sender-phone"
                type="tel"
                autoComplete="tel"
                className={inputClass}
                placeholder="+226 XX XX XX XX"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-telecom-navy">
              Email
            </label>
            <input
              id="email"
              name="fi-sender-email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="vous@exemple.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-semibold text-telecom-navy">
              Sujet
            </label>
            <select id="subject" name="fi-select-subject" className={inputClass}>
              <option>Demande de devis</option>
              <option>Support technique</option>
              <option>Kit Starlink</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-telecom-navy">
              Message
            </label>
            <textarea
              id="message"
              name="fi-text-message"
              rows={5}
              required
              className={`${inputClass} resize-none`}
              placeholder="Décrivez votre besoin…"
            />
          </div>

          {/* Champ piège anti-spam (invisible pour les humains) */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-brand-cyan hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold shadow-md transition-colors w-fit"
          >
            {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
          </button>

          {/* Retour à l'utilisateur */}
          <div aria-live="polite">
            {status === "success" && (
              <p className="rounded-lg bg-green-50 text-green-800 text-sm font-semibold px-4 py-3">
                Merci ! Votre message a bien été envoyé. Nous vous répondons rapidement.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg bg-red-50 text-red-800 text-sm font-semibold px-4 py-3">
                {errorMessage || "L'envoi a échoué."} Réessayez, ou contactez-nous par téléphone ou WhatsApp.
              </p>
            )}
          </div>
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
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white text-sm font-semibold text-telecom-navy hover:bg-brand-cyan hover:text-white transition-colors"
                >
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