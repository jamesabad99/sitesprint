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
    <section id="contacto" data-animate className="px-5 py-16 md:px-8 md:py-20" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-[560px]">
        {/* Header */}
        <div className="text-center" data-animate-child>
          <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
            Conversemos sobre tu proyecto
          </h2>
          <p className="mx-auto mt-3 max-w-[360px] text-[14px] leading-[1.7] text-slate-500">
            Déjanos tus datos y te contactamos en menos de 2 horas.
          </p>
        </div>

        {/* Form */}
        <div data-animate-child>
          {status === "sent" ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <svg viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 h-8 w-8 text-emerald-500">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-[1.1rem] font-semibold text-slate-900">Mensaje enviado</h3>
              <p className="mt-2 text-[13px] text-slate-500">Te contactaremos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3.5">
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                required
                placeholder="Nombre"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[16px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 md:text-[14px]"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Teléfono"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[16px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 md:text-[14px]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Correo electrónico"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[16px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 md:text-[14px]"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Cuéntanos sobre tu negocio (opcional)"
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-[16px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 md:text-[14px]"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "error" && (
                <p className="text-center text-[13px] text-red-500">
                  Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
