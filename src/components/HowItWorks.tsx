const steps = [
  {
    number: "01",
    title: "Reserva tu cupo",
    description:
      "Escríbenos por WhatsApp y asegura tu lugar con el precio de lanzamiento.",
  },
  {
    number: "02",
    title: "Nos compartes tu info",
    description:
      "Logo, textos, referencias y objetivo. Si no tienes algo, te guiamos.",
  },
  {
    number: "03",
    title: "Entrega en 48 horas",
    description:
      "Te entregamos tu web lista para vender + 1 ronda de cambios incluida.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="px-4 md:px-6"
      style={{ paddingTop: 72, paddingBottom: 72 }}
    >
      <style>{`
        @media (min-width: 768px) {
          #como-funciona { padding-top: 96px !important; padding-bottom: 96px !important; }
        }
        @media (min-width: 1024px) {
          #como-funciona { padding-top: 120px !important; padding-bottom: 120px !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[1.875rem] font-bold tracking-tight text-white/90 md:text-[2.25rem] lg:text-[3rem]">
            Cómo funciona
          </h2>
          <p className="mt-4 text-base tracking-[0.02em] text-white/75 md:text-lg">
            3 pasos claros. Sin reuniones eternas.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-16 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl px-7 py-9 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.18)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.2)";
              }}
            >
              <span className="text-sm font-semibold text-sky-400">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-white/90">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
