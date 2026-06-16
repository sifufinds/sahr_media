import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  HardHat,
  Filter,
  Calendar,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sahrmedia.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://sahrmedia.com/services" },
  ],
};

export const metadata: Metadata = {
  title: "B2B Lead Generation Services, SaaS & Construction",
  description:
    "SaaS lead generation, construction lead generation, lead qualification, and appointment setting services. End-to-end B2B lead generation for serious businesses.",
  alternates: {
    canonical: "https://sahrmedia.com/services",
  },
};

const services = [
  {
    id: "saas",
    icon: Monitor,
    tag: "SaaS",
    title: "SaaS Lead Generation",
    description:
      "Generate qualified software buyers through outbound campaigns, content marketing, LinkedIn outreach, and appointment setting. We understand SaaS buyers, from SMB decision-makers to enterprise procurement.",
    features: [
      "ICP research and audience mapping",
      "LinkedIn outreach sequences",
      "Cold email campaigns with personalisation",
      "Demo scheduling with qualified leads",
      "CRM integration and reporting",
      "A/B testing and campaign optimisation",
    ],
    cta: "Start SaaS Campaign",
    color: "#2563EB",
    bgColor: "#EFF6FF",
  },
  {
    id: "construction",
    icon: HardHat,
    tag: "Construction",
    title: "Construction Lead Generation",
    description:
      "Connect with property developers, procurement managers, contractors, and decision-makers. We specialise in commercial construction and help you win project enquiries and long-term contracts.",
    features: [
      "Developer and procurement targeting",
      "Project pipeline identification",
      "Relationship-building outreach",
      "Tender and bid opportunity sourcing",
      "Trade association and event targeting",
      "Regional and national campaign options",
    ],
    cta: "Start Construction Campaign",
    color: "#10B981",
    bgColor: "#ECFDF5",
  },
  {
    id: "qualification",
    icon: Filter,
    tag: "Qualification",
    title: "Lead Qualification",
    description:
      "Verify every lead before delivery using custom qualification criteria built around your ideal customer profile. No unverified contacts, every lead is manually reviewed against BANT or custom scoring models.",
    features: [
      "Custom qualification framework design",
      "Budget and authority verification",
      "Need and timeline assessment",
      "Manual human review on every lead",
      "Detailed qualification notes on delivery",
      "Rejection tracking and feedback loops",
    ],
    cta: "Add Qualification Layer",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
  },
  {
    id: "appointment",
    icon: Calendar,
    tag: "Appointment Setting",
    title: "Appointment Setting",
    description:
      "Schedule confirmed meetings directly into your sales team's calendar. We handle the outreach, follow-ups, and confirmations so your reps spend time selling, not prospecting.",
    features: [
      "Calendly and Google Calendar integration",
      "Multi-touch follow-up sequences",
      "Meeting confirmation and reminders",
      "No-show recovery process",
      "Detailed pre-meeting lead intel",
      "Rescheduling management",
    ],
    cta: "Book More Meetings",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
  },
  {
    id: "pipeline",
    icon: TrendingUp,
    tag: "Pipeline",
    title: "Sales Pipeline Development",
    description:
      "End-to-end pipeline building that takes prospects from first contact to qualified opportunity. We build repeatable outbound systems that continuously feed your sales team.",
    features: [
      "Outbound system design and setup",
      "CRM pipeline structure consulting",
      "Monthly reporting and analytics",
      "Pipeline health scoring",
      "Revenue forecasting support",
      "Ongoing campaign optimisation",
    ],
    cta: "Build Your Pipeline",
    color: "#EC4899",
    bgColor: "#FDF2F8",
  },
];

const process = [
  { step: "1", title: "Discovery Call", desc: "We learn your ICP, targets, and revenue goals." },
  { step: "2", title: "Campaign Build", desc: "We design and configure your outbound campaign." },
  { step: "3", title: "Launch & Iterate", desc: "We launch, track, and optimise based on data." },
  { step: "4", title: "Lead Delivery", desc: "Qualified leads delivered directly to your team." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="bg-[#0F172A] pt-24 sm:pt-32 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-4">
            Our Services
          </p>
          <h1
            className="text-white font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 4rem)" }}
          >
            Full-stack lead generation
            <br />
            for ambitious companies
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed mb-8">
            From ICP research to qualified meetings in your calendar, we handle
            every stage of the lead generation process so you can focus on closing.
          </p>
          <Link
            href="/contact#book"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Book A Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white" aria-label="Our services">
        <div className="container-max">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {service.tag}
                    </div>
                    <h2
                      className="text-[#0F172A] font-black leading-tight mb-4"
                      style={{ fontSize: "clamp(1.5rem, 1.25rem + 1.5vw, 2.25rem)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-[#64748B] leading-relaxed mb-6 text-sm">
                      {service.description}
                    </p>
                    <Link
                      href="/contact#book"
                      className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg text-white transition-all duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <div
                      className="rounded-2xl p-8 border"
                      style={{
                        backgroundColor: service.bgColor,
                        borderColor: `${service.color}30`,
                      }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-5">
                        What&apos;s included
                      </p>
                      <ul className="space-y-3.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-[#1E293B] text-sm"
                          >
                            <CheckCircle
                              className="w-5 h-5 shrink-0"
                              style={{ color: service.color }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-[#F8FAFC]" aria-labelledby="process-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2
              id="process-heading"
              className="text-[#0F172A] font-black mb-3"
              style={{ fontSize: "clamp(1.5rem, 1.25rem + 2vw, 2.5rem)" }}
            >
              How we onboard you
            </h2>
            <p className="text-[#64748B] text-sm max-w-lg mx-auto">
              From first call to first qualified lead in four clear steps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div
                key={p.step}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="text-[#0F172A] font-bold mb-2">{p.title}</h3>
                <p className="text-[#64748B] text-sm">{p.desc}</p>
              </div>
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
            Not sure which service is right for you?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll diagnose your lead
            generation challenges and recommend the right solution.
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
