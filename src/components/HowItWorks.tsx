const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

const steps = [
  {
    num: "01",
    title: "Reserva tu cupo",
    description:
      "Escríbenos por WhatsApp, confirmamos disponibilidad y definimos el alcance de tu proyecto.",
    detail: "5 min",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    num: "02",
    title: "Definimos tu marca",
    description:
      "Recopilamos tu identidad visual, propuesta de valor, referencias y objetivos comerciales.",
    detail: "1 hora",
    gradient: "from-purple-500 to-blue-400",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    num: "03",
    title: "Entregamos tu web",
    description:
      "Diseñamos y desarrollamos tu web con enfoque en conversión. Incluye una ronda de ajustes.",
    detail: "48 hrs",
    gradient: "from-emerald-400 to-cyan-400",
    glowColor: "rgba(52,211,153,0.15)",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28"
      style={{ background: "#050505" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1100px]">
        {/* ── Header ── */}
        <div className="text-center">
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

        {/* ── Cards grid ── */}
        <div className="mt-14 grid gap-4 md:mt-18 md:grid-cols-3 md:gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative overflow-hidden rounded-3xl p-[1px]"
            >
              {/* Animated gradient border on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `conic-gradient(from 180deg, transparent, ${step.glowColor}, transparent 40%)`,
                }}
              />

              {/* Card body */}
              <div
                className="relative flex h-full flex-col rounded-3xl px-7 pb-7 pt-8 md:px-6 md:pb-8 md:pt-10"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Big gradient number — watermark */}
                <span
                  className={`pointer-events-none absolute -right-3 -top-6 select-none bg-gradient-to-br ${step.gradient} bg-clip-text text-[8rem] font-black leading-none text-transparent opacity-[0.07] md:-right-2 md:-top-4 md:text-[9rem]`}
                >
                  {step.num}
                </span>

                {/* Glow orb behind number */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: step.glowColor }}
                />

                {/* Time pill */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${step.gradient} px-3 py-1`}
                  >
                    <span className="text-[10px] font-bold tracking-wider text-white">
                      {step.detail}
                    </span>
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.1), transparent)",
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[1.2rem] font-bold leading-tight text-white md:text-[1.3rem]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-[13.5px] leading-[1.75] text-white/40">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r ${step.gradient} opacity-30 transition-all duration-500 group-hover:w-20 group-hover:opacity-60`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Connecting arrows between cards — desktop only ── */}
        <div className="pointer-events-none absolute left-0 right-0 top-[58%] hidden items-center justify-center md:flex">
          <div className="flex w-full max-w-[1100px] items-center justify-around px-[18%]">
            {[0, 1].map((i) => (
              <svg
                key={i}
                viewBox="0 0 40 16"
                fill="none"
                className="h-3 w-8 text-white/10"
              >
                <path
                  d="M0 8h36m0 0l-6-5.5m6 5.5l-6 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-14 text-center">
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
      </div>
    </section>
  );
}
