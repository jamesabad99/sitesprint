const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

const steps = [
  {
    num: "01",
    title: "Reserva tu cupo",
    description:
      "Escríbenos por WhatsApp, confirmamos disponibilidad y definimos el alcance de tu proyecto.",
    detail: "5 minutos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Definimos tu marca",
    description:
      "Recopilamos tu identidad visual, propuesta de valor, referencias y objetivos comerciales.",
    detail: "1 hora",
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
    title: "Entregamos tu web",
    description:
      "Diseñamos y desarrollamos tu web con enfoque en conversión. Incluye una ronda de ajustes.",
    detail: "48 horas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
      style={{ background: "#050505" }}
    >
      <div className="relative mx-auto max-w-[1000px]">
        {/* ── Header ── */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/30">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-2.5 w-2.5 text-blue-400/50">
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

        {/* ── Timeline ── */}
        <div className="relative mt-16">
          {/* Vertical line — desktop only */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px md:block" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)" }} />

          <div className="flex flex-col gap-6 md:gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="group relative flex flex-col md:flex-row md:items-start md:gap-10 md:py-10">
                {/* Left: number circle */}
                <div className="relative z-10 flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                  <div
                    className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-2xl text-[18px] font-bold text-white transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1))",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {step.num}
                  </div>
                  {/* Time badge — mobile inline */}
                  <span className="rounded-full bg-blue-400/10 px-3 py-1 text-[11px] font-medium text-blue-400/70 md:hidden">
                    {step.detail}
                  </span>
                </div>

                {/* Right: content card */}
                <div
                  className="mt-4 flex-1 rounded-2xl p-6 transition-all duration-300 group-hover:border-white/[0.1] md:mt-0 md:p-7"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-white/50">
                          {step.icon}
                        </div>
                        <h3 className="text-[1.05rem] font-semibold text-white md:text-[1.15rem]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-[400px] text-[13.5px] leading-[1.7] text-white/40">
                        {step.description}
                      </p>
                    </div>
                    {/* Time badge — desktop */}
                    <span className="hidden shrink-0 rounded-full bg-blue-400/10 px-3.5 py-1.5 text-[11px] font-medium text-blue-400/70 md:inline-flex">
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Connector dot between steps — desktop */}
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-[3px] left-[24px] hidden h-[7px] w-[7px] rounded-full bg-white/10 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 text-center">
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
