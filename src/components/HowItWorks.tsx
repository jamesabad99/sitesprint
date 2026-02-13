"use client";

const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

const steps = [
  {
    title: "Conversamos",
    description:
      "Nos escribes por WhatsApp, entendemos tu negocio y definimos juntos qué necesita tu web para vender.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="4" y="8" width="40" height="28" rx="6" stroke="url(#g1)" strokeWidth="2" />
        <path d="M12 32l-4 6v-6" stroke="url(#g1)" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="18" cy="22" r="2" fill="url(#g1)" />
        <circle cx="24" cy="22" r="2" fill="url(#g1)" />
        <circle cx="30" cy="22" r="2" fill="url(#g1)" />
        <defs>
          <linearGradient id="g1" x1="4" y1="8" x2="44" y2="36">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color1: "#3b82f6",
    color2: "#06b6d4",
  },
  {
    title: "Diseñamos",
    description:
      "Creamos tu web desde cero con tu identidad visual, optimizada para convertir visitantes en clientes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="url(#g2)" strokeWidth="2" />
        <rect x="12" y="12" width="10" height="10" rx="2" fill="url(#g2)" opacity="0.3" />
        <rect x="12" y="26" width="24" height="3" rx="1.5" fill="url(#g2)" opacity="0.4" />
        <rect x="12" y="33" width="16" height="3" rx="1.5" fill="url(#g2)" opacity="0.2" />
        <circle cx="34" cy="16" r="5" stroke="url(#g2)" strokeWidth="2" />
        <defs>
          <linearGradient id="g2" x1="6" y1="6" x2="42" y2="42">
            <stop stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color1: "#8b5cf6",
    color2: "#ec4899",
  },
  {
    title: "Lanzamos",
    description:
      "Entregamos tu web lista para vender. Incluye una ronda de ajustes para que quede perfecta.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <path d="M24 4l4 12h12l-10 7 4 12-10-7-10 7 4-12L8 16h12z" stroke="url(#g3)" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="6" fill="url(#g3)" opacity="0.2" />
        <defs>
          <linearGradient id="g3" x1="8" y1="4" x2="40" y2="44">
            <stop stopColor="#10b981" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color1: "#10b981",
    color2: "#06b6d4",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative px-5 md:px-8"
      style={{ background: "#050505" }}
    >
      {/* ── Header ── */}
      <div className="pb-12 pt-20 text-center md:pb-16 md:pt-28">
        <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/30">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-2.5 w-2.5 text-blue-400/50"
          >
            <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
          </svg>
          Proceso
        </span>
        <h2 className="mt-4 text-[1.8rem] font-bold leading-[1.1] tracking-tight text-white md:text-[2.8rem]">
          De idea a{" "}
          <em className="not-italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            web lista
          </em>{" "}
          en 3 pasos
        </h2>
      </div>

      {/* ── Sticky card stack ── */}
      <div className="relative mx-auto max-w-[780px]">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="sticky pb-6"
            style={{ top: `${70 + i * 24}px`, zIndex: (i + 1) * 10 }}
          >
            <div
              className="group relative overflow-hidden rounded-[28px] transition-shadow duration-500"
              style={{
                background: "#0c0c0c",
                border: `1px solid rgba(255,255,255,0.06)`,
                boxShadow: `0 24px 80px rgba(0,0,0,0.6)`,
              }}
            >
              {/* Ambient glow — top right */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle, ${step.color1}, transparent 70%)`,
                }}
              />
              {/* Ambient glow — bottom left */}
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-10 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
                style={{
                  background: `radial-gradient(circle, ${step.color2}, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative px-8 py-10 md:px-12 md:py-14">
                <h3 className="text-[1.5rem] font-bold tracking-tight text-white md:text-[1.75rem]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[480px] text-[15px] leading-[1.8] text-white/40 md:text-[15.5px]">
                  {step.description}
                </p>

                {/* Decorative gradient ring — desktop only */}
                <div
                  className="pointer-events-none absolute right-10 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full opacity-[0.05] md:block"
                  style={{
                    background: `conic-gradient(from 0deg, ${step.color1}, ${step.color2}, ${step.color1})`,
                  }}
                />
              </div>

              {/* Bottom gradient accent */}
              <div
                className="h-[2px] w-full opacity-20 transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  background: `linear-gradient(to right, transparent, ${step.color1}, ${step.color2}, transparent)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="pb-20 pt-10 text-center md:pb-28 md:pt-14">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
        >
          Empezar ahora
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
            <path
              d="M3 8h10m0 0L9 4m4 4L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
