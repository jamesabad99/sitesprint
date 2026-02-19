"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom eases from the boilerplate
    CustomEase.create("osmo", "0.625, 0.05, 0, 1");
    CustomEase.create("parallax", "0.7, 0.05, 0.13, 1");
    gsap.defaults({ ease: "osmo", duration: 0.8 });

    // Init Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // ── Hero entrance animation ──
    const hero = document.querySelector("[data-hero]");
    if (hero) {
      const heroTitle = hero.querySelector("[data-hero-title]");
      const heroSub = hero.querySelector("[data-hero-sub]");
      const heroCtas = hero.querySelector("[data-hero-ctas]");
      const heroTrust = hero.querySelector("[data-hero-trust]");
      const heroMockups = hero.querySelector("[data-hero-mockups]");

      const tl = gsap.timeline({ delay: 0.2 });

      if (heroTitle) {
        tl.fromTo(heroTitle,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "parallax" },
          0
        );
      }
      if (heroSub) {
        tl.fromTo(heroSub,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "parallax" },
          0.15
        );
      }
      if (heroCtas) {
        tl.fromTo(heroCtas,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "parallax" },
          0.3
        );
      }
      if (heroTrust) {
        tl.fromTo(heroTrust,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "parallax" },
          0.45
        );
      }
      if (heroMockups) {
        tl.fromTo(heroMockups,
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: "parallax" },
          0.2
        );
      }
    }

    // ── Section parallax reveals ──
    // Each section slides up and covers the previous one (parallax depth)
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      const el = section as HTMLElement;

      // Dark overlay on previous content as this section approaches
      gsap.fromTo(el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "parallax",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Children stagger within each section
      const children = el.querySelectorAll("[data-child]");
      if (children.length > 0) {
        gsap.fromTo(children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "parallax",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // ── Parallax depth on specific elements ──
    const parallaxEls = document.querySelectorAll("[data-speed]");
    parallaxEls.forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset.speed || "0.1");
      gsap.to(el, {
        yPercent: speed * 50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
