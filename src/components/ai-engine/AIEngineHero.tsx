"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, TrendingUp } from "lucide-react";

const liveStats = [
  { label: "Signals Scanned Today", value: "14,892", icon: Zap, color: "#2563EB" },
  { label: "Leads Enriched", value: "3,241", icon: Cpu, color: "#10B981" },
  { label: "Hot Prospects Queued", value: "187", icon: TrendingUp, color: "#F59E0B" },
];

export function AIEngineHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-[#0F172A] overflow-hidden"
      aria-labelledby="engine-hero-heading"
    >
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg
          className="absolute w-full h-full opacity-60"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M-200 700 Q300 500 720 580 T1640 420"
            stroke="rgba(37,99,235,0.07)"
            strokeWidth="1"
          />
          <path
            d="M-200 600 Q300 380 720 460 T1640 320"
            stroke="rgba(16,185,129,0.05)"
            strokeWidth="1"
          />
          <circle cx="720" cy="520" r="240" stroke="rgba(37,99,235,0.04)" strokeWidth="1" fill="none" />
          <circle cx="720" cy="520" r="400" stroke="rgba(37,99,235,0.025)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container-max relative z-10 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 bg-white/5 border border-[#2563EB]/30 rounded-full px-4 py-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="text-slate-300 text-xs font-medium tracking-widest uppercase">
              AI Buying Intent Engine · Active
            </span>
          </motion.div>

          <motion.h1
            id="engine-hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.75rem, 2rem + 4vw, 5.5rem)" }}
          >
            The Intelligence{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Behind
            </span>{" "}
            Every Lead
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 leading-relaxed max-w-2xl mb-10"
            style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.2rem)" }}
          >
            Our proprietary AI engine monitors thousands of public data sources
            continuously, detects buying intent signals, qualifies prospects against
            your ICP, and delivers sales-ready opportunities — before a human ever
            touches them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
            >
              Activate The Engine
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#agent-pipeline"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 text-base w-full sm:w-auto justify-center"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
          >
            {liveStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-[#0F172A] px-7 py-6 flex items-center gap-4 hover:bg-[#1E293B]/50 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-white font-black text-xl tabular-nums">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
