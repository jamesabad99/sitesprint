import Countdown from "./Countdown";

const content = {
  brand: "SiteSprint",
  badge: "LANZAMIENTO",
  heading: "Tu web profesional lista en 48 horas. Hecha para vender desde el primer día.",
  subtext: "Diseñada para convertir. Sin procesos eternos.",
  trust: "Diseño estratégico · 1 ronda de cambios incluida · Optimizada para móvil",
  ctaPrimary: "Reservar cupo",
  ctaSecondary: "Ver cómo funciona",
  priceText: "Precio lanzamiento $250",
  priceOld: "(luego $300)",
  countdownLabel: "Termina en:",
  navCta: "Reservar cupo",
};

export default function Hero() {
  return (
    <section
      className="flex min-h-screen w-full items-center justify-center px-4 py-12 md:px-6 md:py-16"
      style={{ overflow: "visible" }}
    >
      <div
        className="relative mx-auto w-full max-w-[1200px] rounded-[32px] shadow-lg shadow-sky-300/15"
        style={{ overflow: "visible" }}
      >
        {/* ── Background (clipped to rounded corners) ── */}
        <div className="absolute inset-0 overflow-hidden rounded-[32px]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #b8ddf4 0%, #5fb5e5 12%, #1a78b8 30%, #0a4f8a 48%, #0d5a96 58%, #2e8ec8 72%, #68b5de 86%, #8ec8ea 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 38%, rgba(6,50,120,0.55) 0%, rgba(10,65,140,0.20) 50%, transparent 75%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 150% 100% at 50% 50%, transparent 35%, rgba(130,200,240,0.25) 65%, rgba(160,218,245,0.40) 100%)",
            }}
          />
        </div>
        {/* ── Glow (outside clip, so not cut off) ── */}
        <div className="absolute -top-10 left-1/2 z-0 h-[180px] w-[360px] -translate-x-1/2 rounded-full bg-sky-100/30 blur-[70px]" />
        <div className="absolute -bottom-10 left-1/2 z-0 h-[180px] w-[500px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[100px]" />

        {/* ── Content ── */}
        <div className="relative z-10">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6">
            <span className="text-[15px] font-medium tracking-tight text-white">
              {content.brand}
            </span>
            <a
              href="#contacto"
              className="rounded-full bg-white/85 px-4 py-1.5 text-xs font-medium text-sky-700 backdrop-blur-sm transition-colors hover:bg-white"
            >
              {content.navCta}
            </a>
          </nav>

          {/* Hero body */}
          <div className="flex flex-col items-center px-6 pt-12 pb-28 text-center md:px-12 md:pt-16 md:pb-36">
            {/* Badge */}
            <span className="inline-block rounded-full border border-white/30 bg-white/20 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm">
              {content.badge}
            </span>

            {/* Heading */}
            <h1 className="mx-auto mt-8 max-w-xs text-[1.7rem] font-semibold leading-[1.12] tracking-tight text-white sm:max-w-md md:max-w-lg md:text-[2.6rem] md:leading-[1.1]">
              {content.heading}
            </h1>

            {/* Subtext */}
            <p className="mx-auto mt-4 max-w-[260px] text-[13px] leading-relaxed text-white/80 sm:max-w-xs md:text-[15px]">
              {content.subtext}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-sky-800 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.15)]"
              >
                {content.ctaPrimary}
              </a>
              <a
                href="#como-funciona"
                className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/90 transition-all duration-200 ease-out hover:border-white/35 hover:bg-white/10"
              >
                {content.ctaSecondary}
              </a>
            </div>

            {/* Micro-trust */}
            <p className="mt-5 text-[11px] tracking-wide text-white/55 sm:text-[12px]">
              {content.trust}
            </p>

            {/* Countdown */}
            <div className="relative mt-10 flex flex-col items-center gap-3 md:mt-12">
              <p className="text-[11px] text-white/65 sm:text-xs">
                <span className="font-medium text-white/85">
                  {content.priceText}
                </span>{" "}
                {content.priceOld} · {content.countdownLabel}
              </p>
              <Countdown />
              <div className="absolute -bottom-6 left-1/2 h-[40px] w-[70%] -translate-x-1/2 rounded-full bg-sky-300/15 blur-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
