"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, FileText, Building2, TrendingUp, Globe, Database, ArrowUpRight } from "lucide-react";

const sources = [
  { icon: Briefcase, label: "Job Boards", detail: "LinkedIn, Indeed, Glassdoor", color: "#2563EB" },
  { icon: FileText, label: "Press Releases", detail: "PR Newswire, Business Wire", color: "#10B981" },
  { icon: Building2, label: "Procurement Portals", detail: "Contracts Finder, Proactis", color: "#F59E0B" },
  { icon: Globe, label: "Industry News", detail: "Trade publications, RSS feeds", color: "#8B5CF6" },
  { icon: TrendingUp, label: "Tender Platforms", detail: "CompeteFor, Supply2Gov", color: "#EC4899" },
  { icon: Database, label: "Business Databases", detail: "Companies House, D&B", color: "#06B6D4" },
];

const allSignals = [
  { company: "TechFlow Solutions", signal: "Hiring 3 SDRs & Sales Manager", scoreBoost: "+15pts", color: "#2563EB", age: "2m ago", type: "Job Board" },
  { company: "BuildCore Group", signal: "New commercial project announced £12M", scoreBoost: "+22pts", color: "#10B981", age: "4m ago", type: "Industry News" },
  { company: "CloudBase SaaS", signal: "CRM migration project open to tender", scoreBoost: "+18pts", color: "#F59E0B", age: "7m ago", type: "Procurement" },
  { company: "Meridian Contracts", signal: "£5M Series A funding closed", scoreBoost: "+30pts", color: "#8B5CF6", age: "11m ago", type: "Press Release" },
  { company: "DataVault Inc", signal: "Hiring Head of Marketing & Growth", scoreBoost: "+12pts", color: "#EC4899", age: "14m ago", type: "Job Board" },
  { company: "Atlas Developments", signal: "New London HQ opening Q2", scoreBoost: "+20pts", color: "#06B6D4", age: "18m ago", type: "Press Release" },
  { company: "Nexus Software", signal: "Website redesign RFP published", scoreBoost: "+8pts", color: "#2563EB", age: "22m ago", type: "Tender" },
  { company: "Summit Build Ltd", signal: "Tender submission — Manchester regeneration", scoreBoost: "+25pts", color: "#10B981", age: "25m ago", type: "Tender" },
];

export function SignalFeed() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2800);
    return () => clearInterval(id);
  }, []);

  const displayed = Array.from({ length: 4 }, (_, i) => allSignals[(tick + i) % allSignals.length]);

  return (
    <section
      id="signal-detection"
      className="section-pad bg-[#080E1A] relative overflow-hidden"
      aria-labelledby="signal-feed-heading"
    >
      <div className="dot-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            Step 1
          </p>
          <h2
            id="signal-feed-heading"
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Buying Signals Detected At Scale
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            The engine scans public data sources for companies showing active purchasing behaviour.
            No individual tracking. No private data. Only publicly available signals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sources panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Public sources monitored
            </p>
            <div className="space-y-2.5">
              {sources.map((source, i) => {
                const Icon = source.icon;
                return (
                  <motion.div
                    key={source.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${source.color}20` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: source.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm">{source.label}</div>
                      <div className="text-slate-500 text-xs truncate">{source.detail}</div>
                    </div>
                    <span
                      className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                      style={{ backgroundColor: source.color }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Live signal feed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Live signal feed
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>
                <span className="text-[#10B981] text-xs font-medium">Live</span>
              </div>
            </div>

            <div className="bg-[#0A1120] border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/50" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <span className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-slate-600 text-xs ml-2 font-mono">intent_detector.log</span>
              </div>

              <div className="p-4 space-y-2.5 min-h-[296px]">
                <AnimatePresence mode="popLayout">
                  {displayed.map((signal, i) => (
                    <motion.div
                      key={`${signal.company}-${tick + i}`}
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: signal.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <span className="text-white font-semibold text-sm">{signal.company}</span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                            style={{
                              backgroundColor: `${signal.color}20`,
                              color: signal.color,
                            }}
                          >
                            {signal.type}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">{signal.signal}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[#10B981] text-xs font-bold font-mono">
                          {signal.scoreBoost}
                        </div>
                        <div className="text-slate-600 text-xs">{signal.age}</div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-slate-600 text-xs font-mono">
                  scanning 6 sources · updating every 30s
                </span>
                <span className="text-[#2563EB] text-xs font-medium flex items-center gap-1 cursor-default">
                  View all signals <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
