const PHONE = "22670468331"; // numéro au format international, sans + ni espaces
const MESSAGE = "Bonjour IASTech, j'aimerais avoir un devis rapide.";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp avec le support IASTech"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-white p-2 shadow-xl ring-1 ring-black/5 transition hover:scale-105 sm:bottom-6 sm:right-6 sm:pr-6"
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.385.697 4.607 1.894 6.48L4 29l7.7-1.858A11.94 11.94 0 0 0 16.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3Zm0 21.8a9.77 9.77 0 0 1-5.03-1.39l-.36-.214-4.57 1.103 1.13-4.45-.235-.37A9.77 9.77 0 0 1 6.2 15c0-5.42 4.4-9.8 9.803-9.8 5.4 0 9.797 4.38 9.797 9.8s-4.397 9.8-9.797 9.8Zm5.37-7.34c-.295-.147-1.742-.86-2.012-.958-.27-.1-.466-.147-.662.147-.196.295-.76.958-.932 1.155-.172.196-.344.22-.638.074-.295-.147-1.245-.459-2.372-1.463-.877-.78-1.468-1.744-1.64-2.04-.172-.295-.018-.454.13-.6.133-.132.295-.344.442-.516.147-.172.196-.295.295-.49.098-.197.05-.37-.025-.517-.074-.147-.662-1.596-.907-2.185-.239-.574-.482-.496-.662-.505l-.564-.01c-.196 0-.515.074-.785.37-.27.295-1.03 1.007-1.03 2.456s1.055 2.85 1.202 3.046c.147.197 2.077 3.17 5.03 4.446.703.303 1.252.484 1.68.62.706.224 1.35.192 1.857.117.567-.085 1.742-.712 1.988-1.4.245-.687.245-1.277.172-1.4-.074-.122-.27-.196-.565-.343Z" />
        </svg>
      </span>

      {/* Texte masqué sur très petit écran pour ne pas gêner le contenu */}
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
          Support IASTech
        </span>
        <span className="text-sm font-bold text-[#0f4c81]">Besoin d'un devis rapide ?</span>
      </span>
    </a>
  );
}