import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks, company } from "../data/siteData"

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-cyan shadow-sm">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

        <Link to="/" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt={company.name}
            className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-2 p-1 rounded-lg bg-white/15">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path === "accueil" ? "/" : `/${link.path}`}
              className="px-4 py-2 text-sm font-semibold text-white/85 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white hover:bg-surface-container-low text-brand-cyan text-sm font-bold transition-colors shadow-sm">
            {company.ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/15 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {open && (
        <nav className="lg:hidden absolute top-20 left-0 w-full bg-brand-cyan shadow-lg border-t border-white/20 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path === "accueil" ? "/" : `/${link.path}`}
              className="px-4 py-3 rounded-lg text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a href="#" className="sm:hidden mt-3 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-brand-cyan text-sm font-bold shadow-sm">
            {company.ctaLabel}
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header