import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { NewsletterForm } from "@/components/blog/NewsletterForm";
import { posts } from "@/lib/blog-data";
import { JsonLd } from "@/components/ui/JsonLd";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sahrmedia.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://sahrmedia.com/blog" },
  ],
};

export const metadata: Metadata = {
  title: "Blog — B2B Lead Generation Insights",
  description:
    "Expert insights on SaaS lead generation, construction marketing, appointment setting, and B2B sales development. Practical guides from SAHR MEDIA.",
  alternates: {
    canonical: "https://sahrmedia.com/blog",
  },
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

const [heroPost, ...remaining] = posts;

export default function BlogPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {/* Hero */}
      <section className="bg-[#0F172A] pt-24 sm:pt-32 pb-14 sm:pb-20 relative overflow-hidden">
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

          {/* Latest post */}
          <article className="group mb-12">
            <Link href={`/blog/${heroPost.slug}`}>
              <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] card-lift">
                <div className="h-1.5" style={{ backgroundColor: heroPost.color }} />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${heroPost.color}15`,
                        color: heroPost.color,
                      }}
                    >
                      {heroPost.category}
                    </span>
                    <span className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wide">
                      Latest Article
                    </span>
                  </div>
                  <h2 className="text-[#0F172A] font-black text-2xl md:text-3xl leading-snug mb-4 group-hover:text-[#2563EB] transition-colors max-w-3xl">
                    {heroPost.title}
                  </h2>
                  <p className="text-[#64748B] text-base leading-relaxed mb-6 max-w-2xl">
                    {heroPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                    <span>{heroPost.date}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {heroPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>

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
