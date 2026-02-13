"use client";

import { useEffect, useRef, useState } from "react";

const WA_URL = `https://api.whatsapp.com/send?phone=51952648191&text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

const steps = [
  {
    num: "01",
    title: "Reserva tu cupo",
    description:
      "Escríbenos por WhatsApp, confirmamos disponibilidad y definimos el alcance de tu proyecto.",
    detail: "5 min",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59,130,246,0.12)",
    borderColor: "rgba(59,130,246,0.15)",
  },
  {
    num: "02",
    title: "Definimos tu marca",
    description:
      "Recopilamos tu identidad visual, propuesta de valor, referencias y objetivos comerciales.",
    detail: "1 hora",
    gradient: "from-purple-500 to-blue-400",
    glowColor: "rgba(139,92,246,0.12)",
    borderColor: "rgba(139,92,246,0.15)",
  },
  {
    num: "03",
    title: "Entregamos tu web",
    description:
      "Diseñamos y desarrollamos tu web con enfoque en conversión. Incluye una ronda de ajustes.",
    detail: "48 hrs",
    gradient: "from-emerald-400 to-cyan-400",
    glowColor: "rgba(52,211,153,0.12)",
    borderColor: "rgba(52,211,153,0.15)",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger each card: 0ms, 300ms, 600ms
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 350);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28"
      style={{ background: "#050505" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[620px]">
        {/* ── Header ── */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/30">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-2.5 w-2.5 text-blue-400/50"
            >
              <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
            </svg>
            Proceso
          </span>
          <h2 className="mt-4 text-[1.8rem] font-bold leading-[1.1] tracking-tight text-white md:text-[2.8rem]">
            De idea a{" "}
            <em className="not-italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              web lista
            </em>{" "}
            en 3 pasos
          </h2>
        </div>

        {/* ── Stacked cards ── */}
        <div ref={sectionRef} className="relative mt-14 flex flex-col gap-5 md:mt-18">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i]
                  ? "translateY(0) scale(1)"
                  : "translateY(60px) scale(0.95)",
                transitionDelay: visible[i] ? "0ms" : "0ms",
              }}
            >
              <div
                className="group relative overflow-hidden rounded-2xl p-[1px]"
              >
                {/* Gradient border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `conic-gradient(from 180deg, transparent, ${step.glowColor}, transparent 40%)`,
                  }}
                />

                {/* Card */}
                <div
                  className="relative flex items-start gap-5 rounded-2xl px-6 py-6 md:gap-7 md:px-8 md:py-7"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    border: `1px solid ${step.borderColor}`,
                  }}
                >
                  {/* Big gradient number — watermark */}
                  <span
                    className={`pointer-events-none absolute -right-2 -top-5 select-none bg-gradient-to-br ${step.gradient} bg-clip-text text-[7rem] font-black leading-none text-transparent opacity-[0.06] md:text-[8rem]`}
                  >
                    {step.num}
                  </span>

                  {/* Glow orb */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: step.glowColor }}
                  />

                  {/* Left: Number + gradient accent */}
                  <div className="flex flex-col items-center gap-2 pt-1">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} text-[15px] font-bold text-white shadow-lg`}
                      style={{
                        boxShadow: `0 8px 24px ${step.glowColor}`,
                      }}
                    >
                      {step.num}
                    </div>
                    {/* Connecting line (not on last card) */}
                    {i < steps.length - 1 && (
                      <div
                        className="hidden h-8 w-px md:block"
                        style={{
                          background: `linear-gradient(to bottom, ${step.borderColor}, transparent)`,
                        }}
                      />
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[1.1rem] font-bold text-white md:text-[1.2rem]">
                        {step.title}
                      </h3>
                      <span
                        className={`inline-flex rounded-full bg-gradient-to-r ${step.gradient} px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white`}
                      >
                        {step.detail}
                      </span>
                    </div>
                    <p className="mt-2.5 max-w-[380px] text-[13.5px] leading-[1.75] text-white/40">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 text-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
          >
            Empezar ahora
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
