const benefits = [
  "Negocios que venden por Instagram o WhatsApp y quieren verse más profesionales.",
  "Servicios que necesitan generar mayor confianza online.",
  "Emprendedores que buscan una web clara, estructurada y lista en pocos días.",
  "Marcas que quieren dejar de depender exclusivamente de redes sociales.",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 flex-shrink-0"
    >
      <circle cx="10" cy="10" r="10" fill="rgba(59,130,246,0.12)" />
      <path
        d="M6.5 10.5L9 13l5-6"
        stroke="#38bdf8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function IsForYou() {
  return (
    <section className="relative px-4 py-20 md:px-6 md:py-28 lg:py-32">
      {/* Divider top */}
      <div
        className="absolute inset-x-0 top-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-blue-500/5 blur-[100px]" />

      {/* ── Glass card wrapper ── */}
      <div
        className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[32px]"
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
              ¿Es para tu negocio?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/55 md:text-base">
              Este servicio está diseñado para negocios que quieren construir
              una presencia digital profesional, clara y enfocada en resultados.
            </p>
          </div>

          {/* Section label */}
          <div className="mx-auto mt-12 max-w-[680px] md:mt-14">
            <h3 className="text-center text-[1rem] font-semibold text-sky-300 md:text-[1.05rem]">
              Este servicio es ideal para:
            </h3>

            {/* Benefit cards */}
            <div className="mt-6 flex flex-col gap-3.5">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl px-6 py-5"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0.015) 100%)",
                    border: "1px solid rgba(59,130,246,0.1)",
                  }}
                >
                  <CheckIcon />
                  <span className="text-[14.5px] leading-[1.65] text-white/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Soft note */}
            <div
              className="mt-8 rounded-2xl px-6 py-5 text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[13.5px] leading-[1.7] text-white/40">
                Este formato está pensado para proyectos ágiles y enfocados en
                resultados. Si necesitas un desarrollo altamente complejo o
                corporativo, podemos evaluarlo por separado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
