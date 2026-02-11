"use client";

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
      {/* ── Glass card wrapper ── */}
      <div
        className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[36px]"
        style={{
          background:
            "linear-gradient(170deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Top edge highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.12) 50%, transparent 90%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-20">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-[1.75rem] font-bold tracking-tight text-white md:text-[2.25rem] lg:text-[2.75rem]">
              Cómo funciona
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/55 md:text-base">
              Un proceso optimizado en tres etapas. Enfoque estratégico,
              ejecución ágil.
            </p>
          </div>

          {/* Step cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-14 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-[20px] px-7 py-8 transition-all duration-300 ease-out hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border =
                    "1px solid rgba(100,180,255,0.2)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(56,152,236,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 16px rgba(0,0,0,0.2)";
                }}
              >
                {/* Hover corner glow */}
                <div
                  className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-0 blur-[24px] transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(56,152,236,0.1)" }}
                />

                {/* Number badge */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-sky-300"
                  style={{
                    background: "rgba(56,152,236,0.1)",
                    border: "1px solid rgba(56,152,236,0.18)",
                  }}
                >
                  {step.number}
                </div>

                <h3 className="mt-5 text-[1.1rem] font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.7] text-white/50">
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
