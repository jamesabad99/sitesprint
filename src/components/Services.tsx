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
    <section id="servicios" data-section className="px-5 py-16 md:px-8 md:py-20" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-[960px]">
        {/* Header */}
        <div className="text-center" data-child>
          <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
            Elige el plan ideal para ti
          </h2>
          <p className="mx-auto mt-3 max-w-[400px] text-[15px] leading-relaxed text-slate-500">
            Proyectos ágiles o desarrollos completamente personalizados.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Web Express — featured dark card */}
          <div data-child className="relative overflow-hidden rounded-2xl bg-slate-900 p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-blue-400">Web Express</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-white/70">
                48 HORAS
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-[2.8rem] font-bold leading-none tracking-tight text-white">$250</span>
              <span className="text-sm text-slate-500 line-through">$300</span>
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-400">
              Tu web profesional lista para convertir.
            </p>

            <div className="mt-6 rounded-xl bg-white/5 p-4">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-500">Oferta termina en</p>
              <Countdown dark />
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {expressFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-300">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-blue-400">
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
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Reservar cupo
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Web a Medida — clean light card */}
          <div data-child className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
            <span className="text-[13px] font-semibold text-slate-900">Web a Medida</span>

            <div className="mt-5">
              <span className="text-[2.8rem] font-bold leading-none tracking-tight text-slate-900">Custom</span>
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
              Para proyectos que necesitan más alcance.
            </p>

            <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-[13px] leading-relaxed text-slate-500">
                Cotización personalizada según tu proyecto, funcionalidades y páginas necesarias.
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {customFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-slate-400">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex-1" />

            <a
              href={WA_CUSTOM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
