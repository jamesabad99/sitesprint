"use client";

import Countdown from "./Countdown";

const WA_URL = `https://wa.me/51952648191?text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

const content = {
  brand: "SiteSprint",
  badge: "Precio de lanzamiento",
  navCta: "Reservar cupo",
  trust: "Diseño estratégico · 1 ronda de cambios incluida · Optimizada para móvil",
  ctaPrimary: "Reservar cupo",
  ctaSecondary: "Ver cómo funciona",
  priceText: "Precio lanzamiento $250",
  priceOld: "(luego $300)",
  countdownLabel: "Termina en:",
};

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col px-5 py-5 md:px-8 md:py-6"
      style={{ background: "#050505" }}
    >
      {/* Navbar */}
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <span className="text-[15px] font-bold tracking-tight text-white">
          {content.brand}
        </span>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-xs font-medium text-[#1a1a1a] transition-colors hover:bg-white/90"
        >
          {content.navCta}
        </a>
      </nav>

      {/* Hero body */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        {/* Badge with star */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium tracking-[0.08em] text-white/50">
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-blue-400">
            <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
          </svg>
          {content.badge}
        </span>

        {/* Heading with italic emphasis */}
        <h1 className="mx-auto mt-6 max-w-xs text-[2.4rem] font-bold leading-[1.06] tracking-tight text-white sm:max-w-lg md:max-w-3xl md:text-[4.5rem] md:leading-[1.04]">
          Tu web profesional
          <br className="hidden sm:block" />
          {" "}lista en <em className="not-italic bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">48 horas.</em>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-5 max-w-[340px] text-[15px] leading-relaxed text-white/45 sm:max-w-md md:text-[17px]">
          Hecha para vender desde el primer día.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
          >
            {content.ctaPrimary}
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            onClick={() => {
              const el = document.getElementById("como-funciona");
              if (!el) return;
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="rounded-full border border-white/12 px-6 py-2.5 text-sm font-medium text-white/60 transition-all duration-200 ease-out hover:border-white/25 hover:text-white/90"
          >
            {content.ctaSecondary}
          </button>
        </div>

        {/* Micro-trust */}
        <p className="mt-5 text-[11px] tracking-wide text-white/30 sm:text-[12px]">
          {content.trust}
        </p>

        {/* Countdown */}
        <div className="mt-8 flex flex-col items-center gap-2.5">
          <p className="text-[11px] text-white/40 sm:text-xs">
            <span className="font-medium text-white/60">
              {content.priceText}
            </span>{" "}
            {content.priceOld} · {content.countdownLabel}
          </p>
          <Countdown />
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </section>
  );
}
