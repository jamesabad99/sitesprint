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
      "Diseñamos y desarrollamos tu sitio web con enfoque en conversión. Entrega en 48 horas + una ronda de ajustes estratégicos.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="px-4 py-20 md:px-6 md:py-28 lg:py-32"
    >
      <div
        className="relative mx-auto w-full max-w-[1200px] rounded-[32px]"
        style={{ overflow: "hidden", boxShadow: "0 10px 50px rgba(0,0,0,0.5)" }}
      >
        {/* Background — softer version of Hero gradient */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #1a6da8 0%, #0f5588 30%, #0a4270 60%, #083560 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(90,170,230,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:px-20 lg:py-28">
          {/* Header */}
          <div className="text-center">
            <h2 className="mx-auto text-[2rem] font-semibold tracking-tight text-white md:text-[2.8rem] md:leading-[1.1]">
              Cómo funciona
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-white/55 md:text-[15px]">
              Un proceso optimizado en tres etapas. Enfoque estratégico,
              ejecución ágil.
            </p>
          </div>

          {/* Step cards */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-20 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[22px] px-7 py-9 backdrop-blur-sm md:px-8 md:py-10"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                }}
              >
                {/* Number badge */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-white/90"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  {step.number}
                </div>

                <h3 className="mt-6 text-[1.1rem] font-semibold leading-snug text-white md:text-[1.15rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-white/65">
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
