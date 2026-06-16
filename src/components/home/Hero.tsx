import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recentDeliveries = [
  {
    company: "CloudSync SaaS",
    role: "VP of Sales",
    status: "Demo Booked",
    statusColor: "#10B981",
    initials: "CS",
  },
  {
    company: "Mitchell Group",
    role: "Managing Director",
    status: "Proposal Sent",
    statusColor: "#2563EB",
    initials: "MG",
  },
  {
    company: "Taskflow Pro",
    role: "Head of Growth",
    status: "Qualified",
    statusColor: "#D4963A",
    initials: "TP",
  },
  {
    company: "BrickWise UK",
    role: "Procurement Lead",
    status: "Outreach",
    statusColor: "#6B7A94",
    initials: "BW",
  },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-[#0C1220] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />

      {/* Single bottom-right ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 90%, rgba(37,99,235,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10 pt-28 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-16 items-center">

          {/* Left: Editorial headline */}
          <div>
            <p className="text-[#2563EB] text-sm font-medium tracking-wide mb-7 animate-fade-up">
              B2B Lead Generation Agency
            </p>

            <h1
              id="hero-heading"
              className="font-display text-white leading-[1.08] mb-7 animate-fade-up delay-100"
              style={{ fontSize: "clamp(3rem, 2.2rem + 4vw, 5.75rem)" }}
            >
              Qualified Leads,{" "}
              <em className="italic text-slate-400 font-normal">
                Delivered.
              </em>
            </h1>

            <p
              className="text-slate-400 leading-relaxed max-w-lg mb-10 animate-fade-up delay-200"
              style={{ fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.125rem)" }}
            >
              SAHR MEDIA helps SaaS and Construction companies generate, qualify,
              and convert high-intent prospects into revenue, without the noise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
              <Link
                href="/contact#book"
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 text-sm"
              >
                Book A Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust row, plain text, no pill badges */}
            <div className="animate-fade-up delay-400 flex flex-wrap gap-x-7 gap-y-2">
              {[
                "95% lead verification rate",
                "1-14 day delivery",
                "No lock-in contracts",
              ].map((item) => (
                <span key={item} className="text-slate-500 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Recent Deliveries dashboard card */}
          <div className="hidden lg:block animate-fade-up delay-300">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm">
              {/* Card header */}
              <div className="px-6 py-5 border-b border-white/[0.07] flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">Recent Deliveries</p>
                  <p className="text-slate-500 text-xs mt-0.5">Active campaign · UK market</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] live-pulse" />
                  <span className="text-[#10B981] text-xs font-medium">Live</span>
                </div>
              </div>

              {/* Lead rows */}
              <div className="px-6 divide-y divide-white/[0.05]">
                {recentDeliveries.map((lead) => (
                  <div key={lead.company} className="py-4 flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      {lead.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        {lead.company}
                      </p>
                      <p className="text-slate-500 text-xs truncate">{lead.role}</p>
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                      style={{
                        backgroundColor: `${lead.statusColor}18`,
                        color: lead.statusColor,
                      }}
                    >
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="px-6 py-4 border-t border-white/[0.07] flex items-center justify-between">
                <p className="text-slate-600 text-xs">Updated 2 hours ago</p>
                <Link
                  href="/contact#book"
                  className="text-[#2563EB] text-xs font-semibold hover:text-blue-400 transition-colors"
                >
                  Start your campaign →
                </Link>
              </div>
            </div>

            {/* Below the card: three stats in a row */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { number: "95%", label: "Verified" },
                { number: "14d", label: "Delivery window" },
                { number: "3×", label: "Pipeline lift" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-4 text-center"
                >
                  <div className="text-white font-bold text-xl font-display">{s.number}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
