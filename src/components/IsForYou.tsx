"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Para qué tipo de negocios es este servicio?",
    answer:
      "Negocios que venden por Instagram o WhatsApp y quieren verse más profesionales. Servicios que necesitan generar mayor confianza online. Emprendedores que buscan una web clara y lista para convertir.",
  },
  {
    question: "Qué incluye el servicio Web Express de $250?",
    answer:
      "Diseño y desarrollo completo de tu sitio web profesional, optimizado para móvil, con enfoque en conversión. Incluye una ronda de ajustes estratégicos después de la entrega. Tu web lista en 48 horas.",
  },
  {
    question: "Y si mi proyecto necesita algo más complejo?",
    answer:
      "Para eso tenemos el servicio Web a Medida. Incluye diseño 100% personalizado, múltiples páginas, funcionalidades avanzadas y soporte extendido. Conversamos sobre tu proyecto y te damos una cotización personalizada.",
  },
  {
    question: "Cuánto tiempo toma tener mi web lista?",
    answer:
      "Con Web Express, tu web estará lista en 48 horas desde que confirmamos el alcance. Para proyectos a medida, el tiempo depende de la complejidad — lo definimos juntos al inicio.",
  },
  {
    question: "Necesito tener todo el contenido listo?",
    answer:
      "No necesariamente. Te guiamos en el proceso de definición estratégica para recopilar la información clave: identidad visual, propuesta de valor y objetivos comerciales.",
  },
];

export default function IsForYou() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section data-section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-[760px]">
        <div className="text-center" data-child>
          <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-3 max-w-[380px] text-[15px] leading-relaxed text-slate-500">
            Lo más común sobre nuestros servicios.
          </p>
        </div>

        <div className="mt-8" data-child>
            <div className="flex flex-col gap-2">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="group w-full text-left transition-all duration-300"
                    style={{
                      background: "#ffffff",
                      border: isOpen ? "1px solid #e2e8f0" : "1px solid #f1f5f9",
                      borderRadius: isOpen ? "16px" : "14px",
                      padding: isOpen ? "18px 20px 20px" : "14px 20px",
                      boxShadow: isOpen ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex-1 text-[14px] font-semibold"
                        style={{ color: isOpen ? "#0f172a" : "#475569" }}
                      >
                        {faq.question}
                      </span>
                      <span
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[14px]"
                        style={{
                          color: isOpen ? "#2563eb" : "#94a3b8",
                          background: isOpen ? "#dbeafe" : "#f1f5f9",
                        }}
                      >
                        {isOpen ? "\u2212" : "+"}
                      </span>
                    </div>

                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? "200px" : "0px",
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? "10px" : "0px",
                      }}
                    >
                      <p className="text-[13px] leading-[1.75] text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
