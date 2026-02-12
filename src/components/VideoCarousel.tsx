"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface Video {
  src: string;
  title?: string;
}

export default function VideoCarousel({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cardWidth, setCardWidth] = useState(760);

  const currentRef = useRef(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);

  const GAP = 24;
  const AUTO_MS = 4500;
  const EASING = "cubic-bezier(.22,1,.36,1)";

  // Responsive card width
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setCardWidth(w < 768 ? w * 0.8 : 760);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const prev = currentRef.current;
      const next = ((index % videos.length) + videos.length) % videos.length;
      if (prev === next) return;

      const prevVideo = videoRefs.current[prev];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }

      currentRef.current = next;
      setCurrent(next);
      setIsPaused(false);

      const nextVideo = videoRefs.current[next];
      if (nextVideo) nextVideo.play().catch(() => {});
    },
    [videos.length]
  );

  // Autoplay first on mount
  useEffect(() => {
    videoRefs.current[0]?.play().catch(() => {});
  }, []);

  // Auto-advance (pauses on hover)
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      goTo(currentRef.current + 1);
    }, AUTO_MS);
    return () => clearInterval(timer);
  }, [current, isHovering, goTo]);

  // Keyboard
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(currentRef.current - 1);
      if (e.key === "ArrowRight") goTo(currentRef.current + 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [goTo]);

  const togglePause = () => {
    const v = videoRefs.current[current];
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPaused(false);
    } else {
      v.pause();
      setIsPaused(true);
    }
  };

  // Drag / swipe
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    isDragging.current = true;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };
  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragDelta.current > 40) goTo(currentRef.current - 1);
    else if (dragDelta.current < -40) goTo(currentRef.current + 1);
  };

  // Center the active card
  const trackX = `calc(50% - ${cardWidth / 2}px - ${current * (cardWidth + GAP)}px)`;

  const slideStyle = (i: number): React.CSSProperties => {
    const diff = Math.abs(i - current);
    if (diff === 0) {
      return {
        transform: "scale(1.02)",
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 20,
        transition: `all 600ms ${EASING}`,
      };
    }
    if (diff === 1) {
      return {
        transform: "scale(0.93)",
        opacity: 0.45,
        filter: "blur(1px)",
        zIndex: 10,
        transition: `all 600ms ${EASING}`,
      };
    }
    return {
      transform: "scale(0.88)",
      opacity: 0.25,
      filter: "blur(2px)",
      zIndex: 5,
      transition: `all 600ms ${EASING}`,
    };
  };

  const frameStyle = (i: number): React.CSSProperties => {
    if (i === current) {
      return {
        boxShadow:
          "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
        transition: `all 600ms ${EASING}`,
      };
    }
    return {
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      transition: `all 600ms ${EASING}`,
    };
  };

  return (
    <section className="relative py-[60px] md:py-[90px]">
      {/* Header */}
      <div className="relative mx-auto max-w-[1100px] px-4 text-center">
        <h2 className="text-[1.5rem] font-semibold tracking-tight text-white/90 md:text-[2.2rem]">
          Así se ve una web entregada en 48 horas.
        </h2>
        <p className="mt-3 text-sm tracking-[0.04em] text-white/50">
          Proyectos reales entregados a clientes.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="group relative mx-auto mt-10 max-w-[1200px] select-none overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Edge gradients — blend into dark bg */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 md:w-24"
          style={{
            background:
              "linear-gradient(to right, #000000 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-30 w-10 md:w-24"
          style={{
            background:
              "linear-gradient(to left, #000000 0%, transparent 100%)",
          }}
        />

        {/* Track */}
        <div
          className="flex py-8"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${trackX})`,
            transition: `transform 600ms ${EASING}`,
          }}
        >
          {videos.map((video, i) => (
            <div
              key={i}
              onClick={() => i !== current && goTo(i)}
              className="flex-shrink-0 cursor-pointer will-change-transform"
              style={{ width: `${cardWidth}px`, ...slideStyle(i) }}
            >
              {/* Browser frame */}
              <div
                className="relative overflow-hidden rounded-[16px] bg-white"
                style={frameStyle(i)}
              >
                {/* Glass highlight on active */}
                {i === current && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[60px] bg-gradient-to-b from-white/15 to-transparent" />
                )}

                {/* Top bar */}
                <div className="flex h-[32px] items-center gap-[5px] bg-[#f1f3f5] px-3.5">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[8px] w-[8px] rounded-full bg-[#ffbd2e]" />
                  <span className="h-[8px] w-[8px] rounded-full bg-[#27c93f]" />
                  {video.title && (
                    <span className="ml-2 text-[11px] text-slate-400">
                      {video.title}
                    </span>
                  )}
                </div>

                {/* Video */}
                <div className="relative overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    muted
                    loop
                    playsInline
                    className="block w-full"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* Play / Pause — visible on hover */}
                  {i === current && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePause();
                      }}
                      aria-label={isPaused ? "Reproducir" : "Pausar"}
                      className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      {isPaused ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3.5 w-3.5 opacity-90"
                        >
                          <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3.5 w-3.5 opacity-90"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm10.5 0a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows — dark glass, appear on hover */}
        <button
          onClick={() => goTo(currentRef.current - 1)}
          aria-label="Anterior"
          className="absolute left-[5%] top-1/2 z-40 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white/90 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 md:flex"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.14)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={() => goTo(currentRef.current + 1)}
          aria-label="Siguiente"
          className="absolute right-[5%] top-1/2 z-40 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white/90 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 md:flex"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.14)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex items-center justify-center gap-2.5">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "h-2.5 w-7 bg-white/90"
                : "h-2 w-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
