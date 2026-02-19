"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface RotatingWordsProps {
  words: string[];
  stepDuration?: number;
  className?: string;
}

export default function RotatingWords({ words, stepDuration = 1.75, className = "" }: RotatingWordsProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!wrapperRef.current || words.length < 2) return;

    const wrapper = wrapperRef.current;
    const wordEls = wordRefs.current.filter(Boolean) as HTMLSpanElement[];

    // Initial state: all hidden below except first
    wordEls.forEach((el, i) => {
      if (i === 0) {
        gsap.set(el, { yPercent: 0, autoAlpha: 1 });
      } else {
        gsap.set(el, { yPercent: 150, autoAlpha: 0 });
      }
    });

    // Set wrapper width to first word
    const firstWidth = wordEls[0].getBoundingClientRect().width;
    wrapper.style.width = firstWidth + "px";

    let activeIndex = 0;

    function showNext() {
      const nextIndex = (activeIndex + 1) % wordEls.length;
      const prev = wordEls[activeIndex];
      const current = wordEls[nextIndex];
      const targetWidth = current.getBoundingClientRect().width;

      gsap.to(wrapper, {
        width: targetWidth,
        duration: 0.75,
        ease: "power4.inOut",
      });

      gsap.to(prev, {
        yPercent: -150,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });

      gsap.fromTo(
        current,
        { yPercent: 150, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.75, ease: "power4.inOut" }
      );

      activeIndex = nextIndex;
      gsap.delayedCall(stepDuration, showNext);
    }

    const delayed = gsap.delayedCall(stepDuration, showNext);

    return () => {
      delayed.kill();
      gsap.killTweensOf(wordEls);
      gsap.killTweensOf(wrapper);
    };
  }, [words, stepDuration]);

  // Find longest word for height placeholder
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span
      ref={wrapperRef}
      className={`relative inline-block ${className}`}
      style={{ overflow: "clip", verticalAlign: "bottom" }}
    >
      {/* Invisible longest word to hold height */}
      <span className="invisible">{longest}</span>
      {words.map((word, i) => (
        <span
          key={word}
          ref={(el) => { wordRefs.current[i] = el; }}
          className="absolute left-0 top-0 block whitespace-nowrap"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
