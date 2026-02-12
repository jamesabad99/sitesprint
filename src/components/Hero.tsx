"use client";

import Countdown from "./Countdown";

const WA_URL = `https://wa.me/51952648191?text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

const content = {
  brand: "SiteSprint",
  badge: "LANZAMIENTO",
  heading: "Tu web profesional lista en 48 horas. Hecha para vender desde el primer día.",
  subtext: "Diseñada para convertir. Sin procesos eternos.",
  trust: "Diseño estratégico · 1 ronda de cambios incluida · Optimizada para móvil",
  ctaPrimary: "Reservar cupo",
  ctaSecondary: "Ver cómo funciona",
  priceText: "Precio lanzamiento $250",
  priceOld: "(luego $300)",
  countdownLabel: "Termina en:",
  navCta: "Reservar cupo",
};

export default function Hero() {
  return (
    <section
      className="flex min-h-screen w-full flex-col px-4 py-6 md:px-6 md:py-8"
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
        {/* Badge */}
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
          {content.badge}
        </span>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-xs text-[1.7rem] font-bold leading-[1.12] tracking-tight text-white sm:max-w-md md:max-w-2xl md:text-[3.2rem] md:leading-[1.08]">
          {content.heading}
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-5 max-w-[280px] text-[14px] leading-relaxed text-white/50 sm:max-w-sm md:text-[16px]">
          {content.subtext}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/90"
          >
            {content.ctaPrimary}
          </a>
          <button
            onClick={() => {
              const el = document.getElementById("como-funciona");
              if (!el) return;
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white/70 transition-all duration-200 ease-out hover:border-white/30 hover:text-white"
          >
            {content.ctaSecondary}
          </button>
        </div>

        {/* Micro-trust */}
        <p className="mt-5 text-[11px] tracking-wide text-white/35 sm:text-[12px]">
          {content.trust}
        </p>

        {/* Countdown */}
        <div className="mt-10 flex flex-col items-center gap-3 md:mt-12">
          <p className="text-[11px] text-white/45 sm:text-xs">
            <span className="font-medium text-white/70">
              {content.priceText}
            </span>{" "}
            {content.priceOld} · {content.countdownLabel}
          </p>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
