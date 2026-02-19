const steps = [
  {
    num: "01",
    title: "Conversamos",
    description:
      "Nos contactas por WhatsApp. Entendemos tu negocio y definimos el alcance.",
  },
  {
    num: "02",
    title: "Estrategia",
    description:
      "Recopilamos tu identidad visual, propuesta de valor y objetivos comerciales.",
  },
  {
    num: "03",
    title: "Diseño y entrega",
    description:
      "Diseñamos tu web con enfoque en conversión. Entrega ágil + ajustes incluidos.",
  },
];

const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nMe interesa el servicio de diseño web de SiteSprint.\n\nMi negocio es:\n\n¿Podemos conversar sobre mi proyecto?"
)}`;

export default function HowItWorks() {
  return (
    <section id="como-funciona" data-animate className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[960px]">
        {/* Header */}
        <div className="text-center" data-child>
          <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
            Cómo funciona
          </h2>
          <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-relaxed text-slate-500">
            Proceso simple. Sin reuniones eternas.
          </p>
        </div>

        {/* Steps */}
        <div data-child className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-6 md:p-7">
              <span className="text-[12px] font-semibold text-slate-400">{step.num}</span>
              <h3 className="mt-2 text-[1rem] font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center" data-child>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Empezar ahora
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
