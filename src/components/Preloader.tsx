"use client";

import { useEffect, useState, useRef } from "react";

const DURATION = 1800;
const TICK = 16;

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const startRef = useRef(0);

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

  useEffect(() => {
    startRef.current = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      const pct = Math.round(eased * 100);

      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => setPhase("exiting"), 150);
      }
    }, TICK);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase === "exiting") {
      const timeout = setTimeout(() => setPhase("done"), 600);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  return (
    <>
      <div
        style={{
          opacity: phase === "done" ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
      </div>

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
            background: "#ffffff",
            opacity: phase === "exiting" ? 0 : 1,
            transform: phase === "exiting" ? "scale(1.02)" : "scale(1)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            pointerEvents: phase === "exiting" ? "none" : "auto",
          }}
        >
          {/* Loading label */}
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#94a3b8",
              marginBottom: "16px",
            }}
          >
            Cargando
          </span>

          {/* Percentage */}
          <span
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#0f172a",
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
              background: "#e2e8f0",
              borderRadius: "1px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "#2563eb",
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
