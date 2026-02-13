"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/lucianabaumann18@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="px-5 py-16 md:px-8 md:py-20"
      style={{ background: "#050505" }}
    >
      <div className="mx-auto max-w-[600px]">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/30">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-2.5 w-2.5 text-blue-400/50">
              <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
            </svg>
            Contacto
          </span>
          <h2 className="mt-4 text-[1.8rem] font-bold leading-[1.1] tracking-tight text-white md:text-[2.4rem]">
            Conversemos sobre{" "}
            <em className="not-italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              tu proyecto
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-[1.7] text-white/35">
            Déjanos tus datos y te contactamos en menos de 2 horas.
          </p>
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-8 text-center">
            <div className="mb-3 flex justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-emerald-400">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-semibold text-white">
              Mensaje enviado
            </h3>
            <p className="mt-2 text-[13px] text-white/45">
              Te contactaremos pronto. Revisa tu WhatsApp o correo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            {/* Disable captcha page */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.15em] text-white/40">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Tu nombre"
                className="w-full rounded-xl px-4 py-3 text-[16px] text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/20 md:text-[14px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.15em] text-white/40">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+51 999 999 999"
                className="w-full rounded-xl px-4 py-3 text-[16px] text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/20 md:text-[14px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.15em] text-white/40">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="tu@correo.com"
                className="w-full rounded-xl px-4 py-3 text-[16px] text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/20 md:text-[14px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.15em] text-white/40">
                Mensaje <span className="normal-case tracking-normal text-white/20">(opcional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                className="w-full resize-none rounded-xl px-4 py-3 text-[16px] text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/20 md:text-[14px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] disabled:opacity-50"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              {status !== "sending" && (
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            {status === "error" && (
              <p className="text-center text-[13px] text-red-400/70">
                Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
