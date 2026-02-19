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
  // Fixed deadline: March 20, 2026 23:59:59 Lima time (UTC-5)
  const [target] = useState<Date>(() => {
    if (targetDate) return targetDate;
    return new Date("2026-03-20T04:59:59Z");
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
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
      }}
    >
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-x-1 sm:inline-flex sm:gap-2.5">
        {units.map((unit, i) => (
          <div key={unit.label} className="contents sm:flex sm:items-center sm:gap-2.5">
            {/* Card */}
            <div
              className="flex flex-col items-center justify-center py-1 sm:h-[78px] sm:w-[84px] md:h-[82px] md:w-[88px]"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
              }}
            >
              <span className="text-[1.6rem] tabular-nums text-slate-900 sm:text-[2rem] md:text-[2.2rem]" style={{ fontWeight: 700, letterSpacing: "-0.5px" }}>
                {mounted ? String(unit.value).padStart(2, "0") : "--"}
              </span>
              <span className="mt-0.5 text-[6.5px] font-normal text-slate-400 sm:mt-1 sm:text-[7px] md:text-[7.5px]" style={{ letterSpacing: "1px" }}>
                {unit.label}
              </span>
            </div>
            {/* Separator */}
            {i < units.length - 1 && (
              <span className="text-center text-sm font-light text-slate-300 sm:text-lg">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
