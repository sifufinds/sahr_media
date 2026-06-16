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
    suffix: "h",
    label: "Average Delivery Time",
    description: "Qualified leads delivered within one business day",
  },
  {
    number: 3,
    suffix: "×",
    label: "Pipeline Increase",
    description: "Clients see 3× more qualified pipeline within 90 days",
  },
  {
    number: 100,
    suffix: "%",
    label: "Custom Campaigns",
    description: "No cookie-cutter playbooks — built around your ICP",
  },
];

function Counter({
  target,
  suffix,
  duration = 1600,
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
      className="section-pad bg-[#F7F5F2]"
      aria-labelledby="stats-heading"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">

          {/* Left: heading */}
          <div>
            <h2
              id="stats-heading"
              className="font-display font-bold text-[#0C1220] leading-tight"
              style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
            >
              Results that speak
              <br />
              for themselves
            </h2>
            <p className="text-[#6B7A94] mt-4 text-sm leading-relaxed max-w-xs">
              Consistent, measurable outcomes for the companies we work with.
            </p>
          </div>

          {/* Right: stats in a 2×2 grid */}
          <div className="grid grid-cols-2 gap-px bg-[#E8E4DF] rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-[#F7F5F2] px-8 py-9"
              >
                <div
                  className="font-display font-bold text-[#0C1220] leading-none mb-2"
                  style={{ fontSize: "clamp(2.5rem, 2rem + 2.5vw, 4rem)" }}
                >
                  <Counter
                    target={stat.number}
                    suffix={stat.suffix}
                    duration={1500 + i * 100}
                  />
                </div>
                <div className="text-[#0C1220] font-semibold text-sm mb-1.5">
                  {stat.label}
                </div>
                <p className="text-[#6B7A94] text-xs leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
