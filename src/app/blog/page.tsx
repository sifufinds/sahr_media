import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { NewsletterForm } from "@/components/blog/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — B2B Lead Generation Insights",
  description:
    "Expert insights on SaaS lead generation, construction marketing, appointment setting, and B2B sales development. Practical guides from SAHR MEDIA.",
};

const categories = [
  "All",
  "SaaS Lead Generation",
  "Construction Marketing",
  "Appointment Setting",
  "Sales Development",
  "Lead Qualification",
  "B2B Growth",
];

const posts = [
  {
    category: "SaaS Lead Generation",
    title: "How to Build a SaaS Outbound Machine That Books 20+ Demos Per Month",
    excerpt:
      "Most SaaS companies rely on inbound alone. Here's how to build an outbound system that consistently generates qualified product demos without burning out your SDRs.",
    readTime: "8 min read",
    date: "28 May 2026",
    slug: "saas-outbound-machine-20-demos-per-month",
    featured: true,
    color: "#2563EB",
  },
  {
    category: "Construction Marketing",
    title: "7 Ways Construction Companies Can Win More Commercial Contracts in 2026",
    excerpt:
      "The commercial construction market is competitive. These seven outreach strategies will help you reach procurement managers and property developers at the right moment.",
    readTime: "6 min read",
    date: "21 May 2026",
    slug: "construction-companies-win-commercial-contracts-2026",
    featured: true,
    color: "#10B981",
  },
  {
    category: "Lead Qualification",
    title: "BANT Is Dead — Use This Modern Lead Qualification Framework Instead",
    excerpt:
      "BANT served its purpose, but today's B2B buyers are more complex. Here's the qualification model we use to filter out time-wasters and identify genuine opportunities.",
    readTime: "7 min read",
    date: "14 May 2026",
    slug: "modern-lead-qualification-framework-beyond-bant",
    featured: false,
    color: "#F59E0B",
  },
  {
    category: "Appointment Setting",
    title: "Cold Email Sequences That Actually Get Replies in 2026",
    excerpt:
      "Spam filters are smarter. Inboxes are fuller. Here's how to write cold email sequences that stand out, get opened, and generate genuine responses.",
    readTime: "10 min read",
    date: "7 May 2026",
    slug: "cold-email-sequences-that-get-replies-2026",
    featured: false,
    color: "#8B5CF6",
  },
  {
    category: "Sales Development",
    title: "How to Write LinkedIn Connection Requests That Convert at 40%+",
    excerpt:
      "Most LinkedIn requests get ignored because they're generic. This breakdown shows you the exact message structure we use to achieve consistently high acceptance rates.",
    readTime: "5 min read",
    date: "30 Apr 2026",
    slug: "linkedin-connection-requests-that-convert",
    featured: false,
    color: "#EC4899",
  },
  {
    category: "B2B Growth",
    title: "The Hidden Cost of Unqualified Leads (And How to Stop Paying It)",
    excerpt:
      "Unqualified leads don't just waste time — they demoralize your sales team and skew your pipeline data. Here's the financial case for investing in lead qualification.",
    readTime: "9 min read",
    date: "22 Apr 2026",
    slug: "hidden-cost-of-unqualified-leads",
    featured: false,
    color: "#0EA5E9",
  },
  {
    category: "SaaS Lead Generation",
    title: "Why Your SaaS Demo-to-Close Rate Is Low (And How to Fix It)",
    excerpt:
      "A low demo-to-close rate is often a lead quality problem, not a sales problem. Here's how to diagnose the issue and plug the leak in your pipeline.",
    readTime: "7 min read",
    date: "15 Apr 2026",
    slug: "saas-demo-to-close-rate-fix",
    featured: false,
    color: "#2563EB",
  },
  {
    category: "Construction Marketing",
    title: "How to Use LinkedIn to Find Property Developers Actively Tendering",
    excerpt:
      "Property developers and procurement managers are active on LinkedIn — but you need to know where to look. This guide shows you the exact search and outreach process.",
    readTime: "6 min read",
    date: "8 Apr 2026",
    slug: "linkedin-find-property-developers-tendering",
    featured: false,
    color: "#10B981",
  },
];

const featured = posts.filter((p) => p.featured);
const remaining = posts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F172A] pt-32 pb-20 relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#10B981] uppercase mb-4">
            Insights & Guides
          </p>
          <h1
            className="text-white font-black leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 1.5rem + 3vw, 4rem)" }}
          >
            B2B Lead Generation
            <br />
            Insights & Strategies
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Practical guides on SaaS marketing, construction lead generation,
            appointment setting, and building predictable B2B pipelines.
          </p>
        </div>
      </section>

      {/* Blog content */}
      <section className="section-pad bg-white" aria-label="Blog posts">
        <div className="container-max">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12" role="navigation" aria-label="Blog categories">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  i === 0
                    ? "bg-[#0F172A] text-white"
                    : "bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A]"
                }`}
                aria-current={i === 0 ? "true" : undefined}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured posts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {featured.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] card-lift h-full flex flex-col">
                    {/* Color bar */}
                    <div
                      className="h-1.5"
                      style={{ backgroundColor: post.color }}
                    />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${post.color}15`,
                            color: post.color,
                          }}
                        >
                          {post.category}
                        </span>
                        <span className="text-[#94A3B8] text-xs">Featured</span>
                      </div>
                      <h2 className="text-[#0F172A] font-black text-lg leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#64748B] text-sm leading-relaxed flex-1 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-4 border-t border-[#F1F5F9]">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* All posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remaining.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="rounded-2xl border border-[#E2E8F0] card-lift overflow-hidden h-full flex flex-col">
                    <div
                      className="h-1"
                      style={{ backgroundColor: post.color }}
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 self-start"
                        style={{
                          backgroundColor: `${post.color}15`,
                          color: post.color,
                        }}
                      >
                        {post.category}
                      </span>
                      <h2 className="text-[#0F172A] font-bold text-base leading-snug mb-3 group-hover:text-[#2563EB] transition-colors flex-1">
                        {post.title}
                      </h2>
                      <p className="text-[#64748B] text-sm leading-relaxed mb-5 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-4 border-t border-[#F1F5F9]">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#64748B] font-medium px-8 py-3 rounded-lg transition-colors text-sm">
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-[#F8FAFC]" aria-labelledby="newsletter-heading">
        <div className="container-max">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
              Stay Updated
            </p>
            <h2
              id="newsletter-heading"
              className="text-[#0F172A] font-black mb-3"
              style={{ fontSize: "clamp(1.5rem, 1.25rem + 1.5vw, 2rem)" }}
            >
              Get lead generation insights in your inbox
            </h2>
            <p className="text-[#64748B] text-sm mb-6">
              Weekly strategies for SaaS and Construction businesses. No spam —
              just actionable insights.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
