"use client";

import { motion } from "framer-motion";
import { Target, Zap, Filter, Send } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Target",
    description:
      "We map your ideal customer profile, industry, company size, revenue, and buying intent, then build precise audience segments from real data.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Generate",
    description:
      "Outbound prospecting, LinkedIn, cold email, and content work in parallel to surface high-intent opportunities at scale.",
  },
  {
    number: "03",
    icon: Filter,
    title: "Qualify",
    description:
      "Every prospect is manually reviewed against budget, authority, need, and timing before we introduce them to your team.",
  },
  {
    number: "04",
    icon: Send,
    title: "Deliver",
    description:
      "Qualified meetings land directly in your sales calendar. No noise, no raw lists, just revenue-ready conversations.",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad bg-[#0C1220]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <h2
              id="how-it-works-heading"
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
            >
              How SAHR MEDIA Works
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-sm leading-relaxed">
              A proven end-to-end process that turns cold outreach into warm
              conversations and qualified pipeline.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact#book"
              className="hidden lg:inline-flex items-center gap-1.5 text-[#2563EB] hover:text-blue-400 text-sm font-semibold transition-colors"
            >
              Start a campaign →
            </Link>
          </motion.div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease }}
              >
                <div className="group h-full bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.065] hover:border-white/[0.14] transition-all duration-300 card-lift">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.07] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-4xl font-black text-white/[0.06] select-none font-display">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
