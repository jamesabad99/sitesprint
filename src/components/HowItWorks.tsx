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
      "Diseñamos y desarrollamos tu sitio web con enfoque en conversión. Recibes tu web lista en 48 horas + una ronda de ajustes estratégicos.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative px-4 md:px-6"
      style={{
        background: "#05070C",
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          #como-funciona { padding-top: 140px !important; padding-bottom: 140px !important; }
        }
        @media (min-width: 1024px) {
          #como-funciona { padding-top: 160px !important; padding-bottom: 160px !important; }
        }
      `}</style>

      {/* Subtle center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(56,152,236,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1140px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[1.875rem] font-bold tracking-tight text-white md:text-[2.5rem] lg:text-[3rem]">
            Cómo funciona
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/45 md:text-base">
            Un proceso optimizado en tres etapas. Enfoque estratégico, ejecución ágil.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-20 md:gap-7">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl px-8 pb-10 pt-9 transition-all duration-300 ease-out hover:-translate-y-1.5"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(100,180,255,0.25)";
                e.currentTarget.style.boxShadow =
                  "0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(56,152,236,0.08), inset 0 1px 0 rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)";
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(56,152,236,0.5) 50%, transparent 100%)",
                  opacity: 0.4,
                }}
              />

              {/* Corner glow */}
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-[30px] transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "rgba(56,152,236,0.12)" }}
              />

              {/* Number badge */}
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-sky-300"
                style={{
                  background: "rgba(56,152,236,0.1)",
                  border: "1px solid rgba(56,152,236,0.2)",
                }}
              >
                {step.number}
              </div>

              <h3 className="mt-6 text-[1.15rem] font-semibold leading-snug text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-white/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
