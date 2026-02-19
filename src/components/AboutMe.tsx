import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="sobre-mi" data-section className="px-5 py-16 md:px-8 md:py-20" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-[960px]">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
          {/* Photo */}
          <div className="w-full flex-shrink-0 md:w-[320px]" data-child>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/luciana.jpg"
                alt="Luciana"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1" data-child>
            <h2 className="text-[1.6rem] font-bold tracking-tight text-slate-900 md:text-[2.2rem]">
              Hola, soy Luciana
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-[15px] leading-[1.8] text-slate-500">
              <p>
                Me apasiona el diseño web y la tecnología. Llevo años perfeccionando mi proceso para crear webs que realmente generan resultados.
              </p>
              <p>
                Creé SiteSprint con una misión clara: que emprendedores y negocios en crecimiento puedan tener una presencia online profesional — sin procesos eternos ni presupuestos inalcanzables.
              </p>
              <p>
                Cada proyecto que hago está pensado para que tu negocio se vea tan bien como lo que ofrece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
