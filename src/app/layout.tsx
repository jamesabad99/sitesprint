import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SiteSprint – Diseño web profesional",
  description:
    "Diseñamos webs profesionales, estratégicas y optimizadas para convertir visitantes en clientes. Servicio express y a medida para emprendedores en LATAM.",
  openGraph: {
    title: "SiteSprint – Diseño web profesional",
    description:
      "Diseñamos webs profesionales, estratégicas y optimizadas para convertir visitantes en clientes. Servicio express y a medida para emprendedores en LATAM.",
    type: "website",
    locale: "es_LA",
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
