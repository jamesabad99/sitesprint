"use client";

import { useRef, useEffect } from "react";

export default function ProjectShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="bg-[#f8fafc] py-[70px] md:py-[100px]">
      <div className="mx-auto max-w-[1100px] px-4">
        {/* Text block */}
        <div className="text-center">
          <h2 className="text-[1.5rem] font-semibold tracking-tight text-[#0f172a] md:text-[2.2rem]">
            Así se ve una web entregada en 48 horas.
          </h2>
          <p className="mt-3 text-slate-500">
            Proyecto desarrollado para Nutracore Labs Perú.
          </p>
        </div>

        {/* Browser mockup */}
        <div
          className="scrollHidden mx-auto mt-12 max-w-[1000px] overflow-auto rounded-[22px] bg-white"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
        >
          {/* Top bar */}
          <div className="flex h-[40px] items-center gap-[6px] bg-[#f1f3f5] px-4">
            <span className="h-[12px] w-[12px] rounded-full bg-[#ff5f57]" />
            <span className="h-[12px] w-[12px] rounded-full bg-[#ffbd2e]" />
            <span className="h-[12px] w-[12px] rounded-full bg-[#27c93f]" />
          </div>

          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="block w-full object-cover"
          >
            <source src="/videos/nutracore-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
