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
  dark?: boolean;
}

export default function Countdown({ targetDate, dark = false }: CountdownProps) {
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
    days: 0, hours: 0, minutes: 0, seconds: 0,
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
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {units.map((unit) => (
        <div
          key={unit.label}
          className={`flex flex-col items-center rounded-xl py-2.5 ${
            dark
              ? "border border-white/10 bg-white/5"
              : "border border-slate-200 bg-slate-50"
          }`}
        >
          <span className={`text-[1.25rem] font-bold tabular-nums leading-none ${dark ? "text-white" : "text-slate-900"}`}>
            {mounted ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className={`mt-1 text-[9px] font-medium uppercase tracking-wider ${dark ? "text-slate-500" : "text-slate-400"}`}>
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
