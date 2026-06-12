"use client";

import { motion } from "framer-motion";
import { Mail, BookOpen, Lightbulb, Phone, CheckCircle2 } from "lucide-react";

const emails = [
  {
    step: "01",
    icon: Mail,
    subject: "Introduction & Value Proposition",
    day: "Day 1",
    preview:
      "Hi [First Name], I noticed [Company] is [intent signal] — that's exactly the moment we help companies like yours convert more qualified pipeline...",
    detail:
      "Personalised intro referencing the detected buying signal. Establishes relevance on the first touch.",
    color: "#2563EB",
  },
  {
    step: "02",
    icon: BookOpen,
    subject: "Industry Case Study",
    day: "Day 3",
    preview:
      "A quick win from a [industry] company similar to [Company] — [outcome in one sentence]...",
    detail:
      "A relevant case study from the same vertical showing measurable outcomes that resonate with their goals.",
    color: "#10B981",
  },
  {
    step: "03",
    icon: Lightbulb,
    subject: "Relevant Business Insight",
    day: "Day 7",
    preview:
      "One thing we keep seeing in [industry] right now that might be worth a 5-minute conversation...",
    detail:
      "A timely trend or insight relevant to their sector — positions us as a knowledgeable, helpful partner.",
    color: "#F59E0B",
  },
  {
    step: "04",
    icon: Phone,
    subject: "Offer a Strategy Call",
    day: "Day 12",
    preview:
      "Would 20 minutes be worth it to show you exactly how we'd approach [Company's] pipeline goals?",
    detail:
      "A direct, low-friction ask for a discovery call. No pressure — just clarity on fit and next steps.",
    color: "#8B5CF6",
  },
  {
    step: "05",
    icon: CheckCircle2,
    subject: "Final Follow-Up",
    day: "Day 18",
    preview:
      "This will be my last message for now, [First Name] — if the timing isn't right, I completely understand...",
    detail:
      "A graceful close that respects their time. Consistently produces the highest reply rate of the sequence.",
    color: "#06B6D4",
  },
];

export function OutreachFlow() {
  return (
    <section
      id="outreach-sequence"
      className="section-pad bg-[#0F172A] relative overflow-hidden"
      aria-labelledby="outreach-heading"
    >
      <div className="dot-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#8B5CF6] uppercase mb-3">
            Step 4
          </p>
          <h2
            id="outreach-heading"
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Automated 5-Touch Outreach Sequence
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Every hot and warm lead enters a crafted, personalised email sequence. Each message
            references the specific buying signal that triggered their qualification.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connector */}
          <div
            className="absolute left-5 top-6 bottom-6 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(37,99,235,0.3), rgba(6,182,212,0.3))",
            }}
            aria-hidden="true"
          />

          <div className="space-y-5">
            {emails.map((email, i) => {
              const Icon = email.icon;
              return (
                <motion.div
                  key={email.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-5"
                >
                  {/* Step indicator */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 bg-[#0F172A]"
                      style={{ borderColor: email.color }}
                    >
                      <Icon className="w-4 h-4" style={{ color: email.color }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 mb-1 hover:bg-white/[0.07] hover:border-white/[0.18] transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: email.color }}
                      >
                        Email {email.step}
                      </span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-slate-500 text-xs">{email.day}</span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-slate-300 text-xs font-medium">{email.subject}</span>
                    </div>

                    <div
                      className="rounded-lg px-4 py-3 mb-3 text-xs leading-relaxed font-mono"
                      style={{
                        backgroundColor: `${email.color}10`,
                        color: `${email.color}C0`,
                        borderLeft: `2px solid ${email.color}40`,
                      }}
                    >
                      &ldquo;{email.preview}&rdquo;
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed">{email.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
