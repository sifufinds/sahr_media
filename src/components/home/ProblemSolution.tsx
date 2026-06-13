"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

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

export function ProblemSolution() {
  return (
    <section className="section-pad bg-[#F8FAFC]" aria-label="Problem and solution">
      <div className="container-max">
        {/* Section label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            The Challenge
          </p>
          <h2
            className="font-black text-[#0F172A] leading-tight"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Stop paying for leads that don&apos;t convert
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-red-100 shadow-sm"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-0.5">
                  The Problem
                </p>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Most agencies send unqualified leads
                </h3>
              </div>
            </div>

            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              Most lead generation agencies send you raw lists of contacts with
              no verification, no qualification, and no understanding of your
              ICP. The result? Your sales team spends 80% of their time chasing
              people who will never buy.
            </p>

            <ul className="space-y-3">
              {problems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#64748B] text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            className="bg-[#0F172A] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Subtle glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />

            <div className="relative flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-0.5">
                  Our Solution
                </p>
                <h3 className="text-xl font-bold text-white">
                  SAHR MEDIA qualifies every lead
                </h3>
              </div>
            </div>

            <p className="relative text-slate-400 text-sm leading-relaxed mb-6">
              We research, validate, qualify, and nurture every prospect before
              introducing them to your business. Your sales team only speaks to
              decision-makers who are ready to buy.
            </p>

            <ul className="relative space-y-3">
              {solutions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-300 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
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
