import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://sahrmedia.com";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/services`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/case-studies`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/ai-engine`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

const blogSlugs = [
  "b2b-information-request-cold-outreach",
  "b2b-buyer-intent-data-outbound-timing",
  "b2b-stalled-deals-silent-prospect-recovery",
  "construction-subcontractor-new-business-pipeline",
  "construction-outbound-sequencing-b2b-cadence",
  "b2b-sales-proposal-structure-close-deals",
  "b2b-voicemail-strategy-cold-calling",
  "competitive-displacement-b2b-outbound",
  "b2b-account-tiering-outbound-prioritisation",
  "b2b-pipeline-coverage-ratio-sales-forecasting",
  "linkedin-social-selling-b2b-outbound-pipeline",
  "video-prospecting-b2b-outreach",
  "win-loss-analysis-b2b-outbound",
  "pre-call-research-b2b-discovery-call",
  "b2b-stakeholder-mapping-buying-committee",
  "appointment-setting-warm-response-to-booked-meeting",
  "b2b-pricing-conversations-defend-discount",
  "building-internal-champion-b2b-sales",
  "cold-outreach-personalisation-at-scale",
  "b2b-prospecting-list-building",
  "sdr-performance-metrics-what-to-track",
  "b2b-ideal-customer-profile-icp-definition",
  "account-based-sales-development-absd-target-accounts",
  "b2b-referral-engine-client-introductions",
  "post-proposal-follow-up-b2b",
  "b2b-cold-calling-opening-framework",
  "b2b-outreach-cadence-design",
  "re-engaging-dormant-leads-cold-prospects",
  "b2b-cold-outreach-objection-handling",
  "sdr-to-ae-handoff-qualified-leads",
  "multi-threading-b2b-accounts-avoid-single-threaded-deals",
  "b2b-sales-pipeline-velocity-fix",
  "discovery-call-framework-qualify-and-advance",
  "trigger-based-prospecting-buying-signals-cold-outreach",
  "cold-email-deliverability-technical-fixes",
  "construction-bid-no-bid-tender-qualification-framework",
  "saas-outbound-machine-20-demos-per-month",
  "construction-companies-win-commercial-contracts-2026",
  "modern-lead-qualification-framework-beyond-bant",
  "cold-email-sequences-that-get-replies-2026",
  "linkedin-connection-requests-that-convert",
  "hidden-cost-of-unqualified-leads",
  "saas-demo-to-close-rate-fix",
  "linkedin-find-property-developers-tendering",
  "ai-prospecting-b2b-sales-2026",
  "why-b2b-buyers-think-reps-are-underprepared",
  "construction-contractor-digital-presence-wins-tenders",
];

const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
  url: `${BASE_URL}/blog/${slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...blogRoutes];
}
