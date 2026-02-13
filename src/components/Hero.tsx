"use client";

import Countdown from "./Countdown";

const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
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
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden px-5 py-5 md:px-8 md:py-6"
      style={{ background: "#050505" }}
    >
      {/* ── Background layers ── */}

      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="pointer-events-none absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-[10%] top-[20%]"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-[5%] top-[60%]"
        style={{
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Floating decorative stars */}
      <svg viewBox="0 0 16 16" fill="currentColor" className="pointer-events-none absolute left-[12%] top-[22%] h-2.5 w-2.5 text-blue-400/20">
        <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
      </svg>
      <svg viewBox="0 0 16 16" fill="currentColor" className="pointer-events-none absolute right-[15%] top-[18%] h-3 w-3 text-blue-400/15">
        <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
      </svg>
      <svg viewBox="0 0 16 16" fill="currentColor" className="pointer-events-none absolute left-[8%] top-[65%] h-2 w-2 text-purple-400/20">
        <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
      </svg>
      <svg viewBox="0 0 16 16" fill="currentColor" className="pointer-events-none absolute right-[10%] top-[70%] h-2.5 w-2.5 text-blue-300/15">
        <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
      </svg>

      {/* Gradient lines */}
      <div
        className="pointer-events-none absolute left-0 top-[30%] h-px w-full opacity-20"
        style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.3), transparent)" }}
      />
      <div
        className="pointer-events-none absolute left-0 top-[70%] h-px w-full opacity-10"
        style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)" }}
      />

      {/* ── Navbar ── */}
      <nav className="relative z-20 mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <span className="text-[15px] font-bold tracking-tight text-white">
          {content.brand}
        </span>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#portafolio" className="text-[13px] text-white/50 transition-colors hover:text-white">
            Portafolio
          </a>
          <a href="#como-funciona" className="text-[13px] text-white/50 transition-colors hover:text-white">
            Cómo funciona
          </a>
          <a href="#contacto" className="text-[13px] text-white/50 transition-colors hover:text-white">
            Contacto
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-xs font-medium text-[#1a1a1a] transition-colors hover:bg-white/90"
          >
            {content.navCta}
          </a>
        </div>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-xs font-medium text-[#1a1a1a] transition-colors hover:bg-white/90 md:hidden"
        >
          {content.navCta}
        </a>
      </nav>

      {/* ── Hero body ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        {/* Badge with star */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium tracking-[0.08em] text-white/50 backdrop-blur-sm">
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-blue-400">
            <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
          </svg>
          {content.badge}
        </span>

        {/* Heading with gradient emphasis */}
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

      {/* ── Floating browser mockups ── */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-[5] hidden w-full max-w-[1100px] -translate-x-1/2 md:block">
        <div className="relative h-[160px]">
          {/* Left card */}
          <div
            className="absolute bottom-0 left-[5%] w-[280px] overflow-hidden rounded-t-xl border border-b-0 border-white/[0.06]"
            style={{ transform: "rotate(-6deg) translateY(40px)" }}
          >
            <div className="flex h-[22px] items-center gap-[4px] bg-white/[0.04] px-3">
              <span className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]/60" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#ffbd2e]/60" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#27c93f]/60" />
              <span className="ml-2 text-[9px] text-white/20">Advisora</span>
            </div>
            <div className="relative h-[120px] overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#162240]">
              <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover object-top opacity-30 blur-[1px]">
                <source src="/videos/caso1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Center card */}
          <div
            className="absolute bottom-0 left-1/2 w-[320px] -translate-x-1/2 overflow-hidden rounded-t-xl border border-b-0 border-white/[0.08]"
            style={{ transform: "translateX(-50%) translateY(20px)" }}
          >
            <div className="flex h-[24px] items-center gap-[4px] bg-white/[0.05] px-3">
              <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]/70" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#ffbd2e]/70" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#27c93f]/70" />
              <span className="ml-2 text-[10px] text-white/25">Pipely</span>
            </div>
            <div className="relative h-[130px] overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
              <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover object-top opacity-30 blur-[1px]">
                <source src="/videos/caso2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right card */}
          <div
            className="absolute bottom-0 right-[5%] w-[280px] overflow-hidden rounded-t-xl border border-b-0 border-white/[0.06]"
            style={{ transform: "rotate(6deg) translateY(40px)" }}
          >
            <div className="flex h-[22px] items-center gap-[4px] bg-white/[0.04] px-3">
              <span className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]/60" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#ffbd2e]/60" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#27c93f]/60" />
              <span className="ml-2 text-[9px] text-white/20">Comira</span>
            </div>
            <div className="relative h-[120px] overflow-hidden bg-gradient-to-br from-[#0c1220] to-[#1a2744]">
              <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover object-top opacity-30 blur-[1px]">
                <source src="/videos/caso3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[6] h-16 w-full"
        style={{ background: "linear-gradient(to top, #050505, transparent)" }}
      />
    </section>
  );
}
