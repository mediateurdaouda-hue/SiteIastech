import {
  navLinks,
  company,
  contact,
  solutions,
  legalLinks,
} from "../data/siteData"

function Footer() {
  const year = new Date().getFullYear()
return (
  <footer className="w-full bg-black text-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

      {/* Présentation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <div className="flex flex-col gap-4">
          <span className="text-lg font-bold text-white tracking-tight">
            {company.name}
          </span>

          <p className="text-sm text-outline-variant leading-relaxed">
            Expertise réseau de pointe, solutions Starlink haute capacité et
            déploiements télécoms à travers le Burkina Faso et la sous-région
            ouest-africaine.
          </p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
            Liens rapides
          </span>

          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.path} className="text-sm">
                <a
                  href={link.path}
                  className="text-outline-variant hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
            Nos solutions
          </span>

          <ul className="flex flex-col gap-2">
            {solutions.map((item) => (
              <li key={item} className="text-sm">
                <a
                  href="#"
                  className="text-outline-variant hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact & bureau
          </span>

          <div className="flex flex-col gap-2 text-sm text-outline-variant">
            <span>{contact.address}</span>
            <span>{contact.email}</span>
            <span>WhatsApp : {contact.whatsapp}</span>
          </div>

          <a
            href="#"
            className="mt-2 inline-flex w-fit items-center px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-surface-container transition-colors"
          >
            Support technique 24/7
          </a>
        </div>

      </div>

      {/* Copyright et liens légaux */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-outline-variant">

        <p>
          © {year} {company.name}. Tous droits réservés.
        </p>

        <div className="flex items-center gap-4">
          {legalLinks.map((link, i) => (
            <span
              key={link.path}
              className="flex items-center gap-4"
            >
              <a
                href={link.path}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>

              {i < legalLinks.length - 1 && (
                <span className="text-outline">•</span>
              )}
            </span>
          ))}
        </div>

      </div>

    </div>
  </footer>
)
}

export default Footer