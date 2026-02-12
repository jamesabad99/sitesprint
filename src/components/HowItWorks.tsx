const steps = [
  {
    num: "01",
    title: "Confirmación y reserva",
    description:
      "Asegura tu cupo a través de WhatsApp. Confirmamos disponibilidad y definimos el alcance inicial del proyecto.",
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
      "Recopilamos información clave de tu marca: identidad visual, propuesta de valor, referencias y objetivos comerciales.",
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
      "Diseñamos y desarrollamos tu sitio web con enfoque en conversión. Entrega en 48 horas + una ronda de ajustes estratégicos.",
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
      className="px-5 py-16 md:px-8 md:py-20"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* ── Section divider star ── */}
        <div className="mb-10 flex items-center justify-center md:mb-12">
          <div className="h-px flex-1 bg-[#1a1a1a]/10" />
          <div className="mx-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#1a1a1a]/10">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-[#1a1a1a]/30">
              <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
            </svg>
          </div>
          <div className="h-px flex-1 bg-[#1a1a1a]/10" />
        </div>

        {/* ── Header: 2 columns ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div>
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]/40">
              Cómo funciona
            </span>
            <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] md:text-[2.5rem]">
              Proceso simple,{" "}
              <em className="not-italic text-[#1a1a1a]/40">resultados reales</em>
            </h2>
            <p className="mt-4 max-w-[440px] text-[14px] leading-[1.7] text-[#1a1a1a]/45">
              Un proceso optimizado en tres etapas. Enfoque estratégico,
              ejecución ágil. Sin reuniones eternas.
            </p>
          </div>

          {/* Right — pill button */}
          <div className="flex-shrink-0">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#333]"
            >
              Reservar cupo
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group flex flex-col rounded-2xl border border-[#1a1a1a]/8 p-6 transition-all duration-300 hover:border-[#1a1a1a]/15 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-7"
              style={{ background: "#fafaf9" }}
            >
              {/* Top row: icon + number */}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a1a1a] text-white">
                  {step.icon}
                </div>
                <span className="text-[13px] font-semibold tabular-nums text-[#1a1a1a]/15">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="mt-auto pt-14 md:pt-16">
                <h3 className="text-[1.05rem] font-semibold text-[#1a1a1a] md:text-[1.1rem]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.7] text-[#1a1a1a]/45">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
