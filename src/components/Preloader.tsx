"use client";

import { useEffect, useState, useRef } from "react";

const DURATION = 1800; // ms total for 0→100%
const TICK = 16; // ~60fps

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const startRef = useRef(0);

  // Scroll lock
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Counter animation
  useEffect(() => {
    startRef.current = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      // Ease-out curve for natural feel
      const eased = 1 - Math.pow(1 - raw, 3);
      const pct = Math.round(eased * 100);

      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        // Small pause at 100% before exit
        setTimeout(() => setPhase("exiting"), 150);
      }
    }, TICK);

    return () => clearInterval(timer);
  }, []);

  // After exit animation completes, remove overlay
  useEffect(() => {
    if (phase === "exiting") {
      const timeout = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  return (
    <>
      {/* Content always mounted but hidden behind overlay */}
      <div
        style={{
          opacity: phase === "done" ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
      </div>

      {/* Overlay */}
      {phase !== "done" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#050505",
            opacity: phase === "exiting" ? 0 : 1,
            transform: phase === "exiting" ? "scale(1.02)" : "scale(1)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            pointerEvents: phase === "exiting" ? "none" : "auto",
          }}
        >
          {/* Cargando label */}
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "16px",
            }}
          >
            Cargando
          </span>

          {/* Percentage */}
          <span
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1,
            }}
          >
            {progress}%
          </span>

          {/* Progress bar */}
          <div
            style={{
              marginTop: "28px",
              width: "min(200px, 50vw)",
              height: "2px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "1px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "rgba(255,255,255,0.5)",
                borderRadius: "1px",
                transition: "width 0.05s linear",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
