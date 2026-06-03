import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

export function HomeCTA() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="home-cta-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1E40AF 0%, #1D4ED8 40%, #0F172A 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 60%)",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-4">
            Get Started Today
          </p>
          <h2
            id="home-cta-heading"
            className="text-white font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 3.5rem)" }}
          >
            Ready to fill your sales pipeline?
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Book a free 30-minute strategy call. We&apos;ll map out a custom lead
            generation plan built around your ideal customer profile and revenue
            targets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              Book A Free Strategy Call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 text-base w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              Send An Enquiry
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "No long-term contracts",
              "Results in 30 days",
              "Cancel anytime",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-blue-200 text-sm"
              >
                <span className="w-4 h-4 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
