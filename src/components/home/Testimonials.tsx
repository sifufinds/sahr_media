"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const featured = {
  name: "James Hartley",
  role: "VP of Sales",
  company: "CloudSync SaaS",
  quote:
    "SAHR MEDIA transformed our outbound strategy. We went from 3 demos a week to 15+ qualified conversations within 60 days. Every lead they deliver is genuinely interested.",
  metric: "5× demo increase",
  initials: "JH",
};

const supporting = [
  {
    name: "Sarah Mitchell",
    role: "Managing Director",
    company: "Mitchell Construction Group",
    quote:
      "They brought us procurement contacts at Tier 1 developers within the first month. No agency before had ever understood our industry.",
    metric: "£2.4M pipeline added",
    initials: "SM",
    color: "#10B981",
  },
  {
    name: "Daniel Osei",
    role: "Co-Founder & CEO",
    company: "Taskflow Software",
    quote:
      "The lead quality is exceptional. Pre-qualified buyers who understand our product and have budget approved — not just names on a list.",
    metric: "32% close rate",
    initials: "DO",
    color: "#8B5CF6",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Testimonials() {
  return (
    <section
      className="section-pad bg-[#0C1220]"
      aria-labelledby="testimonials-heading"
    >
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
            id="testimonials-heading"
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.875rem, 1.5rem + 2vw, 3rem)" }}
          >
            What our clients say
          </h2>
          <p className="text-slate-500 mt-4 text-sm max-w-md leading-relaxed">
            Real results from real businesses. No vanity metrics — just revenue
            and pipeline growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
          >
            <article className="h-full bg-[#2563EB] rounded-2xl p-8 lg:p-10 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white/80 fill-white/80" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-8">
                <p
                  className="text-white leading-relaxed"
                  style={{ fontSize: "clamp(1.05rem, 1rem + 0.3vw, 1.2rem)" }}
                >
                  &ldquo;{featured.quote}&rdquo;
                </p>
              </blockquote>

              {/* Metric */}
              <div className="text-blue-200 text-sm font-semibold mb-7 uppercase tracking-wide">
                {featured.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {featured.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{featured.name}</div>
                  <div className="text-blue-200 text-sm">
                    {featured.role} · {featured.company}
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Supporting testimonials */}
          <div className="flex flex-col gap-6">
            {supporting.map((t, i) => (
              <motion.article
                key={t.name}
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-[#D4963A] fill-[#D4963A]" />
                  ))}
                </div>

                <blockquote className="flex-1 mb-5">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <div
                  className="text-xs font-semibold uppercase tracking-wide mb-5"
                  style={{ color: t.color }}
                >
                  {t.metric}
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0"
                    style={{ backgroundColor: `${t.color}25` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
