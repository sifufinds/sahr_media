import Link from "next/link";
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
    bgClass: "bg-[#EFF6FF]",
    borderClass: "border-[#BFDBFE]",
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
    bgClass: "bg-[#ECFDF5]",
    borderClass: "border-[#A7F3D0]",
  },
];

export function Industries() {
  return (
    <section className="section-pad bg-white" aria-labelledby="industries-heading">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            Who We Serve
          </p>
          <h2
            id="industries-heading"
            className="font-black text-[#0F172A] leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Built for two industries, mastered with precision
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-sm leading-relaxed">
            Deep industry expertise means your campaigns are built by people
            who understand your buyer — not a generic lead gen template.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article
                key={industry.name}
                className="group rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-[#CBD5E1] transition-all duration-300 card-lift"
              >
                {/* Card header */}
                <div className={`${industry.bgClass} ${industry.borderClass} border-b px-8 py-8`}>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${industry.color}15` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: industry.color }}
                      />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${industry.color}15`,
                        color: industry.color,
                      }}
                    >
                      {industry.tag}
                    </span>
                  </div>
                  <h3 className="text-[#0F172A] font-black text-2xl mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="px-8 py-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">
                    What we deliver
                  </p>
                  <ul className="space-y-3 mb-6">
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
