const steps = [
  {
    title: "Confirmación y reserva",
    description:
      "Asegura tu cupo a través de WhatsApp. Confirmamos disponibilidad y definimos el alcance inicial del proyecto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Definición estratégica",
    description:
      "Recopilamos información clave de tu marca: identidad visual, propuesta de valor, referencias y objetivos comerciales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Desarrollo y entrega",
    description:
      "Diseñamos y desarrollamos tu sitio web con enfoque en conversión. Entrega en 48 horas + una ronda de ajustes estratégicos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="m13 2 7 7-7 7M11 22l-7-7 7-7"
          stroke="currentColor"
          strokeWidth="1.8"
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
        {/* ── Header: 2 columns ── */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div>
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]/50">
              &bull; Cómo funciona
            </span>
            <h2 className="mt-4 text-[1.8rem] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.8rem]">
              Proceso simple,
              <br />
              resultados reales
            </h2>
            <p className="mt-5 max-w-[480px] text-[15px] leading-[1.7] text-[#1a1a1a]/50 md:text-base">
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
              className="inline-block rounded-full bg-[#1a1a1a] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:bg-[#333]"
            >
              Reservar cupo
            </a>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:mt-12">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col rounded-[20px] px-7 pb-8 pt-7 md:px-8 md:pb-10 md:pt-8"
              style={{ background: "#f0f0ec" }}
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a1a1a] text-white">
                {step.icon}
              </div>

              {/* Spacer to push title down */}
              <div className="mt-auto pt-16 md:pt-20">
                <h3 className="text-[1.15rem] font-semibold text-[#1a1a1a] md:text-[1.25rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#1a1a1a]/50">
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
