"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 95,
    suffix: "%",
    label: "Lead Verification Rate",
    description: "Every lead is manually reviewed before it reaches your team",
  },
  {
    number: 24,
    suffix: "hrs",
    label: "Average Response Time",
    description: "Qualified leads delivered within one business day",
  },
  {
    number: 100,
    suffix: "%",
    label: "Custom Campaigns",
    description: "No cookie-cutter playbooks — built around your ICP",
  },
  {
    number: 3,
    suffix: "x",
    label: "Average Pipeline Increase",
    description: "Clients see 3x more qualified pipeline in 90 days",
  },
];

function Counter({
  target,
  suffix,
  duration = 1800,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section
      className="section-pad bg-[#0F172A] relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-3">
            By The Numbers
          </p>
          <h2
            id="stats-heading"
            className="font-black text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Results that speak for themselves
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center px-6 py-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
            >
              <div
                className="font-black text-white mb-2 leading-none"
                style={{ fontSize: "clamp(2.5rem, 2rem + 2vw, 3.5rem)" }}
              >
                <Counter
                  target={stat.number}
                  suffix={stat.suffix}
                  duration={1600 + i * 100}
                />
              </div>
              <div
                className="font-bold text-[#10B981] mb-2 text-sm uppercase tracking-wide"
              >
                {stat.label}
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
