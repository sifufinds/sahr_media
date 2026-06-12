"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Mail,
  Eye,
  MessageSquare,
  Calendar,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const metrics = [
  { icon: Users, label: "Leads Identified", value: 2840, suffix: "", prefix: "", color: "#2563EB" },
  { icon: UserCheck, label: "Qualified Leads", value: 742, suffix: "", prefix: "", color: "#10B981" },
  { icon: Mail, label: "Emails Delivered", value: 14280, suffix: "", prefix: "", color: "#8B5CF6" },
  { icon: Eye, label: "Open Rate", value: 38, suffix: "%", prefix: "", color: "#F59E0B" },
  { icon: MessageSquare, label: "Reply Rate", value: 12, suffix: "%", prefix: "", color: "#06B6D4" },
  { icon: Calendar, label: "Meetings Booked", value: 186, suffix: "", prefix: "", color: "#EC4899" },
  { icon: TrendingUp, label: "Opportunities Created", value: 94, suffix: "", prefix: "", color: "#10B981" },
  { icon: DollarSign, label: "Revenue Generated", value: 2.4, suffix: "M", prefix: "£", color: "#2563EB" },
];

function AnimatedCounter({
  target,
  suffix,
  prefix,
  duration = 1800,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  prefix: string;
  duration?: number;
  decimals?: number;
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
            setCount(eased * target);
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

  const display =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function EngineMetrics() {
  return (
    <section
      id="engine-metrics"
      className="section-pad bg-[#080E1A] relative overflow-hidden"
      aria-labelledby="metrics-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-3">
            Step 7
          </p>
          <h2
            id="metrics-heading"
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Full-Funnel Visibility
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            The Reporting Agent tracks every metric from initial signal detection to
            closed revenue. No black boxes — complete campaign transparency.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            const isDecimal = !Number.isInteger(metric.value);
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200 group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <Icon className="w-4 h-4" style={{ color: metric.color }} />
                </div>
                <div
                  className="font-black leading-none mb-2 tabular-nums"
                  style={{
                    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2rem)",
                    color: metric.color,
                  }}
                >
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    decimals={isDecimal ? 1 : 0}
                    duration={1600 + i * 80}
                  />
                </div>
                <p className="text-slate-500 text-xs leading-tight">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-slate-600 text-xs mt-8"
        >
          Representative metrics from active SAHR MEDIA client campaigns · 90-day period
        </motion.p>
      </div>
    </section>
  );
}
