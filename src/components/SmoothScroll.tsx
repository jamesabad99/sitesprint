"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Custom ease
    CustomEase.create("osmo", "0.625, 0.05, 0, 1");
    gsap.defaults({ ease: "osmo", duration: 0.6 });

    // Init Lenis
    const lenis = new Lenis({
      lerp: 0.165,
      wheelMultiplier: 1.25,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Animate sections
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      const children = section.querySelectorAll("[data-animate-child]");

      // Section fade + slide up
      gsap.fromTo(
        section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "osmo",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger children
      if (children.length > 0) {
        gsap.fromTo(
          children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "osmo",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Parallax elements
    const parallaxEls = document.querySelectorAll("[data-parallax]");
    parallaxEls.forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset.parallax || "0.1");
      gsap.to(el, {
        yPercent: speed * 100,
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
    };
  }, []);

  return <>{children}</>;
}
