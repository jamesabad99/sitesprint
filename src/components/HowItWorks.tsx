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
      className="px-4 py-24 md:px-6 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr] md:gap-20 lg:gap-28">
          {/* Left — title block */}
          <div className="md:sticky md:top-32 md:self-start">
            <h2 className="text-[2rem] font-bold tracking-tight text-white md:text-[2.8rem] lg:text-[3.2rem] lg:leading-[1.08]">
              Cómo
              <br />
              funciona
            </h2>
            <p className="mt-5 max-w-[280px] text-[15px] leading-[1.7] text-white/50">
              Un proceso optimizado en tres etapas. Enfoque estratégico,
              ejecución ágil.
            </p>
          </div>

          {/* Right — timeline steps */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-[1px] md:block"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />

            <div className="flex flex-col gap-10 md:gap-14">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex gap-6 md:gap-8">
                  {/* Number circle + connector */}
                  <div className="relative z-10 flex flex-shrink-0 flex-col items-center">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {step.number}
                    </div>
                    {/* Mobile connector line */}
                    {i < steps.length - 1 && (
                      <div
                        className="mt-3 h-full w-[1px] md:hidden"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className="-mt-1 flex-1 rounded-2xl px-6 py-6 md:px-7 md:py-7"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                    }}
                  >
                    <h3 className="text-[1.05rem] font-semibold text-white md:text-[1.12rem]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.75] text-white/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
