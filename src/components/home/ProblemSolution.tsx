"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problems = [
  "Unverified prospects wasting your team's time",
  "Cold lists with zero buying intent",
  "Agencies billing for volume, not quality",
  "No visibility into how leads were sourced",
];

const solutions = [
  "Every lead manually verified before delivery",
  "Prospects filtered by budget, authority & need",
  "You only pay for qualified opportunities",
  "Full-funnel reporting on every campaign",
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ProblemSolution() {
  return (
    <section className="section-pad bg-[#F7F5F2]" aria-label="Problem and solution">
      <div className="container-max">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2
            className="font-display font-bold text-[#0C1220] leading-tight max-w-xl"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
            Stop paying for leads that don&apos;t convert
          </h2>
          <p className="text-[#6B7A94] mt-4 max-w-lg leading-relaxed text-sm">
            Most agencies send raw contact lists. We send qualified conversations,
            ready to close.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Problem */}
          <motion.div
            className="bg-white rounded-2xl p-8 lg:p-10 border border-red-100/80"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-5">
              The old way
            </p>
            <h3 className="text-[#0C1220] font-bold text-xl mb-4">
              Agencies send unqualified leads
            </h3>
            <p className="text-[#6B7A94] text-sm leading-relaxed mb-7">
              Your sales team spends 80% of their time chasing people who will
              never buy. No verification, no qualification, no understanding of
              your ICP.
            </p>
            <ul className="space-y-3">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#6B7A94] text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            className="bg-[#0C1220] rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
          >
            <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-5">
              The SAHR MEDIA way
            </p>
            <h3 className="text-white font-bold text-xl mb-4">
              We qualify every lead before you touch it
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">
              We research, validate, qualify, and nurture every prospect. Your
              sales team only speaks to decision-makers who are ready to buy.
            </p>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#10B981]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#10B981]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
