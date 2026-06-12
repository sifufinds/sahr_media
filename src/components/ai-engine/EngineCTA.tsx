import Link from "next/link";
import { ArrowRight, Shield, Clock, BarChart2 } from "lucide-react";

const guarantees = [
  { icon: Shield, text: "Compliant with privacy regulations" },
  { icon: Clock, text: "Results within 30 days" },
  { icon: BarChart2, text: "Full-funnel reporting included" },
];

export function EngineCTA() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="engine-cta-heading">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1E40AF 0%, #1D4ED8 40%, #0F172A 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 60%)",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-4">
            Let The Engine Work For You
          </p>
          <h2
            id="engine-cta-heading"
            className="text-white font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 3.5rem)" }}
          >
            Ready to put AI-powered intent behind every lead?
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Book a free 30-minute strategy call. We&apos;ll map out a custom campaign built
            around your ICP, identify the strongest intent signals in your market, and
            show you exactly how the engine delivers pipeline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
            >
              Book A Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 text-base w-full sm:w-auto justify-center"
            >
              View All Services
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {guarantees.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-200 text-sm">
                <span className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 text-[#10B981]" />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
