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
      className="px-4 py-24 md:px-6 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[1.875rem] font-bold tracking-tight text-white md:text-[2.5rem] lg:text-[3rem]">
            Cómo funciona
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed tracking-wide text-white/50 md:text-base">
            Un proceso optimizado en tres etapas. Enfoque estratégico, ejecución ágil.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-3 md:mt-20 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl px-7 py-10 transition-all duration-300 ease-out hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.16)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.2)";
              }}
            >
              <span className="text-xs font-semibold tracking-widest text-sky-400">
                {step.number}
              </span>
              <h3 className="mt-5 text-[1.1rem] font-semibold leading-snug text-white/90">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-white/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
