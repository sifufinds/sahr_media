"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-[#10B981] text-sm font-medium">
        ✓ You&apos;re subscribed! Check your inbox.
      </p>
    );
  }

  return (
    <form
      className="flex gap-2 max-w-sm mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
