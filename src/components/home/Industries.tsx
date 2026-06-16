"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, HardHat, CheckCircle, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Monitor,
    tag: "SaaS",
    name: "SaaS Companies",
    headline: "Fill your demo calendar with qualified software buyers",
    description:
      "We help SaaS companies reach the right decision-makers, generate product demos, and build a predictable outbound pipeline without relying on inbound alone.",
    benefits: [
      "Generate qualified software demos",
      "Reach C-suite and VP-level buyers",
      "Increase pipeline velocity",
      "Reduce sales cycle length",
      "Target companies by tech stack & ARR",
    ],
    href: "/services#saas",
    color: "#2563EB",
  },
  {
    icon: HardHat,
    tag: "Construction",
    name: "Construction Companies",
    headline: "Win commercial contracts and project enquiries at scale",
    description:
      "We connect construction businesses with property developers, procurement managers, and decision-makers actively seeking contractors for commercial projects.",
    benefits: [
      "Generate commercial project enquiries",
      "Secure long-term contracts",
      "Reach procurement managers",
      "Target by project size & region",
      "Build relationships with developers",
    ],
    href: "/services#construction",
    color: "#10B981",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Industries() {
  return (
    <section className="section-pad bg-white" aria-labelledby="industries-heading">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2
            id="industries-heading"
            className="font-display font-bold text-[#0C1220] leading-tight"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
            Built for two industries,
            <br className="hidden sm:block" /> mastered with precision
          </h2>
          <p className="text-[#6B7A94] mt-4 max-w-lg text-sm leading-relaxed">
            Deep industry expertise means your campaigns are built by people
            who understand your buyer — not a generic template.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.name}
                className="group rounded-2xl border border-[#E8E4DF] overflow-hidden hover:border-[#C7C3BC] transition-colors duration-300"
                style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                {/* Card header */}
                <div className="px-8 py-8 border-b border-[#E8E4DF]">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${industry.color}12` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: industry.color }} />
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: industry.color }}
                    >
                      {industry.tag}
                    </span>
                  </div>
                  <h3 className="text-[#0C1220] font-bold text-2xl mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-[#6B7A94] text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="px-8 py-7">
                  <ul className="space-y-3 mb-7">
                    {industry.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-[#1E293B] text-sm"
                      >
                        <CheckCircle
                          className="w-4 h-4 shrink-0"
                          style={{ color: industry.color }}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold group/link"
                    style={{ color: industry.color }}
                  >
                    Learn more about {industry.tag} lead gen
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
