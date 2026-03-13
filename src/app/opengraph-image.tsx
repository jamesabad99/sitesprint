import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SiteSprint – Diseño web profesional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(to right, #2563eb, #06b6d4)",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 4,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Site
          </span>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              background: "linear-gradient(135deg, #2563eb, #06b6d4)",
              backgroundClip: "text",
              color: "#2563eb",
              letterSpacing: "-0.02em",
            }}
          >
            Sprint
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#0f172a",
            fontWeight: 600,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Diseño web que impulsa tu negocio
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: "#64748b",
            marginTop: 16,
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Webs profesionales, estratégicas y optimizadas para convertir visitantes en clientes.
        </p>

        {/* Bottom badges */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 40,
            alignItems: "center",
          }}
        >
          {["48h entrega", "$250 USD", "100% responsive"].map((text) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                color: "#475569",
                fontWeight: 500,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                }}
              />
              {text}
            </div>
          ))}
        </div>

        {/* Domain */}
        <p
          style={{
            position: "absolute",
            bottom: 28,
            fontSize: 14,
            color: "#94a3b8",
            letterSpacing: "0.05em",
          }}
        >
          www.sitesprintperu.com
        </p>
      </div>
    ),
    { ...size }
  );
}
