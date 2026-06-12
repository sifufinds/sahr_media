import type { Metadata } from "next";
import { AIEngineHero } from "@/components/ai-engine/AIEngineHero";
import { SignalFeed } from "@/components/ai-engine/SignalFeed";
import { AgentPipeline } from "@/components/ai-engine/AgentPipeline";
import { LeadScoring } from "@/components/ai-engine/LeadScoring";
import { OutreachFlow } from "@/components/ai-engine/OutreachFlow";
import { EngineMetrics } from "@/components/ai-engine/EngineMetrics";
import { EngineCTA } from "@/components/ai-engine/EngineCTA";

export const metadata: Metadata = {
  title: "AI Buying Intent Engine",
  description:
    "How SAHR MEDIA's AI engine continuously monitors public signals, qualifies prospects with six specialist agents, and delivers sales-ready leads to your team.",
};

export default function AIEnginePage() {
  return (
    <>
      <AIEngineHero />
      <SignalFeed />
      <AgentPipeline />
      <LeadScoring />
      <OutreachFlow />
      <EngineMetrics />
      <EngineCTA />
    </>
  );
}
