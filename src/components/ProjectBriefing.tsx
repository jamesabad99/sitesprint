"use client";

import { useState } from "react";

const WA_PHONE = "51952648191";

const BUSINESS_TYPES = [
  { id: "restaurante", label: "Restaurante / Café", icon: "🍽️" },
  { id: "tienda", label: "Tienda / E-commerce", icon: "🛍️" },
  { id: "consultora", label: "Consultora / Agencia", icon: "💼" },
  { id: "salud", label: "Salud / Bienestar", icon: "🏥" },
  { id: "educacion", label: "Educación / Cursos", icon: "📚" },
  { id: "personal", label: "Marca Personal", icon: "👤" },
  { id: "tech", label: "Tech / Startup", icon: "🚀" },
  { id: "otro", label: "Otro", icon: "✨" },
];

const STYLES = [
  {
    id: "minimalista",
    label: "Minimalista",
    desc: "Limpio, elegante, mucho espacio",
    colors: ["#0f172a", "#f8fafc", "#e2e8f0"],
  },
  {
    id: "moderno",
    label: "Moderno y Bold",
    desc: "Colores vibrantes, tipografía fuerte",
    colors: ["#2563eb", "#7c3aed", "#0f172a"],
  },
  {
    id: "corporativo",
    label: "Corporativo",
    desc: "Profesional, confiable, serio",
    colors: ["#1e3a5f", "#f8fafc", "#d4af37"],
  },
  {
    id: "creativo",
    label: "Creativo",
    desc: "Llamativo, único, artístico",
    colors: ["#ec4899", "#8b5cf6", "#06b6d4"],
  },
];

const SECTIONS = [
  { id: "hero", label: "Inicio / Hero" },
  { id: "sobre", label: "Sobre nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio / Galería" },
  { id: "testimonios", label: "Testimonios" },
  { id: "precios", label: "Precios" },
  { id: "blog", label: "Blog" },
  { id: "contacto", label: "Contacto" },
  { id: "faq", label: "Preguntas frecuentes" },
  { id: "equipo", label: "Nuestro equipo" },
];

const TOTAL_STEPS = 5;

