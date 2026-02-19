"use client";

import RotatingWords from "./RotatingWords";

const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nMe interesa el servicio de diseño web de SiteSprint.\n\nMi negocio es:\n\n¿Podemos conversar sobre mi proyecto?"
)}`;

export default function Hero() {
  return (
    <section data-hero className="relative flex min-h-[100svh] w-full flex-col overflow-hidden px-5 py-5 md:px-8 md:py-6">
      {/* ── Navbar ── */}
      <nav className="relative z-20 mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <span className="text-[15px] font-bold tracking-tight text-slate-900">
          SiteSprint
        </span>

        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "#servicios", label: "Servicios" },
            { href: "#portafolio", label: "Portafolio" },
            { href: "#como-funciona", label: "Proceso" },
            { href: "#contacto", label: "Contacto" },
          ].map((link) => (
            <button
              key={link.href}
              onClick={() => {
                const el = document.querySelector(link.href);
                if (!el) return;
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: "smooth" });
              }}
              className="text-[13px] font-medium text-slate-400 transition-colors hover:text-slate-900"
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-900 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800"
          style={{ display: "none" }}
          data-desktop-only
        >
          Conversemos
        </a>
      </nav>

      {/* ── Hero body ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 data-hero-title className="mx-auto max-w-xs text-[2.4rem] font-bold leading-[1.06] tracking-tight text-slate-900 sm:max-w-lg md:max-w-3xl md:text-[4.5rem] md:leading-[1.04]">
          Diseño web que{" "}
          <br className="hidden sm:block" />
          {/* Mobile: 3 words (no "eleva") */}
          <span className="md:hidden">
            <RotatingWords
              words={["impulsa", "transforma", "potencia"]}
              stepDuration={2}
              className="text-blue-600"
            />
          </span>
          {/* Desktop: 4 words */}
          <span className="hidden md:inline">
            <RotatingWords
              words={["impulsa", "transforma", "potencia", "eleva"]}
              stepDuration={2}
              className="text-blue-600"
            />
          </span>{" "}
          tu negocio.
        </h1>

        <p data-hero-sub className="mx-auto mt-5 max-w-[420px] text-[15px] leading-relaxed text-slate-500 md:text-[17px]">
          Webs profesionales, estratégicas y optimizadas para convertir visitantes en clientes.
        </p>

        {/* CTAs */}
        <div data-hero-ctas className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => {
              const el = document.getElementById("portafolio");
              if (!el) return;
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"
          >
            Ver portafolio
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 ease-out hover:border-slate-400 hover:bg-slate-50"
          >
            Conversemos
          </a>
        </div>

        {/* Trust badges */}
        <div data-hero-trust className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-slate-400">
          <span>Enfocada en conversión</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
          <span>Diseño estratégico</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
          <span>Optimizada para móvil</span>
        </div>
      </div>

      {/* ── Floating browser mockups ── */}
      <div data-hero-mockups className="pointer-events-none absolute bottom-0 left-1/2 z-[5] hidden w-full max-w-[1200px] -translate-x-1/2 md:block">
        <div className="relative h-[280px]">
          {/* Left card */}
          <div
            className="absolute bottom-0 left-[3%] w-[360px] overflow-hidden rounded-t-xl border border-slate-200 shadow-lg"
            style={{ transform: "rotate(-5deg) translateY(50px)" }}
          >
            <div className="flex h-[28px] items-center gap-[5px] bg-slate-100 px-3">
              <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#ffbd2e]" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-[10px] text-slate-400">Advisora</span>
            </div>
            <div className="relative h-[220px] overflow-hidden bg-slate-50">
              <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover object-top">
                <source src="/videos/caso1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Center card */}
          <div
            className="absolute bottom-0 left-1/2 w-[400px] -translate-x-1/2 overflow-hidden rounded-t-xl border border-slate-200 shadow-xl"
            style={{ transform: "translateX(-50%) translateY(30px)" }}
          >
            <div className="flex h-[30px] items-center gap-[5px] bg-slate-100 px-3.5">
              <span className="h-[8px] w-[8px] rounded-full bg-[#ff5f57]" />
              <span className="h-[8px] w-[8px] rounded-full bg-[#ffbd2e]" />
              <span className="h-[8px] w-[8px] rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-[11px] text-slate-400">Pipely</span>
            </div>
            <div className="relative h-[240px] overflow-hidden bg-slate-50">
              <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover object-top">
                <source src="/videos/caso2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right card */}
          <div
            className="absolute bottom-0 right-[3%] w-[360px] overflow-hidden rounded-t-xl border border-slate-200 shadow-lg"
            style={{ transform: "rotate(5deg) translateY(50px)" }}
          >
            <div className="flex h-[28px] items-center gap-[5px] bg-slate-100 px-3">
              <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#ffbd2e]" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-[10px] text-slate-400">Comira</span>
            </div>
            <div className="relative h-[220px] overflow-hidden bg-slate-50">
              <video muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover object-top">
                <source src="/videos/caso3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[6] h-16 w-full"
        style={{ background: "linear-gradient(to top, #f8fafc, transparent)" }}
      />
    </section>
  );
}
