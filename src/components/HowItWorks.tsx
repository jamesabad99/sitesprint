"use client";

const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

const steps = [
  {
    num: "01",
    title: "Reserva tu cupo",
    description:
      "Escríbenos por WhatsApp, confirmamos disponibilidad y definimos el alcance de tu proyecto.",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    bgGlow: "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.12) 0%, transparent 60%)",
    borderColor: "rgba(59,130,246,0.2)",
    accentColor: "#3b82f6",
  },
  {
    num: "02",
    title: "Definimos tu marca",
    description:
      "Recopilamos tu identidad visual, propuesta de valor, referencias y objetivos comerciales.",
    gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    bgGlow: "radial-gradient(circle at 30% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)",
    borderColor: "rgba(139,92,246,0.2)",
    accentColor: "#8b5cf6",
  },
  {
    num: "03",
    title: "Entregamos tu web",
    description:
      "Diseñamos y desarrollamos tu web con enfoque en conversión. Incluye una ronda de ajustes.",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    bgGlow: "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.12) 0%, transparent 60%)",
    borderColor: "rgba(16,185,129,0.2)",
    accentColor: "#10b981",
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
      <div className="pb-10 pt-20 text-center md:pb-14 md:pt-28">
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
      <div className="relative mx-auto max-w-[700px]">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="sticky pb-5"
            style={{ top: `${80 + i * 20}px`, zIndex: (i + 1) * 10 }}
          >
            <div
              className="group relative overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-2xl"
              style={{
                background: "#0a0a0a",
                border: `1px solid ${step.borderColor}`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 0.5px ${step.borderColor}`,
              }}
            >
              {/* Background glow */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: step.bgGlow }}
              />

              {/* Big gradient number — watermark */}
              <div
                className="pointer-events-none absolute -right-4 -top-8 select-none text-[10rem] font-black leading-none md:-right-2 md:-top-6 md:text-[12rem]"
                style={{
                  backgroundImage: step.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.06,
                }}
              >
                {step.num}
              </div>

              {/* Content */}
              <div className="relative px-8 py-10 md:px-10 md:py-12">
                {/* Number badge */}
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-[17px] font-bold text-white"
                  style={{
                    background: step.gradient,
                    boxShadow: `0 8px 30px ${step.borderColor}`,
                  }}
                >
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="text-[1.4rem] font-bold leading-tight text-white md:text-[1.6rem]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[440px] text-[15px] leading-[1.8] text-white/45">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-8 h-[3px] w-14 rounded-full transition-all duration-500 group-hover:w-24"
                  style={{ background: step.gradient }}
                />
              </div>
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
