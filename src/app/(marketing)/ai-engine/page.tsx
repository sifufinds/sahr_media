import type { Metadata } from "next";
import { AIEngineHero } from "@/components/ai-engine/AIEngineHero";
import { SignalFeed } from "@/components/ai-engine/SignalFeed";
import { AgentPipeline } from "@/components/ai-engine/AgentPipeline";
import { LeadScoring } from "@/components/ai-engine/LeadScoring";
import { OutreachFlow } from "@/components/ai-engine/OutreachFlow";
import { EngineMetrics } from "@/components/ai-engine/EngineMetrics";
import { EngineCTA } from "@/components/ai-engine/EngineCTA";
import { JsonLd } from "@/components/ui/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sahrmedia.com" },
    { "@type": "ListItem", position: 2, name: "AI Buying Intent Engine", item: "https://sahrmedia.com/ai-engine" },
  ],
};

export const metadata: Metadata = {
  title: "AI Buying Intent Engine, How We Find Sales-Ready Leads",
  description:
    "How SAHR MEDIA's AI engine continuously monitors public signals, qualifies prospects with six specialist agents, and delivers sales-ready leads to your team.",
  alternates: {
    canonical: "https://sahrmedia.com/ai-engine",
  },
};

export default function AIEnginePage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
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
