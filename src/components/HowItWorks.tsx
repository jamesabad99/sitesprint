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
      {/* ── Card (same structure as Hero) ── */}
      <div
        className="relative mx-auto w-full max-w-[1200px] rounded-[32px]"
        style={{ overflow: "hidden", boxShadow: "0 10px 50px rgba(0,0,0,0.5)" }}
      >
        {/* Background — same gradient system as Hero */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #b8ddf4 0%, #5fb5e5 12%, #1a78b8 30%, #0a4f8a 48%, #0d5a96 58%, #2e8ec8 72%, #68b5de 86%, #8ec8ea 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 38%, rgba(6,50,120,0.55) 0%, rgba(10,65,140,0.20) 50%, transparent 75%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 150% 100% at 50% 50%, transparent 35%, rgba(130,200,240,0.25) 65%, rgba(160,218,245,0.40) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-14 sm:px-10 md:px-16 md:py-20 lg:px-20 lg:py-24">
          {/* Header — matches Hero heading style */}
          <div className="text-center">
            <h2 className="mx-auto max-w-lg text-[1.7rem] font-semibold leading-[1.12] tracking-tight text-white md:text-[2.6rem] md:leading-[1.1]">
              Cómo funciona
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-white/80 md:text-[15px]">
              Un proceso optimizado en tres etapas. Enfoque estratégico,
              ejecución ágil.
            </p>
          </div>

          {/* Step cards */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 md:gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[20px] px-6 py-7 md:px-7 md:py-8"
                style={{
                  background: "rgba(0,30,70,0.25)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* Number badge */}
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  {step.number}
                </div>

                <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug text-white md:text-[1.1rem]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-white/75 md:text-[14px]">
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
