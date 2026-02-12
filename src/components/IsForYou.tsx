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
      className="px-4 py-24 md:px-6 md:py-32 lg:py-40"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="text-center">
          <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a1a1a]/50">
            &bull; Preguntas frecuentes
          </span>
          <h2 className="mt-4 text-[2.2rem] font-bold leading-[1.08] tracking-tight text-[#1a1a1a] md:text-[3rem] lg:text-[3.5rem]">
            Es para tu negocio?
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.7] text-[#1a1a1a]/50 md:text-base">
            Todo lo que necesitas saber sobre nuestro servicio de diseño web
            express — desde el proceso hasta la entrega.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="mx-auto mt-14 flex max-w-[960px] flex-col gap-3 md:mt-16">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={i}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full text-left transition-all duration-300"
                style={{
                  background: isOpen ? "#1a1a1a" : "#f0f0ec",
                  borderRadius: isOpen ? "20px" : "16px",
                  padding: isOpen ? "24px 28px 28px" : "22px 28px",
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <span
                    className="text-[13px] font-medium tabular-nums"
                    style={{ color: isOpen ? "rgba(255,255,255,0.5)" : "rgba(26,26,26,0.35)" }}
                  >
                    {String(i + 1).padStart(3, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className="flex-1 text-[15px] font-semibold md:text-base"
                    style={{ color: isOpen ? "#ffffff" : "#1a1a1a" }}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle icon */}
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-[18px] font-light"
                    style={{ color: isOpen ? "rgba(255,255,255,0.5)" : "rgba(26,26,26,0.35)" }}
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
                    marginTop: isOpen ? "16px" : "0px",
                    paddingLeft: "52px",
                  }}
                >
                  <p className="text-[14px] leading-[1.75] text-white/60">
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
