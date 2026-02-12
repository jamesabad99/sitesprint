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
      className="relative px-4 py-24 md:px-6 md:py-32 lg:py-40"
    >
      {/* Divider top */}
      <div
        className="absolute inset-x-0 top-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.5fr] md:gap-20 lg:gap-28">
          {/* Left — title block */}
          <div className="md:sticky md:top-32 md:self-start">
            <h2 className="text-[2rem] font-bold tracking-tight text-white md:text-[2.8rem] lg:text-[3.2rem] lg:leading-[1.08]">
              Cómo
              <br />
              funciona
            </h2>
            <p className="mt-5 max-w-[300px] text-base leading-[1.7] text-white/50">
              Un proceso optimizado en tres etapas. Enfoque estratégico,
              ejecución ágil.
            </p>
            <p className="mt-3 max-w-[300px] text-[13px] leading-[1.6] text-white/35">
              Sin reuniones eternas. Sin procesos innecesarios.
            </p>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            {/* Vertical line — subtle blue gradient */}
            <div
              className="absolute left-[19px] top-2 z-0 hidden h-[calc(100%-16px)] w-[1px] md:block"
              style={{
                background:
                  "linear-gradient(180deg, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.08) 100%)",
              }}
            />

            <div className="flex flex-col gap-12 md:gap-16">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex gap-6 md:gap-8">
                  {/* Number circle */}
                  <div className="relative z-10 flex flex-shrink-0 flex-col items-center">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        border: "1px solid rgba(59,130,246,0.25)",
                        boxShadow: "0 0 12px rgba(59,130,246,0.15)",
                      }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="mt-3 h-full w-[1px] md:hidden"
                        style={{ background: "rgba(59,130,246,0.15)" }}
                      />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className="-mt-1 flex-1 rounded-2xl px-7 py-7 md:px-8 md:py-8"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(59,130,246,0.1)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    }}
                  >
                    <h3 className="text-[1.12rem] font-semibold text-white md:text-[1.2rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-white/55">
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
