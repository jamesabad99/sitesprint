import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sitesprintperu.com"),
  title: "SiteSprint – Diseño web profesional",
  description:
    "Diseñamos webs profesionales, estratégicas y optimizadas para convertir visitantes en clientes. Servicio express y a medida para emprendedores en LATAM.",
  openGraph: {
    title: "SiteSprint – Diseño web profesional",
    description:
      "Diseñamos webs profesionales, estratégicas y optimizadas para convertir visitantes en clientes. Servicio express y a medida para emprendedores en LATAM.",
    type: "website",
    locale: "es_LA",
    url: "https://www.sitesprintperu.com",
    images: [
      {
        url: "https://www.sitesprintperu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SiteSprint – Diseño web profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteSprint – Diseño web profesional",
    description:
      "Diseñamos webs profesionales, estratégicas y optimizadas para convertir visitantes en clientes.",
    images: ["https://www.sitesprintperu.com/og-image.png"],
  },
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
