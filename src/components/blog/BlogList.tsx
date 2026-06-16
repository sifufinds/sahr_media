"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogListProps {
  posts: BlogPost[];
}

const CATEGORIES = [
  "All",
  "SaaS Lead Generation",
  "Construction Marketing",
  "Appointment Setting",
  "Sales Development",
  "Lead Qualification",
  "B2B Growth",
];

const INITIAL_GRID_COUNT = 6;
const LOAD_MORE_INCREMENT = 6;

export function BlogList({ posts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_GRID_COUNT);

  const filtered =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const [heroPost, ...gridPosts] = filtered;
  const visiblePosts = gridPosts.slice(0, visibleCount);
  const hasMore = gridPosts.length > visibleCount;

  function handleSelectCategory(category: string) {
    setSelectedCategory(category);
    setVisibleCount(INITIAL_GRID_COUNT);
  }

  return (
    <>
      {/* Categories */}
      <div
        className="flex flex-wrap gap-2 mb-12"
        role="navigation"
        aria-label="Blog categories"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleSelectCategory(cat)}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              selectedCategory === cat
                ? "bg-[#0F172A] text-white"
                : "bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A]"
            }`}
            aria-current={selectedCategory === cat ? "true" : undefined}
          >
            {cat}
          </button>
        ))}
      </div>

      {!heroPost && (
        <p className="text-[#64748B] text-sm text-center py-12">
          No articles in this category yet.
        </p>
      )}

      {heroPost && (
        <>
          {/* Latest post in current filter */}
          <article className="group mb-12">
            <Link href={`/blog/${heroPost.slug}`}>
              <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] card-lift">
                <div
                  className="h-1.5"
                  style={{ backgroundColor: heroPost.color }}
                />
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

          {/* Posts grid */}
          {visiblePosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
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
          )}

          {/* Load more */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + LOAD_MORE_INCREMENT)}
                className="inline-flex items-center gap-2 border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-[#64748B] font-medium px-8 py-3 rounded-lg transition-colors text-sm"
              >
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
