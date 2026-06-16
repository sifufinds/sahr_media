import type { Metadata } from "next";
import { NewsletterForm } from "@/components/blog/NewsletterForm";
import { BlogList } from "@/components/blog/BlogList";
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
  title: "Blog, B2B Lead Generation Insights",
  description:
    "Expert insights on SaaS lead generation, construction marketing, appointment setting, and B2B sales development. Practical guides from SAHR MEDIA.",
  alternates: {
    canonical: "https://sahrmedia.com/blog",
  },
};

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
          <BlogList posts={posts} />
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
              Weekly strategies for SaaS and Construction businesses. No spam,
              just actionable insights.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
