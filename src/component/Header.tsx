import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LANGS, useLanguage, type NavLinkKey } from "../i18n/LanguageContext";
import BrandLogo, { type LogoMode } from "./BrandLogo";

/* ---------- Réglages rapides ---------- */
const PHONE = "+22600000000"; // ← remplace par ton vrai numéro
const LOGO_SRC = "/logo.jpeg";
const LOGO_MODE: LogoMode = "light"; // "light" | "white" | "original"

const SERVICES_LINKS: { key: NavLinkKey; to: string }[] = [
  { key: "ourServices", to: "/services" },
  { key: "history", to: "/historique" },
];

const MAIN_LINKS: { key: NavLinkKey; to?: string; end?: boolean; dropdown?: boolean }[] = [
  { key: "home", to: "/", end: true },
  { key: "services", dropdown: true },
  { key: "contact", to: "/contact" },
];

/* ---------- Petites icônes SVG (aucune dépendance) ---------- */
const Chevron = ({ open }: { open?: boolean }) => (
  <svg
    className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-[18px] w-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.19a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const Flag = ({ code }: { code: string }) =>
  code === "fr" ? (
    <svg className="h-3.5 w-5 rounded-[3px]" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  ) : (
    <svg className="h-3.5 w-5 rounded-[3px]" viewBox="0 0 60 30" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 60 30M60 0 0 30" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );

/* ---------- Composant ---------- */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang: langCode, setLang: changeLang, t } = useLanguage();
  const lang = LANGS.find((l) => l.code === langCode) ?? LANGS[0];

  const servicesRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Transparent en haut de page, verre sombre après le scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 24);
      if (y < 80) setHidden(false); // tout en haut : toujours visible
      else if (delta > 8) setHidden(true); // on descend : le menu disparaît
      else if (delta < -8) setHidden(false); // on remonte : le menu réapparaît
      if (Math.abs(delta) > 8) lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme tout quand on change de page
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  // Ferme les menus déroulants au clic extérieur ou sur Échap
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setLangOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkBase =
    "relative px-1 py-2 text-[17px] font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 rounded-md";
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? "text-sky-500" : "text-white/90 hover:text-sky-400"}`;

  const servicesActive = SERVICES_LINKS.some((l) => location.pathname.startsWith(l.to));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden && !mobileOpen && !servicesOpen && !langOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-[#0b1220]/70 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 transition-all duration-500 lg:grid-cols-[1fr_auto_1fr] lg:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-self-start" aria-label={t.nav.homeAria}>
          <BrandLogo
            src={LOGO_SRC}
            mode={LOGO_MODE}
            alt="IAS Tech"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-12" : "h-14 lg:h-16"}`}
          />
        </Link>

        {/* Navigation desktop (centrée) */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label={t.nav.mainNav}>
          {MAIN_LINKS.map((item) =>
            item.dropdown ? (
              <div key={item.key} ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  onMouseEnter={() => setServicesOpen(true)}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  className={`${linkBase} flex items-center gap-1.5 ${
                    servicesActive || servicesOpen ? "text-sky-500" : "text-white/90 hover:text-sky-400"
                  }`}
                >
                  {t.nav[item.key]}
                  <Chevron open={servicesOpen} />
                </button>

                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <ul
                    role="menu"
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1a2e]/85 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl"
                  >
                    {SERVICES_LINKS.map((s) => (
                      <li key={s.to} role="none">
                        <Link
                          role="menuitem"
                          to={s.to}
                          className="block rounded-xl px-4 py-2.5 text-[15px] text-white/85 transition-colors hover:bg-white/10 hover:text-sky-400 focus-visible:bg-white/10 focus-visible:outline-none"
                        >
                          {t.nav[s.key]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink key={item.key} to={item.to!} end={item.end} className={linkClass}>
                {t.nav[item.key]}
              </NavLink>
            )
          )}

          {/* Sélecteur de langue */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              className="flex items-center gap-2 rounded-full px-2 py-1.5 text-[15px] text-white/90 transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
            >
              <Flag code={lang.code} />
              {lang.label}
              <Chevron open={langOpen} />
            </button>

            <ul
              role="listbox"
              className={`absolute right-0 top-full mt-3 w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1a2e]/85 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 ${
                langOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
              }`}
            >
              {LANGS.map((l) => (
                <li key={l.code} role="option" aria-selected={l.code === lang.code}>
                  <button
                    type="button"
                    onClick={() => {
                      changeLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[15px] transition-colors hover:bg-white/10 ${
                      l.code === lang.code ? "text-sky-400" : "text-white/85"
                    }`}
                  >
                    <Flag code={l.code} />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Bouton Appeler + burger */}
        <div className="flex items-center gap-3 justify-self-end">
          <a
            href={`tel:${PHONE}`}
            className="group hidden items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0b63c5] to-[#0ea5e9] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-sky-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:inline-flex"
          >
            <span className="transition-transform duration-300 group-hover:rotate-12">
              <PhoneIcon />
            </span>
            {t.nav.call}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 lg:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`grid overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-2" aria-label={t.nav.mobileNav}>
            {MAIN_LINKS.map((item) =>
              item.dropdown ? (
                <div key={item.key}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-lg text-white/90 transition-colors hover:bg-white/10"
                  >
                    {t.nav[item.key]}
                    <Chevron open={mobileServicesOpen} />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="ml-4 flex flex-col border-l border-white/15 pl-3">
                        {SERVICES_LINKS.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            className="rounded-lg px-3 py-2.5 text-base text-white/75 transition-colors hover:text-sky-400"
                          >
                            {t.nav[s.key]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.to!}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-lg transition-colors hover:bg-white/10 ${
                      isActive ? "text-sky-500" : "text-white/90"
                    }`
                  }
                >
                  {t.nav[item.key]}
                </NavLink>
              )
            )}

            <div className="mt-3 flex items-center gap-3 px-4">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => changeLang(l.code)}
                  className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    l.code === lang.code
                      ? "border-sky-400 text-sky-400"
                      : "border-white/15 text-white/80 hover:border-white/30"
                  }`}
                >
                  <Flag code={l.code} />
                  {l.label}
                </button>
              ))}
            </div>

            <a
              href={`tel:${PHONE}`}
              className="mt-4 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0b63c5] to-[#0ea5e9] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-sky-600/25 sm:hidden"
            >
              <PhoneIcon />
              {t.nav.call}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}