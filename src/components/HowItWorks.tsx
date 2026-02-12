const steps = [
  {
    num: "01",
    title: "Confirmación y reserva",
    description:
      "Asegura tu cupo a través de WhatsApp. Confirmamos disponibilidad y definimos el alcance inicial.",
    accent: "from-blue-400 to-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Definición estratégica",
    description:
      "Recopilamos tu identidad visual, propuesta de valor, referencias y objetivos comerciales.",
    accent: "from-purple-400 to-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Desarrollo y entrega",
    description:
      "Diseñamos tu web con enfoque en conversión. Entrega en 48h + una ronda de ajustes.",
    accent: "from-emerald-400 to-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="m13 2 7 7-7 7M11 22l-7-7 7-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const WA_URL = `https://wa.me/51952648191?text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20"
      style={{ background: "#050505" }}
    >
      {/* Background dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/30">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-2.5 w-2.5 text-blue-400/50">
              <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
            </svg>
            Cómo funciona
          </span>
          <h2 className="mt-4 text-[1.8rem] font-bold leading-[1.1] tracking-tight text-white md:text-[2.8rem]">
            Tres pasos para tu{" "}
            <em className="not-italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">web profesional</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[14px] leading-[1.7] text-white/35">
            Un proceso optimizado. Enfoque estratégico, ejecución ágil. Sin reuniones eternas.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 hover:border-white/[0.12] md:p-7"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              {/* Gradient accent top line */}
              <div className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${step.accent} opacity-40 transition-opacity duration-300 group-hover:opacity-80`} />

              {/* Top row: icon + big number */}
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/70">
                  {step.icon}
                </div>
                <span className={`bg-gradient-to-b ${step.accent} bg-clip-text text-[2.5rem] font-bold leading-none text-transparent opacity-20`}>
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="mt-auto pt-10 md:pt-14">
                <h3 className="text-[1rem] font-semibold text-white md:text-[1.05rem]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.7] text-white/35">
                  {step.description}
                </p>
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -bottom-10 -right-10 h-[150px] w-[150px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)`,
                  filter: "blur(30px)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 text-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
          >
            Empezar ahora
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
