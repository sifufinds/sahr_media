"use client";

import { Bell, Search } from "lucide-react";
import { useClientAuth } from "@/lib/client-auth";
import { useClientSettings } from "@/lib/client-settings";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  const { user } = useClientAuth();
  const { branding } = useClientSettings();

  const displayName = branding.businessName || user?.company || "";

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/6 bg-[#0A1120]/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="lg:ml-0 ml-12">
        <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-0.5">
            {displayName ? `${displayName} · ` : ""}
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-600" />
          <input
            type="search"
            placeholder="Search leads…"
            aria-label="Search leads"
            className="bg-white/5 border border-white/8 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2563EB]/40 focus:ring-1 focus:ring-[#2563EB]/20 transition-colors w-52"
          />
        </div>

        <button
          className="relative p-2.5 bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl text-slate-400 hover:text-white transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#2563EB] rounded-full" aria-hidden="true" />
        </button>

        <div className="w-8 h-8 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
          <span className="text-xs font-bold text-[#2563EB]">
            {user?.name?.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "?"}
          </span>
        </div>
      </div>
    </header>
  );
}
