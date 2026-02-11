const steps = [
  {
    number: "01",
    title: "Confirmación y reserva",
    description:
      "Asegura tu cupo a través de WhatsApp. Confirmamos disponibilidad y definimos el alcance inicial del proyecto.",
  },
  {
    number: "02",
    title: "Definición estratégica",
    description:
      "Recopilamos información clave de tu marca: identidad visual, propuesta de valor, referencias y objetivos comerciales.",
  },
  {
    number: "03",
    title: "Desarrollo y entrega",
    description:
      "Diseñamos y desarrollamos tu sitio web con enfoque en conversión. Recibes tu web lista en 48 horas + una ronda de ajustes estratégicos.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="px-4 py-20 md:px-6 md:py-28 lg:py-32"
    >
      {/* ── Card wrapper (like Hero) ── */}
      <div
        className="relative mx-auto w-full max-w-[1200px] rounded-[36px]"
        style={{
          overflow: "visible",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        {/* Card background */}
        <div
          className="absolute inset-0 rounded-[36px]"
          style={{ background: "#FFFFFF" }}
        />

        {/* Subtle top shine */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] rounded-t-[36px] bg-white/20" />

        {/* Content */}
        <div className="relative z-10 px-6 py-14 sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-20">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-[#0f172a] md:text-[2.25rem] lg:text-[2.75rem]">
              Cómo funciona
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-500 md:text-base">
              Un proceso optimizado en tres etapas. Enfoque estratégico, ejecución ágil.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-14 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 px-7 py-8 transition-all duration-250 ease-out hover:-translate-y-1 hover:border-sky-200/60 hover:bg-white hover:shadow-lg hover:shadow-sky-100/40"
              >
                {/* Number */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sm font-bold text-sky-600">
                  {step.number}
                </div>

                <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug text-[#0f172a]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
