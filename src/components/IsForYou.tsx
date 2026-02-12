"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Para qué tipo de negocios es este servicio?",
    answer:
      "Negocios que venden por Instagram o WhatsApp y quieren verse más profesionales. Servicios que necesitan generar mayor confianza online. Emprendedores que buscan una web clara, estructurada y lista en pocos días.",
  },
  {
    question: "Qué incluye el precio de $250?",
    answer:
      "Diseño y desarrollo completo de tu sitio web profesional, optimizado para móvil, con enfoque en conversión. Incluye una ronda de ajustes estratégicos después de la entrega.",
  },
  {
    question: "Cuánto tiempo toma tener mi web lista?",
    answer:
      "Tu web estará lista en 48 horas desde que confirmamos el alcance y recibimos la información de tu marca. Sin procesos eternos ni reuniones innecesarias.",
  },
  {
    question: "Necesito tener todo el contenido listo?",
    answer:
      "No necesariamente. Te guiamos en el proceso de definición estratégica para recopilar la información clave: identidad visual, propuesta de valor, referencias y objetivos comerciales.",
  },
  {
    question: "Y si mi proyecto es más complejo?",
    answer:
      "Este formato está pensado para proyectos ágiles y enfocados en resultados. Si necesitas un desarrollo altamente complejo o corporativo, podemos evaluarlo por separado.",
  },
];

export default function IsForYou() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="px-5 py-16 md:px-8 md:py-20"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* ── Section divider ── */}
        <div className="mb-10 flex items-center justify-center md:mb-12">
          <div className="h-px flex-1 bg-[#1a1a1a]/10" />
          <div className="mx-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#1a1a1a]/10">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-[#1a1a1a]/30">
              <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
            </svg>
          </div>
          <div className="h-px flex-1 bg-[#1a1a1a]/10" />
        </div>

        {/* ── Header ── */}
        <div className="text-center">
          <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]/40">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.1] tracking-tight text-[#1a1a1a] md:text-[2.5rem]">
            Es para tu{" "}
            <em className="not-italic text-[#1a1a1a]/40">negocio?</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-[14px] leading-[1.7] text-[#1a1a1a]/45">
            Todo lo que necesitas saber sobre nuestro servicio de diseño web
            express — desde el proceso hasta la entrega.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="mx-auto mt-10 flex max-w-[860px] flex-col gap-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={i}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full text-left transition-all duration-300"
                style={{
                  background: isOpen ? "#1a1a1a" : "#fafaf9",
                  border: isOpen ? "1px solid #1a1a1a" : "1px solid rgba(26,26,26,0.08)",
                  borderRadius: isOpen ? "16px" : "14px",
                  padding: isOpen ? "22px 24px 24px" : "18px 24px",
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <span
                    className="text-[12px] font-semibold tabular-nums"
                    style={{ color: isOpen ? "rgba(255,255,255,0.35)" : "rgba(26,26,26,0.2)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className="flex-1 text-[14px] font-semibold md:text-[15px]"
                    style={{ color: isOpen ? "#ffffff" : "#1a1a1a" }}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle icon */}
                  <span
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[16px] font-light transition-all duration-300"
                    style={{
                      color: isOpen ? "rgba(255,255,255,0.4)" : "rgba(26,26,26,0.25)",
                      background: isOpen ? "rgba(255,255,255,0.08)" : "rgba(26,26,26,0.05)",
                    }}
                  >
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </div>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? "14px" : "0px",
                    paddingLeft: "40px",
                  }}
                >
                  <p className="text-[13px] leading-[1.75] text-white/50">
                    {faq.answer}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
