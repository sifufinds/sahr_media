import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts, posts } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | SAHR MEDIA Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0F172A] pt-32 pb-16 relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${post.color}18 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
        <div className="container-max relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{
                backgroundColor: `${post.color}20`,
                color: post.color,
              }}
            >
              {post.category}
            </span>
            <h1
              className="text-white font-black leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 1.5rem + 2.5vw, 3rem)" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-sm text-slate-400">
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>SAHR MEDIA Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
            {/* Article content */}
            <article className="max-w-none">
              {/* Lead paragraph */}
              <p
                className="text-[#1E293B] text-lg leading-relaxed mb-8 font-medium border-l-4 pl-6"
                style={{ borderColor: post.color }}
              >
                {post.excerpt}
              </p>

              {/* Content blocks */}
              <div className="space-y-6">
                {post.content.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        className="text-[#0F172A] font-black text-xl mt-10 mb-3 first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "paragraph") {
                    return (
                      <p key={i} className="text-[#374151] text-base leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <div key={i}>
                        {block.heading && (
                          <p className="text-[#0F172A] font-semibold text-sm mb-3">
                            {block.heading}
                          </p>
                        )}
                        <ul className="space-y-2.5">
                          {block.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-[#374151] text-base"
                            >
                              <span
                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold"
                                style={{ backgroundColor: post.color }}
                              >
                                {j + 1}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  if (block.type === "callout") {
                    return (
                      <blockquote
                        key={i}
                        className="rounded-xl p-6 my-8"
                        style={{ backgroundColor: `${post.color}0D`, borderLeft: `4px solid ${post.color}` }}
                      >
                        <p
                          className="text-base leading-relaxed font-medium italic"
                          style={{ color: post.color }}
                        >
                          {block.text}
                        </p>
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Article CTA */}
              <div className="mt-14 p-8 bg-[#0F172A] rounded-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-2">
                  Ready to act on this?
                </p>
                <h3 className="text-white font-black text-xl mb-3">
                  Let SAHR MEDIA build this for your business
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We specialise in SaaS and Construction lead generation — and we
                  handle everything from ICP research to qualified meetings in your
                  calendar. Book a free strategy call to get started.
                </p>
                <Link
                  href="/contact#book"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
                >
                  Book A Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block sticky top-28">
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">
                  Related Articles
                </p>
                <ul className="space-y-4">
                  {related.map((rp) => (
                    <li key={rp.slug}>
                      <Link
                        href={`/blog/${rp.slug}`}
                        className="group flex flex-col gap-1"
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-wide"
                          style={{ color: rp.color }}
                        >
                          {rp.category}
                        </span>
                        <span className="text-[#1E293B] text-sm font-medium leading-snug group-hover:text-[#2563EB] transition-colors">
                          {rp.title}
                        </span>
                        <span className="text-[#94A3B8] text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {rp.readTime}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0F172A] rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-2">
                  Free Strategy Call
                </p>
                <p className="text-white font-bold text-base mb-3">
                  Talk to a lead generation specialist
                </p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  30 minutes. No pitch. Just an honest conversation about your
                  pipeline.
                </p>
                <Link
                  href="/contact#book"
                  className="block text-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 text-sm"
                >
                  Book Now →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="section-pad bg-[#F8FAFC]" aria-label="More articles">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#0F172A] font-black text-xl">More articles</h2>
            <Link
              href="/blog"
              className="text-[#2563EB] hover:text-[#1D4ED8] text-sm font-semibold flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rp) => (
              <article key={rp.slug} className="group">
                <Link href={`/blog/${rp.slug}`}>
                  <div className="bg-white rounded-2xl border border-[#E2E8F0] card-lift overflow-hidden h-full flex flex-col">
                    <div className="h-1" style={{ backgroundColor: rp.color }} />
                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 self-start"
                        style={{
                          backgroundColor: `${rp.color}15`,
                          color: rp.color,
                        }}
                      >
                        {rp.category}
                      </span>
                      <h3 className="text-[#0F172A] font-bold text-base leading-snug mb-3 group-hover:text-[#2563EB] transition-colors flex-1">
                        {rp.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-4 border-t border-[#F1F5F9]">
                        <span>{rp.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {rp.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