export default function ProjectBriefing() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [style, setStyle] = useState("");
  const [sections, setSections] = useState<string[]>(["hero", "contacto"]);
  const [extraDetails, setExtraDetails] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const toggleSection = (id: string) => {
    setSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const canAdvance = () => {
    switch (step) {
      case 1:
        return businessType !== "";
      case 2:
        return style !== "";
      case 3:
        return sections.length > 0;
      case 4:
        return true;
      case 5:
        return name.trim() !== "" && phone.trim() !== "" && email.trim() !== "";
      default:
        return false;
    }
  };

  const buildSummary = () => {
    const biz = BUSINESS_TYPES.find((b) => b.id === businessType);
    const sty = STYLES.find((s) => s.id === style);
    const secs = sections
      .map((id) => SECTIONS.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    return {
      businessLabel: biz?.label || businessType,
      styleLabel: sty?.label || style,
      sectionsLabel: secs,
    };
  };

  const buildWhatsAppUrl = () => {
    const summary = buildSummary();
    const msg = [
      `Hola 👋 Quiero crear mi web con SiteSprint.`,
      ``,
      `*Mi negocio:* ${summary.businessLabel}${businessName ? ` — ${businessName}` : ""}`,
      `*Estilo:* ${summary.styleLabel}`,
      `*Secciones:* ${summary.sectionsLabel}`,
      extraDetails ? `*Detalles:* ${extraDetails}` : "",
      ``,
      `*Nombre:* ${name}`,
      phone ? `*Teléfono:* ${phone}` : "",
      email ? `*Email:* ${email}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async () => {
    setStatus("sending");

    const summary = buildSummary();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("Tipo de negocio", summary.businessLabel);
    formData.append("Nombre del negocio", businessName);
    formData.append("Estilo", summary.styleLabel);
    formData.append("Secciones", summary.sectionsLabel);
    formData.append("Detalles adicionales", extraDetails);
    formData.append("_captcha", "false");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/lucianabaumann18@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const progressWidth = `${(step / TOTAL_STEPS) * 100}%`;

  return (
    <section
      id="briefing"
      data-section
      className="px-5 py-16 md:px-8 md:py-20"
      style={{ background: "#f8fafc" }}
    >
      <div className="mx-auto max-w-[620px]">
        {/* Header */}
        <div className="text-center" data-child>
          <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
            Diseña tu proyecto
          </h2>
          <p className="mx-auto mt-3 max-w-[380px] text-[14px] leading-[1.7] text-slate-500">
            Cuéntanos cómo imaginas tu web y te contactamos con una propuesta personalizada.
          </p>
        </div>

        {/* Card */}
        <div data-child className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          {status === "sent" ? (
            /* Success state */
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-emerald-500">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-semibold text-slate-900">
                ¡Brief enviado!
              </h3>
              <p className="mx-auto mt-2 max-w-[300px] text-[13px] leading-relaxed text-slate-500">
                Te contactaremos en menos de 2 horas. También puedes escribirnos directamente por WhatsApp.
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Continuar por WhatsApp
              </a>
            </div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[12px] text-slate-400">
                  <span>Paso {step} de {TOTAL_STEPS}</span>
                  <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-500 ease-out"
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>

              {/* Step 1: Business type */}
              {step === 1 && (
                <div>
                  <h3 className="text-[1rem] font-semibold text-slate-900">
                    ¿Qué tipo de negocio tienes?
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-400">
                    Selecciona la categoría que mejor describa tu negocio.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {BUSINESS_TYPES.map((biz) => (
                      <button
                        key={biz.id}
                        onClick={() => setBusinessType(biz.id)}
                        className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-[14px] transition-all duration-200 ${
                          businessType === biz.id
                            ? "border-blue-400 bg-blue-50 text-slate-900 ring-2 ring-blue-100"
                            : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-lg">{biz.icon}</span>
                        <span className="font-medium">{biz.label}</span>
                      </button>
                    ))}
                  </div>
                  {businessType && (
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Nombre de tu negocio (opcional)"
                      className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                  )}
                </div>
              )}

              {/* Step 2: Style */}
              {step === 2 && (
                <div>
                  <h3 className="text-[1rem] font-semibold text-slate-900">
                    ¿Qué estilo visual prefieres?
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-400">
                    Elige el que más se acerque a lo que imaginas.
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {STYLES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setStyle(s.id)}
                        className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                          style === s.id
                            ? "border-blue-400 bg-blue-50 ring-2 ring-blue-100"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {s.colors.map((color, i) => (
                            <div
                              key={i}
                              className="h-5 w-5 rounded-full border border-slate-200"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <p className="mt-2.5 text-[14px] font-semibold text-slate-900">
                          {s.label}
                        </p>
                        <p className="mt-0.5 text-[12px] text-slate-400">
                          {s.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Sections */}
              {step === 3 && (
                <div>
                  <h3 className="text-[1rem] font-semibold text-slate-900">
                    ¿Qué secciones necesitas?
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-400">
                    Selecciona todas las que apliquen. Puedes elegir varias.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {SECTIONS.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => toggleSection(sec.id)}
                        className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                          sections.includes(sec.id)
                            ? "border-blue-400 bg-blue-50 text-blue-700"
                            : "border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {sections.includes(sec.id) && (
                          <svg viewBox="0 0 24 24" fill="none" className="-ml-0.5 mr-1.5 inline-block h-3.5 w-3.5 text-blue-600">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {sec.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Extra details */}
              {step === 4 && (
                <div>
                  <h3 className="text-[1rem] font-semibold text-slate-900">
                    ¿Algo más que debamos saber?
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-400">
                    Cuéntanos detalles adicionales, referencias, o lo que imaginas para tu web.
                  </p>
                  <textarea
                    value={extraDetails}
                    onChange={(e) => setExtraDetails(e.target.value)}
                    rows={5}
                    placeholder="Ej: Quiero algo parecido a la web de Apple, con fotos grandes y poco texto..."
                    className="mt-5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              )}

              {/* Step 5: Contact info */}
              {step === 5 && (
                <div>
                  <h3 className="text-[1rem] font-semibold text-slate-900">
                    ¿Cómo te contactamos?
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-400">
                    Déjanos tus datos y te enviaremos una propuesta personalizada.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre *"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[16px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 md:text-[14px]"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Teléfono / WhatsApp *"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[16px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 md:text-[14px]"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Correo electrónico *"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[16px] text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-100 md:text-[14px]"
                    />
                  </div>

                  {/* Summary preview */}
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      Resumen de tu proyecto
                    </p>
                    <div className="mt-2 space-y-1 text-[13px] text-slate-600">
                      <p><span className="font-medium text-slate-900">Negocio:</span> {buildSummary().businessLabel}{businessName ? ` — ${businessName}` : ""}</p>
                      <p><span className="font-medium text-slate-900">Estilo:</span> {buildSummary().styleLabel}</p>
                      <p><span className="font-medium text-slate-900">Secciones:</span> {buildSummary().sectionsLabel}</p>
                      {extraDetails && (
                        <p><span className="font-medium text-slate-900">Detalles:</span> {extraDetails}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="rounded-full border border-slate-200 px-5 py-2.5 text-[13px] font-medium text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
                  >
                    Atrás
                  </button>
                ) : (
                  <div />
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canAdvance()}
                    className="rounded-full bg-slate-900 px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    Siguiente
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canAdvance() || status === "sending"}
                    className="rounded-full bg-slate-900 px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {status === "sending" ? "Enviando..." : "Enviar brief"}
                  </button>
                )}
              </div>

              {status === "error" && (
                <p className="mt-3 text-center text-[13px] text-red-500">
                  Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
