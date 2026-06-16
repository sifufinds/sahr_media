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
