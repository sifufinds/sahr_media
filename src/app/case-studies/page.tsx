import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Calendar, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real clients. Explore how SAHR MEDIA has helped SaaS and Construction companies generate qualified leads and grow their pipeline.",
};

const caseStudies = [
  {
    industry: "SaaS",
    company: "CloudSync — Project Management SaaS",
    challenge:
      "CloudSync had a strong product but relied entirely on inbound leads and referrals. Their SDR team was spending 70% of their time on unqualified outreach with low response rates.",
    solution:
      "SAHR MEDIA built a targeted outbound campaign using LinkedIn and cold email, focusing on operations managers and CTOs at mid-market companies with 50-500 employees.",
    results: [
      { label: "Demos Booked", value: "47", icon: Calendar },
      { label: "Pipeline Added", value: "£380K", icon: TrendingUp },
      { label: "Avg Close Rate", value: "28%", icon: Users },
    ],
    testimonial: {
      quote:
        "The quality of leads from SAHR MEDIA is unlike anything we had before. Our reps are having real conversations with people who actually have budget.",
      name: "James Hartley",
      role: "VP of Sales, CloudSync",
    },
    timeframe: "90 days",
    color: "#2563EB",
    tag: "SaaS Lead Generation",
  },
  {
    industry: "Construction",
    company: "Mitchell Construction Group",
    challenge:
      "Mitchell was winning work through word of mouth but lacked a structured way to reach new property developers and procurement teams for commercial contracts.",
    solution:
      "We identified active development projects and procurement contacts, built a targeted outreach campaign, and positioned Mitchell as the go-to contractor for commercial fit-outs.",
    results: [
      { label: "New Enquiries", value: "31", icon: Calendar },
      { label: "Pipeline Value", value: "£2.4M", icon: TrendingUp },
      { label: "Meetings Set", value: "18", icon: Users },
    ],
    testimonial: {
      quote:
        "We had tried other agencies but SAHR MEDIA actually understood construction. They brought us conversations with Tier 1 developers we'd never have reached on our own.",
      name: "Sarah Mitchell",
      role: "Managing Director, Mitchell Construction Group",
    },
    timeframe: "60 days",
    color: "#10B981",
    tag: "Construction Lead Generation",
  },
  {
    industry: "SaaS",
    company: "Taskflow Software — Workflow Automation",
    challenge:
      "Taskflow had just closed a Series A and needed to scale outbound quickly. Their existing team had no structured process and no playbook for enterprise outreach.",
    solution:
      "SAHR MEDIA designed and built their entire outbound infrastructure — from ICP definition and sequence writing to CRM integration and lead scoring.",
    results: [
      { label: "Demos Booked", value: "62", icon: Calendar },
      { label: "MRR Growth", value: "41%", icon: TrendingUp },
      { label: "Close Rate", value: "32%", icon: Users },
    ],
    testimonial: {
      quote:
        "SAHR MEDIA didn't just generate leads — they helped us build the entire outbound engine. Now it runs continuously and delivers every month.",
      name: "Daniel Osei",
      role: "CEO, Taskflow Software",
    },
    timeframe: "120 days",
    color: "#8B5CF6",
    tag: "Pipeline Development",
  },
  {
    industry: "Construction",
    company: "Apex Commercial Interiors",
    challenge:
      "Apex wanted to break into the London commercial office fit-out market but had no established relationships with developers or asset managers in the region.",
    solution:
      "We ran a hyper-targeted LinkedIn and email campaign reaching facilities managers, project directors, and office space procurement contacts at 40+ target companies.",
    results: [
      { label: "Qualified Meetings", value: "22", icon: Calendar },
      { label: "Contracts Won", value: "4", icon: TrendingUp },
      { label: "Revenue Generated", value: "£890K", icon: Users },
    ],
    testimonial: {
      quote:
        "We went from zero presence in London to having four active contracts within six months. SAHR MEDIA opened the door — our team walked through it.",
      name: "Tom Harrison",
      role: "Business Development Director, Apex",
    },
    timeframe: "180 days",
    color: "#F59E0B",
    tag: "Construction Lead Generation",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F172A] pt-32 pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-4">
            Client Results
          </p>
          <h1
            className="text-white font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 4rem)" }}
          >
            Real results from real clients
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            No vanity metrics. No inflated numbers. Just honest case studies from
            businesses that chose SAHR MEDIA to grow their pipeline.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-pad bg-white" aria-label="Case studies">
        <div className="container-max">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <article
                key={cs.company}
                className="border border-[#E2E8F0] rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div
                  className="px-8 py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8F0]"
                  style={{ backgroundColor: `${cs.color}08` }}
                >
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
                      style={{
                        backgroundColor: `${cs.color}15`,
                        color: cs.color,
                      }}
                    >
                      {cs.tag}
                    </span>
                    <h2 className="text-[#0F172A] font-black text-xl">
                      {cs.company}
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#94A3B8] uppercase tracking-wide mb-1">
                      Campaign Duration
                    </div>
                    <div
                      className="text-xl font-black"
                      style={{ color: cs.color }}
                    >
                      {cs.timeframe}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-10 mb-8">
                    <div>
                      <h3 className="text-[#0F172A] font-semibold text-sm uppercase tracking-wide mb-2">
                        The Challenge
                      </h3>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#0F172A] font-semibold text-sm uppercase tracking-wide mb-2">
                        Our Solution
                      </h3>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {cs.results.map((result) => {
                      const Icon = result.icon;
                      return (
                        <div
                          key={result.label}
                          className="text-center p-4 rounded-xl"
                          style={{ backgroundColor: `${cs.color}08` }}
                        >
                          <Icon
                            className="w-5 h-5 mx-auto mb-2"
                            style={{ color: cs.color }}
                          />
                          <div
                            className="text-2xl font-black mb-1"
                            style={{ color: cs.color }}
                          >
                            {result.value}
                          </div>
                          <div className="text-[#64748B] text-xs font-medium">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[#F8FAFC] rounded-xl p-6">
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
                        />
                      ))}
                    </div>
                    <p className="text-[#1E293B] text-sm leading-relaxed italic mb-4">
                      &ldquo;{cs.testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: cs.color }}
                      >
                        {cs.testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="text-[#0F172A] font-semibold text-sm">
                          {cs.testimonial.name}
                        </div>
                        <div className="text-[#94A3B8] text-xs">
                          {cs.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#0F172A]">
        <div className="container-max text-center">
          <h2
            className="text-white font-black mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Want results like these?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Every client starts with a free strategy call. We&apos;ll learn about
            your business, your targets, and design a campaign built to deliver.
          </p>
          <Link
            href="/contact#book"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-blue-500/30"
          >
            Book A Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
