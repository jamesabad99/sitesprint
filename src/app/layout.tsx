import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SiteSprint – Tu web profesional en 48h",
  description:
    "Diseñamos webs modernas y claras para emprendedores y marcas nuevas en LATAM. Web Express 48h desde $250.",
  openGraph: {
    title: "SiteSprint – Tu web profesional en 48h",
    description:
      "Diseñamos webs modernas y claras para emprendedores y marcas nuevas en LATAM. Web Express 48h desde $250.",
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
