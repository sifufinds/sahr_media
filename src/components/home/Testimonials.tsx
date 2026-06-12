"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Hartley",
    role: "VP of Sales",
    company: "CloudSync SaaS",
    industry: "SaaS",
    quote:
      "SAHR MEDIA transformed our outbound strategy. We went from 3 demos a week to 15+ qualified conversations within 60 days. Every lead they deliver is genuinely interested.",
    metric: "5x demo increase",
    initials: "JH",
    color: "#2563EB",
  },
  {
    name: "Sarah Mitchell",
    role: "Managing Director",
    company: "Mitchell Construction Group",
    industry: "Construction",
    quote:
      "We'd tried other agencies before, but SAHR MEDIA was the first to actually understand our industry. They brought us procurement contacts at Tier 1 developers within the first month.",
    metric: "£2.4M pipeline added",
    initials: "SM",
    color: "#10B981",
  },
  {
    name: "Daniel Osei",
    role: "Co-Founder & CEO",
    company: "Taskflow Software",
    industry: "SaaS",
    quote:
      "The lead quality from SAHR MEDIA is exceptional. These aren't just names on a list — they're pre-qualified buyers who understand our product and have budget approved.",
    metric: "32% close rate",
    initials: "DO",
    color: "#8B5CF6",
  },
];

export function Testimonials() {
  return (
    <section
      className="section-pad bg-[#F8FAFC]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            Client Results
          </p>
          <h2
            id="testimonials-heading"
            className="font-black text-[#0F172A] leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            What our clients say
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-sm leading-relaxed">
            Real results from real businesses. No vanity metrics — just revenue
            and pipeline growth.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-[#E2E8F0] card-lift flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote
                  className="absolute -top-1 -left-1 w-6 h-6 text-[#E2E8F0]"
                  aria-hidden="true"
                />
                <p className="text-[#1E293B] text-sm leading-relaxed pl-5">
                  {t.quote}
                </p>
              </div>

              {/* Metric badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-5 self-start"
                style={{
                  backgroundColor: `${t.color}15`,
                  color: t.color,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#F1F5F9]">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#0F172A] font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#94A3B8] text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
