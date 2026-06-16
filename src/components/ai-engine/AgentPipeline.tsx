"use client";

import { motion } from "framer-motion";
import { Search, Database, CheckSquare, Send, RefreshCw, BarChart2 } from "lucide-react";

const agents = [
  {
    id: "intent",
    icon: Search,
    name: "Intent Detection Agent",
    objective: "Continuously monitor public sources for buying signals",
    tasks: [
      "Hiring SDRs or sales teams",
      "CRM implementation projects",
      "Funding announcements",
      "New construction projects",
      "Technology procurement notices",
    ],
    color: "#2563EB",
  },
  {
    id: "enrichment",
    icon: Database,
    name: "Lead Enrichment Agent",
    objective: "Build complete company and decision-maker profiles",
    tasks: [
      "Company name, website & industry",
      "Revenue range & headcount",
      "Decision-maker identification",
      "Email address verification",
    ],
    color: "#10B981",
  },
  {
    id: "qualification",
    icon: CheckSquare,
    name: "Qualification Agent",
    objective: "Score every prospect against your ICP criteria",
    tasks: [
      "Active company growth signals",
      "Budget likelihood assessment",
      "Decision-maker confirmation",
      "Industry & geographic match",
    ],
    color: "#F59E0B",
  },
  {
    id: "outreach",
    icon: Send,
    name: "Outreach Agent",
    objective: "Generate personalised multi-touch campaigns",
    tasks: [
      "Analyse company intent signals",
      "Write custom personalised email",
      "Reference specific business challenge",
      "Schedule follow-up sequence",
    ],
    color: "#8B5CF6",
  },
  {
    id: "crm",
    icon: RefreshCw,
    name: "CRM Agent",
    objective: "Sync all lead data with your existing CRM in real time",
    tasks: [
      "Store enriched lead profiles",
      "Track engagement status",
      "Schedule follow-up reminders",
      "Sync with HubSpot & Salesforce",
    ],
    color: "#06B6D4",
  },
  {
    id: "reporting",
    icon: BarChart2,
    name: "Reporting Agent",
    objective: "Track every metric from signal to closed revenue",
    tasks: [
      "Leads identified & qualified",
      "Email open & reply rates",
      "Meetings booked",
      "Pipeline & revenue generated",
    ],
    color: "#EC4899",
  },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: easeOutExpo,
    },
  }),
};

export function AgentPipeline() {
  return (
    <section
      id="agent-pipeline"
      className="section-pad bg-[#0F172A] relative overflow-hidden"
      aria-labelledby="pipeline-heading"
    >
      <div className="dot-pattern absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-3">
            Steps 2 – 7
          </p>
          <h2
            id="pipeline-heading"
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 2vw, 3rem)" }}
          >
            Six Agents. One Seamless Pipeline.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Each agent handles a distinct stage of the intelligence pipeline, working in
            parallel to turn raw public signals into qualified, sales-ready opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-300 card-lift overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${agent.color}14 0%, transparent 70%)`,
                    filter: "blur(24px)",
                    transform: "translate(30%, -30%)",
                  }}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between mb-5 relative">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${agent.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: agent.color }} />
                  </div>
                  <span
                    className="w-2 h-2 rounded-full mt-2.5 animate-pulse shrink-0"
                    style={{ backgroundColor: agent.color }}
                  />
                </div>

                <h3 className="text-white font-bold text-base mb-1.5 relative">{agent.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 relative">
                  {agent.objective}
                </p>

                <ul className="space-y-2 relative">
                  {agent.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-slate-400 text-xs">
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: agent.color }}
                      />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
