"use client";

import Countdown from "./Countdown";

const WA_EXPRESS = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nMe interesa el servicio Web Express (48 horas).\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos?"
)}`;

const WA_CUSTOM = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nMe interesa una Web a Medida para mi proyecto.\n\nMi negocio es:\nNecesito:\n\n¿Podemos agendar una conversación?"
)}`;

const expressFeatures = [
  "Diseño profesional",
  "Optimizada para móvil",
  "1 ronda de ajustes",
  "Enfoque en conversión",
];

const customFeatures = [
  "Diseño 100% personalizado",
  "Múltiples páginas",
  "Funcionalidades avanzadas",
  "Soporte extendido",
];

export default function Services() {
  return (
    <section id="servicios" data-animate className="px-5 py-16 md:px-8 md:py-20" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-[960px]">
        {/* Header */}
        <div className="text-center" data-animate-child>
          <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
            Elige el plan ideal para ti
          </h2>
          <p className="mx-auto mt-3 max-w-[400px] text-[15px] leading-relaxed text-slate-500">
            Proyectos ágiles o desarrollos completamente personalizados.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Web Express */}
          <div data-animate-child className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-blue-600">Web Express</span>
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-600">
                Popular
              </span>
            </div>
            <p className="mt-1 text-[14px] text-slate-500">Tu web lista en 48 horas</p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[2rem] font-bold tracking-tight text-slate-900">$250</span>
              <span className="text-sm text-slate-400 line-through">$300</span>
            </div>

            <div className="mt-3">
              <p className="mb-1.5 text-[11px] text-slate-400">Oferta termina en:</p>
              <Countdown />
            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {expressFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] text-slate-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 flex-shrink-0 text-blue-500">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WA_EXPRESS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Reservar cupo
            </a>
          </div>

          {/* Web a Medida */}
          <div data-animate-child className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
            <span className="text-[13px] font-medium text-slate-500">Web a Medida</span>
            <p className="mt-1 text-[14px] text-slate-500">Para proyectos que necesitan más</p>

            <div className="mt-4">
              <span className="text-[1.3rem] font-bold tracking-tight text-slate-900">Cotización personalizada</span>
            </div>

            <div className="mt-3">
              <p className="mb-1.5 text-[11px] text-slate-400">Desarrollo a tu ritmo</p>
              <div className="flex h-[52px] items-center rounded-xl border border-slate-100 bg-slate-50 px-4 text-[13px] text-slate-500">
                Tiempo y alcance según tu proyecto
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2.5">
              {customFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] text-slate-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 flex-shrink-0 text-slate-400">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={WA_CUSTOM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
