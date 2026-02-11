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

  const GAP = 20;
  const AUTO_MS = 7000;

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

  const slideStyle = (i: number): string => {
    const diff = Math.abs(i - current);
    if (diff === 0) return "scale-100 opacity-100 z-20";
    if (diff === 1) return "scale-[0.9] opacity-[0.7] z-10";
    return "scale-[0.85] opacity-[0.4] z-[5]";
  };

  const slideFilter = (i: number): React.CSSProperties => {
    const diff = Math.abs(i - current);
    if (diff === 0) return { filter: "blur(0px)" };
    if (diff === 1) return { filter: "blur(1.5px)" };
    return { filter: "blur(3px)" };
  };

  return (
    <section className="bg-[#f8fafc] py-[70px] md:py-[100px]">
      {/* Header */}
      <div className="mx-auto max-w-[1100px] px-4 text-center">
        <h2 className="text-[1.5rem] font-semibold tracking-tight text-[#0f172a] md:text-[2.2rem]">
          Así se ve una web entregada en 48 horas.
        </h2>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative mx-auto mt-12 max-w-[1200px] select-none overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Edge gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-12 bg-gradient-to-r from-[#f8fafc] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-12 bg-gradient-to-l from-[#f8fafc] to-transparent md:w-28" />

        {/* Track */}
        <div
          className="flex py-6 transition-transform duration-700 ease-in-out"
          style={{ gap: `${GAP}px`, transform: `translateX(${trackX})` }}
        >
          {videos.map((video, i) => (
            <div
              key={i}
              onClick={() => i !== current && goTo(i)}
              className={`flex-shrink-0 cursor-pointer transition-all duration-700 ease-in-out will-change-transform ${slideStyle(i)}`}
              style={{ width: `${cardWidth}px`, ...slideFilter(i) }}
            >
              {/* Browser frame */}
              <div
                className="overflow-hidden rounded-[18px] bg-white"
                style={{
                  boxShadow:
                    i === current
                      ? "0 20px 60px rgba(0,0,0,0.12)"
                      : "0 8px 30px rgba(0,0,0,0.06)",
                }}
              >
                {/* Top bar */}
                <div className="flex h-[36px] items-center gap-[6px] bg-[#f1f3f5] px-4">
                  <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[10px] w-[10px] rounded-full bg-[#ffbd2e]" />
                  <span className="h-[10px] w-[10px] rounded-full bg-[#27c93f]" />
                  {video.title && (
                    <span className="ml-2 text-xs text-slate-400">
                      {video.title}
                    </span>
                  )}
                </div>

                {/* Video */}
                <div className="relative">
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

                  {/* Play / Pause */}
                  {i === current && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePause();
                      }}
                      aria-label={isPaused ? "Reproducir" : "Pausar"}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
                    >
                      {isPaused ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
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

        {/* Arrows (desktop) */}
        <button
          onClick={() => goTo(currentRef.current - 1)}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 z-40 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md backdrop-blur-sm transition hover:bg-white md:flex md:left-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
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
          className="absolute right-3 top-1/2 z-40 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md backdrop-blur-sm transition hover:bg-white md:flex md:right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
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
      <div className="mt-8 flex items-center justify-center gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 bg-slate-800"
                : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
