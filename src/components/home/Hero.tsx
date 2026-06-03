import Link from "next/link";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";

const trustIndicators = [
  "Human Verified Leads",
  "Sales Qualified Opportunities",
  "Multi-Channel Outreach",
  "Performance Reporting",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-[#0F172A] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-slate-300 text-xs font-medium tracking-wide uppercase">
              B2B Lead Generation Agency
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="animate-fade-up delay-100 text-white font-black leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.75rem, 2rem + 4vw, 5.5rem)",
            }}
          >
            Qualified Leads{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Delivered
            </span>{" "}
            <br className="hidden sm:block" />
            Directly To Your Sales Team
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up delay-200 text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.2rem)" }}
          >
            SAHR MEDIA helps SaaS and Construction companies generate, qualify,
            and convert high-intent prospects into revenue.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
            >
              Book A Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 text-base w-full sm:w-auto justify-center"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </span>
              See How It Works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up delay-400">
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-4 font-medium">
              What you get
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="animate-fade-up delay-500 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {[
            { number: "95%", label: "Lead Verification Rate" },
            { number: "24hrs", label: "Average Lead Response Time" },
            { number: "100%", label: "Custom Campaigns" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0F172A] px-8 py-6 text-center"
            >
              <div
                className="font-black text-white mb-1"
                style={{ fontSize: "clamp(1.75rem, 1.5rem + 1vw, 2.5rem)" }}
              >
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
