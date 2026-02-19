"use client";

import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "#", label: "Inicio", current: true },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function HamburgerNav() {
  const [active, setActive] = useState(false);

  const close = useCallback(() => setActive(false), []);
  const toggle = useCallback(() => setActive((v) => !v), []);

  // ESC key closes nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && active) close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, close]);

  // Stop/start Lenis when nav opens/closes
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__lenis) {
      if (active) {
        (window as any).__lenis.stop();
      } else {
        (window as any).__lenis.start();
      }
    }
  }, [active]);

  const handleNavClick = (href: string) => {
    close();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Small delay to let menu close animation start
    setTimeout(() => {
      const el = document.querySelector(href);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  };

  return (
    <nav
      data-navigation-status={active ? "active" : "not-active"}
      className="nav-hamburger"
    >
      {/* Dark overlay */}
      <div
        className="nav-hamburger__dark-bg"
        onClick={close}
      />

      {/* Menu container */}
      <div className="nav-hamburger__container">
        {/* Background that expands */}
        <div className="nav-hamburger__bg" />

        {/* Menu content */}
        <div className="nav-hamburger__group">
          <p className="nav-hamburger__menu-label">Menu</p>
          <ul className="nav-hamburger__list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-hamburger__item">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="nav-hamburger__link"
                  {...(link.current ? { "aria-current": "page" as const } : {})}
                >
                  <span className="nav-hamburger__text">{link.label}</span>
                  <span className="nav-hamburger__dot" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button */}
        <button
          className="nav-hamburger__toggle"
          onClick={toggle}
          aria-label={active ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="nav-hamburger__bar" />
          <span className="nav-hamburger__bar" />
        </button>
      </div>
    </nav>
  );
}
