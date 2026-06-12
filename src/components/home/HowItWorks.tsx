"use client";

import { motion } from "framer-motion";
import { Target, Zap, Filter, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Target",
    description:
      "We identify your ideal customers based on industry, company size, location, revenue, and buying intent signals. No guesswork — only precision targeting.",
    color: "#2563EB",
  },
  {
    number: "02",
    icon: Zap,
    title: "Generate",
    description:
      "We use outbound prospecting, LinkedIn, email outreach, SEO, paid media, and content marketing to generate high-intent opportunities at scale.",
    color: "#10B981",
  },
  {
    number: "03",
    icon: Filter,
    title: "Qualify",
    description:
      "Every lead is manually reviewed against your qualification criteria — budget, authority, need, and timing — before we take the next step.",
    color: "#F59E0B",
  },
  {
    number: "04",
    icon: Send,
    title: "Deliver",
    description:
      "Qualified appointments and verified opportunities are delivered directly to your sales team, ready to close. No noise, just revenue.",
    color: "#EC4899",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad bg-[#0F172A] relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background decoration */}
      <div className="dot-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-3">
            Our Process
          </p>
          <h2
            id="how-it-works-heading"
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            How SAHR MEDIA Works
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            A proven, end-to-end process that turns cold outreach into warm
            conversations and qualified pipeline.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[calc(100%-0px)] w-full h-px z-10"
                    style={{
                      background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)",
                      width: "calc(100% - 3rem)",
                      left: "calc(100% - 1.5rem)",
                    }}
                    aria-hidden="true"
                  />
                )}

                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full group-hover:bg-white/[0.07] group-hover:border-white/20 transition-all duration-300 card-lift">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: step.color }}
                      />
                    </div>
                    <span
                      className="text-5xl font-black opacity-10 select-none"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact#book"
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-white text-sm font-semibold group transition-colors"
          >
            Start your lead generation campaign
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
