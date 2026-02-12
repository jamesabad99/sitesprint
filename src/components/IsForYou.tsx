"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Para qué tipo de negocios es este servicio?",
    answer:
      "Negocios que venden por Instagram o WhatsApp y quieren verse más profesionales. Servicios que necesitan generar mayor confianza online. Emprendedores que buscan una web clara y lista en pocos días.",
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
      "No necesariamente. Te guiamos en el proceso de definición estratégica para recopilar la información clave: identidad visual, propuesta de valor y objetivos comerciales.",
  },
  {
    question: "Y si mi proyecto es más complejo?",
    answer:
      "Este formato está pensado para proyectos ágiles. Si necesitas un desarrollo más complejo o corporativo, podemos evaluarlo por separado.",
  },
];

const stats = [
  { value: "48h", label: "Tiempo de entrega" },
  { value: "$250", label: "Precio de lanzamiento" },
  { value: "100%", label: "Optimizada para móvil" },
];

export default function IsForYou() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20"
      style={{ background: "#ffffff" }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* ── Two column layout ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* Left: Visual card */}
          <div className="flex-shrink-0 lg:w-[380px]">
            <div className="relative overflow-hidden rounded-2xl p-7 md:p-8" style={{ background: "#1a1a1a" }}>
              {/* Decorative gradient */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-[200px] w-[200px]"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                className="pointer-events-none absolute -bottom-10 -left-10 h-[150px] w-[150px]"
                style={{
                  background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-2.5 w-2.5 text-blue-400/50">
                    <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
                  </svg>
                  En resumen
                </span>

                <h2 className="mt-4 text-[1.6rem] font-bold leading-[1.1] tracking-tight text-white md:text-[1.8rem]">
                  Todo lo que
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">necesitas saber</span>
                </h2>

                <p className="mt-3 text-[13px] leading-[1.7] text-white/35">
                  Las preguntas más comunes sobre nuestro servicio de diseño web express.
                </p>

                {/* Stats */}
                <div className="mt-8 flex flex-col gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <span className="text-[13px] text-white/40">{stat.label}</span>
                      <span className="text-[15px] font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="flex-1">
            <div className="flex flex-col gap-2.5">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="group w-full text-left transition-all duration-300"
                    style={{
                      background: isOpen ? "#1a1a1a" : "#fafaf9",
                      border: isOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(26,26,26,0.06)",
                      borderRadius: isOpen ? "16px" : "14px",
                      padding: isOpen ? "20px 22px 22px" : "16px 22px",
                    }}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Number */}
                      <span
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-[11px] font-bold tabular-nums"
                        style={{
                          background: isOpen ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.05)",
                          color: isOpen ? "rgba(255,255,255,0.5)" : "rgba(26,26,26,0.3)",
                        }}
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

                      {/* Toggle */}
                      <span
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[14px] transition-all duration-300"
                        style={{
                          color: isOpen ? "rgba(255,255,255,0.4)" : "rgba(26,26,26,0.25)",
                          background: isOpen ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.04)",
                          transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
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
                        marginTop: isOpen ? "12px" : "0px",
                        paddingLeft: "38px",
                      }}
                    >
                      <p
                        className="text-[13px] leading-[1.75]"
                        style={{ color: isOpen ? "rgba(255,255,255,0.45)" : "transparent" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
