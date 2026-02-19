export default function AboutMe() {
  return (
    <section id="sobre-mi" data-animate className="px-5 py-16 md:px-8 md:py-20" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-[960px]">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
          {/* Image placeholder */}
          <div className="w-full flex-shrink-0 md:w-[320px]" data-animate-child>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              {/* Replace this div with: <Image src="/images/luciana.jpg" alt="Luciana" fill className="object-cover" /> */}
              <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-slate-300">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[13px] text-slate-400">
                  Foto de Luciana aquí
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1" data-animate-child>
            <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
              Hola, soy Luciana
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-[15px] leading-[1.8] text-slate-500">
              <p>
                Soy diseñadora web y ayudo a emprendedores y pequeños negocios a tener una presencia online profesional que realmente genera resultados.
              </p>
              <p>
                Entendí que muchos negocios no necesitan webs complicadas — necesitan webs claras, estratégicas y que transmitan confianza desde el primer segundo.
              </p>
              <p>
                Por eso creé SiteSprint: para que tengas una web profesional sin procesos eternos ni presupuestos inalcanzables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
