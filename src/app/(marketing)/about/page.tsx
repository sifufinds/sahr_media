import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Users, BarChart3, Shield } from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sahrmedia.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://sahrmedia.com/about" },
  ],
};

export const metadata: Metadata = {
  title: "About SAHR MEDIA, B2B Lead Generation Specialists",
  description:
    "SAHR MEDIA is a specialist B2B lead generation agency for SaaS and Construction companies. We combine AI-driven intent detection with human verification to deliver sales-ready opportunities.",
  alternates: {
    canonical: "https://sahrmedia.com/about",
  },
};

const principles = [
  {
    icon: Target,
    title: "Precision over volume",
    description:
      "We don't believe in sending 10,000 contacts to find 5 good ones. We research, segment, and qualify first, so every lead we deliver is worth your team's attention.",
    color: "#2563EB",
  },
  {
    icon: Shield,
    title: "Human verification on every lead",
    description:
      "Our AI engine surfaces intent signals. A human analyst reviews every prospect before delivery. No lead leaves our system without manual verification against your ICP.",
    color: "#10B981",
  },
  {
    icon: BarChart3,
    title: "Transparency by default",
    description:
      "You see the methodology, the data sources, and the qualification rationale for every lead we deliver. No black boxes, no vague promises, just accountable results.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Specialists, not generalists",
    description:
      "We focus exclusively on SaaS and Construction because deep industry expertise produces better results than broad agency coverage. We know your buyers because we work with them every day.",
    color: "#8B5CF6",
  },
];

const results = [
  { value: "£2.4M+", label: "Pipeline generated in a single campaign" },
  { value: "62", label: "Demos booked in 120 days for a Series A SaaS" },
  { value: "32%", label: "Average close rate across qualified leads" },
  { value: "60 days", label: "Average time to first qualified meeting" },
];

const whatWeDeliver = [
  "Qualified leads verified by a human analyst before delivery",
  "ICP-matched prospects with budget, authority, and clear need confirmed",
  "Confirmed appointments booked directly into your sales team's calendar",
  "Full-funnel reporting from first signal to closed revenue",
  "CRM integration with HubSpot, Salesforce, and Pipedrive",
  "Campaign management and ongoing optimisation as standard",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="bg-[#0F172A] pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-4">
              About SAHR MEDIA
            </p>
            <h1
              className="text-white font-black leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 2rem + 3vw, 4.5rem)" }}
            >
              Built to deliver leads{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                that actually close
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
              SAHR MEDIA is a specialist B2B lead generation agency focused exclusively
              on SaaS and Construction. We combine proprietary AI-driven intent
              detection with human verification to deliver sales-ready opportunities
              directly to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 justify-center"
              >
                Book A Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results strip */}
      <section className="bg-[#111827] border-y border-white/10">
        <div className="container-max py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <div
                  className="text-3xl font-black mb-1"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {r.value}
                </div>
                <div className="text-slate-400 text-xs leading-snug">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad bg-white" aria-labelledby="mission-heading">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
                What We Do
              </p>
              <h2
                id="mission-heading"
                className="text-[#0F172A] font-black leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
              >
                We generate pipeline.<br />Not just contacts.
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-6 text-base">
                Most lead generation ends when a list is delivered. Ours starts there.
                We research your ideal customer profile, identify buying intent signals,
                verify every prospect manually, and book confirmed meetings directly
                into your calendar.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-8 text-base">
                The result is a predictable, measurable pipeline that your sales team
                can rely on, with qualified opportunities that consistently convert at
                industry-leading rates.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all"
              >
                See how it works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-6">
                What&apos;s included in every engagement
              </p>
              <ul className="space-y-4">
                {whatWeDeliver.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#1E293B] text-sm">
                    <CheckCircle className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our focus */}
      <section className="section-pad bg-[#F8FAFC]" aria-labelledby="focus-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
              Our Focus
            </p>
            <h2
              id="focus-heading"
              className="text-[#0F172A] font-black leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
            >
              Two industries. Deep expertise.
            </h2>
            <p className="text-[#64748B] max-w-xl mx-auto text-sm leading-relaxed">
              We deliberately focus on two verticals rather than serving everyone. Deep
              industry knowledge means campaigns that are relevant from day one, not
              generic outreach dressed up as expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#BFDBFE] overflow-hidden">
              <div className="bg-[#EFF6FF] px-8 py-6 border-b border-[#BFDBFE]">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2 block">
                  SaaS Companies
                </span>
                <h3 className="text-[#0F172A] font-black text-xl">
                  Fill your demo calendar with qualified software buyers
                </h3>
              </div>
              <div className="px-8 py-6">
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">
                  We help SaaS companies reach the right decision-makers, CTOs, VPs of
                  Operations, and Heads of Engineering, with highly personalised outbound
                  campaigns that generate product demos and qualified pipeline at scale.
                  We understand SaaS buying cycles, ICP economics, and how to position
                  against competitive alternatives.
                </p>
                <Link
                  href="/services#saas"
                  className="text-[#2563EB] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  SaaS lead generation services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#A7F3D0] overflow-hidden">
              <div className="bg-[#ECFDF5] px-8 py-6 border-b border-[#A7F3D0]">
                <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] mb-2 block">
                  Construction Companies
                </span>
                <h3 className="text-[#0F172A] font-black text-xl">
                  Win commercial contracts and project enquiries at scale
                </h3>
              </div>
              <div className="px-8 py-6">
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">
                  We connect construction businesses with property developers, procurement
                  managers, and decision-makers who are actively commissioning work. Our
                  campaigns are built around planning pipeline data, developer hiring
                  signals, and direct outreach to the people who control the shortlist,
                  before a tender is even issued.
                </p>
                <Link
                  href="/services#construction"
                  className="text-[#10B981] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Construction lead generation services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-pad bg-[#0F172A]" aria-labelledby="principles-heading">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-3">
              How We Work
            </p>
            <h2
              id="principles-heading"
              className="text-white font-black leading-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
            >
              What makes SAHR MEDIA different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/[0.07] transition-colors"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${p.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-max text-center">
          <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            Let&apos;s Work Together
          </p>
          <h2
            className="text-[#0F172A] font-black mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Ready to build a predictable pipeline?
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Every engagement starts with a free 30-minute strategy call. We&apos;ll
            learn about your business, your ICP, and your revenue goals, then
            tell you honestly what we can deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-blue-500/30 justify-center"
            >
              Book A Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172A] font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-[#F8FAFC] justify-center"
            >
              See Client Results
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
