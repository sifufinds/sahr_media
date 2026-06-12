/**
 * Content generation script powered by Firecrawl.
 *
 * Usage:
 *   npx tsx scripts/generate-content.ts
 *
 * Crawls the configured source URLs, extracts article content, and writes
 * new blog post entries to stdout as TypeScript that can be pasted into
 * src/lib/blog-data.ts.
 *
 * Required env var: FIRECRAWL_API_KEY
 */

import FirecrawlApp from "@mendable/firecrawl-js";
import * as fs from "fs";
import * as path from "path";

const apiKey = process.env.FIRECRAWL_API_KEY;
if (!apiKey) {
  console.error("Error: FIRECRAWL_API_KEY environment variable is not set.");
  console.error("Add it to .env.local or export it before running.");
  process.exit(1);
}

const app = new FirecrawlApp({ apiKey });

// --- Configuration ---------------------------------------------------------
// Add any URLs you want to research for blog content inspiration.
// Firecrawl returns clean markdown; the content is used as research material
// to produce original Sahr Media blog posts.
const SOURCE_URLS: string[] = [
  "https://blog.hubspot.com/sales/cold-email-tips",
  "https://www.saleshacker.com/outbound-sales-strategies/",
];

const BLOG_DATA_PATH = path.resolve(
  __dirname,
  "../src/lib/blog-data.ts"
);

interface ScrapedSource {
  url: string;
  markdown: string;
}

// ---------------------------------------------------------------------------

async function scrapeUrl(url: string): Promise<ScrapedSource | null> {
  console.error(`Scraping: ${url}`);
  try {
    const result = await app.scrapeUrl(url, {
      formats: ["markdown"],
    });

    const markdown = (result as Record<string, unknown>).markdown;
    if (typeof markdown !== "string" || !markdown) {
      console.error(`  No markdown returned for ${url}`);
      return null;
    }

    return { url, markdown };
  } catch (err) {
    console.error(`  Error scraping ${url}:`, err);
    return null;
  }
}

async function scrapeAll(urls: string[]): Promise<ScrapedSource[]> {
  const results = await Promise.all(urls.map(scrapeUrl));
  return results.filter((r): r is ScrapedSource => r !== null);
}

function summariseForLog(sources: ScrapedSource[]): void {
  console.error("\n--- Scraped sources ---");
  for (const s of sources) {
    const wordCount = s.markdown.split(/\s+/).length;
    console.error(`  ${s.url} (${wordCount} words)`);
  }
  console.error("-----------------------\n");
}

async function main(): Promise<void> {
  const sources = await scrapeAll(SOURCE_URLS);
  summariseForLog(sources);

  if (sources.length === 0) {
    console.error("No sources scraped. Check your URLs and API key.");
    process.exit(1);
  }

  // Print the raw markdown for each source to stdout so you can review it
  // and use it as research material when writing new blog posts.
  for (const source of sources) {
    console.log(`\n${"=".repeat(80)}`);
    console.log(`SOURCE: ${source.url}`);
    console.log("=".repeat(80));
    console.log(source.markdown.slice(0, 4000));
    if (source.markdown.length > 4000) {
      console.log(`\n... (truncated, total ${source.markdown.length} chars)`);
    }
  }

  console.error("\nDone. Use the content above as research for new blog posts.");
  console.error(
    "Add new posts manually to src/lib/blog-data.ts following the existing format."
  );
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
