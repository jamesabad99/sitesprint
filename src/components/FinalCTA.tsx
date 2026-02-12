const WA_URL = `https://wa.me/51952648191?text=${encodeURIComponent(
  "Hola 👋\nQuiero aprovechar el precio de lanzamiento y reservar mi cupo para la web profesional en 48 horas.\n\nMi negocio es:\nActualmente vendo por: (Instagram / WhatsApp / tienda física / otro)\n\n¿Cuáles son los siguientes pasos para empezar?"
)}`;

export default function FinalCTA() {
  return (
    <section
      className="px-5 py-16 md:px-8 md:py-20"
      style={{ background: "#050505" }}
    >
      {/* Card */}
      <div
        className="relative mx-auto w-full max-w-[900px] overflow-hidden rounded-3xl"
        style={{ background: "#1a1a1a" }}
      >
        {/* Decorative gradient */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative z-10 px-6 py-12 text-center sm:px-10 md:px-16 md:py-16">
          {/* Star */}
          <div className="mb-5 flex justify-center">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 text-blue-400/60">
              <path d="M8 0l2.2 5.2L16 6l-4 3.8 1 5.7L8 12.5l-5 3 1-5.7L0 6l5.8-.8z" />
            </svg>
          </div>

          <h2 className="text-[1.5rem] font-bold tracking-tight text-white md:text-[2rem]">
            Listo para tener tu{" "}
            <em className="not-italic bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">web profesional?</em>
          </h2>

          {/* Price */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-[1.4rem] font-bold text-white md:text-[1.6rem]">
              $250
            </span>
            <span className="text-sm text-white/30 line-through">$300</span>
          </div>

          {/* CTA button */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
          >
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reservar cupo por WhatsApp
          </a>

          {/* Trust line */}
          <p className="mt-5 text-[12px] text-white/30">
            Respuesta en menos de 2 horas
          </p>
        </div>
      </div>
    </section>
  );
}
