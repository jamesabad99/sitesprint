"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate?: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [target] = useState<Date>(() => {
    if (targetDate) return targetDate;
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const units = [
    { value: timeLeft.days, label: "DÍAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MINUTOS" },
    { value: timeLeft.seconds, label: "SEGUNDOS" },
  ];

  return (
    <div
      className="w-full max-w-[280px] rounded-xl sm:max-w-[520px]"
      style={{
        padding: "10px 12px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-x-1 sm:inline-flex sm:gap-2.5">
        {units.map((unit, i) => (
          <div key={unit.label} className="contents sm:flex sm:items-center sm:gap-2.5">
            {/* Card */}
            <div
              className="flex flex-col items-center justify-center py-1 sm:h-[78px] sm:w-[84px] md:h-[82px] md:w-[88px]"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
              }}
            >
              <span className="text-[1.6rem] tabular-nums text-[#ffffff] sm:text-[2rem] md:text-[2.2rem]" style={{ fontWeight: 700, letterSpacing: "-0.5px", textShadow: "0 2px 6px rgba(0,0,0,0.18)" }}>
                {mounted ? String(unit.value).padStart(2, "0") : "--"}
              </span>
              <span className="mt-0.5 text-[6.5px] font-normal text-white/75 sm:mt-1 sm:text-[7px] md:text-[7.5px]" style={{ letterSpacing: "1px" }}>
                {unit.label}
              </span>
            </div>
            {/* Separator */}
            {i < units.length - 1 && (
              <span className="text-center text-sm font-light text-white/20 sm:text-lg">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
