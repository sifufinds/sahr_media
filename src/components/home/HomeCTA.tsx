"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function HomeCTA() {
  return (
    <section
      className="section-pad bg-[#F7F5F2]"
      aria-labelledby="home-cta-heading"
    >
      <div className="container-max">
        <motion.div
          className="grid lg:grid-cols-[1fr_auto] gap-10 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
        >
          <div>
            <h2
              id="home-cta-heading"
              className="font-display font-bold text-[#0C1220] leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 3.5rem)" }}
            >
              Ready to fill your
              <br />
              <em className="italic font-normal text-[#6B7A94]">sales pipeline?</em>
            </h2>
            <p className="text-[#6B7A94] text-sm leading-relaxed max-w-md">
              Book a free 30-minute strategy call. We&apos;ll map out a custom lead
              generation plan built around your ideal customer profile and revenue
              targets.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 items-center text-sm text-[#6B7A94]">
              {["No long-term contracts", "Results in 30 days", "Cancel anytime"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
            <Link
              href="/contact#book"
              className="inline-flex items-center justify-center gap-2 bg-[#0C1220] hover:bg-[#1E293B] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-black/10 hover:-translate-y-0.5 text-sm"
            >
              Book A Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#C7C3BC] hover:border-[#0C1220] text-[#0C1220] font-medium px-7 py-4 rounded-xl transition-all duration-200 text-sm"
            >
              Send An Enquiry
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
