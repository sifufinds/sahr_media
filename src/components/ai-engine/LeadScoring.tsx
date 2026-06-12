"use client";

import { motion } from "framer-motion";
import { Flame, Thermometer, Snowflake, Check } from "lucide-react";

const tiers = [
  {
    icon: Flame,
    label: "Hot",
    range: "90 – 100",
    barWidth: "95%",
    exampleScore: 94,
    color: "#EF4444",
    darkBg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    description:
      "Ready to buy. Decision maker verified. Budget confirmed. Immediate outreach priority.",
    criteria: [
      "Company actively growing",
      "Clear purchasing intent signal",
      "Decision maker identified",
      "High budget likelihood",
      "Industry & geographic match",
    ],
  },
  {
    icon: Thermometer,
    label: "Warm",
    range: "70 – 89",
    barWidth: "80%",
    exampleScore: 78,
    color: "#F59E0B",
    darkBg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    description:
      "Strong ICP fit with partial intent signals. Enters nurture sequence over 2–4 weeks.",
    criteria: [
      "Moderate growth signals",
      "Partial intent evidence",
      "Contact identified",
      "Budget probable",
      "Partial ICP match",
    ],
  },
  {
    icon: Snowflake,
    label: "Cold",
    range: "0 – 69",
    barWidth: "42%",
    exampleScore: 44,
    color: "#64748B",
    darkBg: "rgba(100,116,139,0.08)",
    border: "rgba(100,116,139,0.18)",
    description:
      "Insufficient signals or ICP fit. Added to long-term monitoring pool for re-scoring.",
    criteria: [
      "Limited growth signals",
      "Weak intent evidence",
      "Contact unverified",
      "Budget unclear",
      "Poor or no ICP match",
    ],
  },
];

export function LeadScoring() {
  return (
    <section
      id="lead-scoring"
      className="section-pad bg-[#080E1A] relative overflow-hidden"
      aria-labelledby="scoring-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.45), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#F59E0B] uppercase mb-3">
            Step 3
          </p>
          <h2
            id="scoring-heading"
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            AI-Powered Lead Scoring
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Every enriched prospect is scored against six qualification criteria.
            Only hot and warm leads progress to outreach — cold leads re-enter monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.article
                key={tier.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: tier.border }}
              >
                {/* Header */}
                <div
                  className="px-7 py-6 border-b"
                  style={{ backgroundColor: tier.darkBg, borderColor: tier.border }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${tier.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: tier.color }} />
                    </div>
                    <div
                      className="font-black text-3xl tabular-nums"
                      style={{ color: tier.color }}
                    >
                      {tier.range}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{tier.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{tier.description}</p>
                </div>

                {/* Score bar */}
                <div
                  className="px-7 py-4 border-b"
                  style={{ backgroundColor: "rgba(0,0,0,0.2)", borderColor: tier.border }}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-slate-500 text-xs">Score</span>
                    <span className="text-white font-bold text-sm tabular-nums ml-auto">
                      {tier.exampleScore}
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: tier.barWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: tier.color }}
                    />
                  </div>
                </div>

                {/* Criteria */}
                <div className="px-7 py-5 bg-white/[0.02]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">
                    Qualification signals
                  </p>
                  <ul className="space-y-2">
                    {tier.criteria.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-slate-400 text-xs">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: tier.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
