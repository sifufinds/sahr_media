"use client";

import { Flame, TrendingUp, Snowflake, Trophy, XCircle, BarChart3, Loader2 } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { PipelineChart } from "@/components/dashboard/PipelineChart";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { useClientAuth } from "@/lib/client-auth";
import { useClientSettings } from "@/lib/client-settings";
import { useLeads } from "@/hooks/useLeads";

function greet(name: string) {
  const hour = new Date().getHours();
  if (hour < 12) return `Good morning, ${name.split(" ")[0]}`;
  if (hour < 18) return `Good afternoon, ${name.split(" ")[0]}`;
  return `Good evening, ${name.split(" ")[0]}`;
}

export default function ClientDashboardPage() {
  const { user } = useClientAuth();
  const { branding } = useClientSettings();
  const { leads, isLoading } = useLeads();

  const hot = leads.filter((l) => l.status === "hot").length;
  const warm = leads.filter((l) => l.status === "warm").length;
  const cold = leads.filter((l) => l.status === "cold").length;
  const won = leads.filter((l) => l.status === "won" || l.status === "closed_won").length;
  const lost = leads.filter((l) => l.status === "closed_lost").length;
  const total = leads.length;

  const wonRevenue = leads
    .filter((l) => l.status === "won" || l.status === "closed_won")
    .reduce((sum, l) => sum + l.dealValue, 0);

  const conversionRate = total > 0 ? Math.round((won / total) * 100) : 0;

  const displayName = branding.businessName || user?.company || "";

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-[#2563EB] animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader
        title={user ? greet(user.name) : "Dashboard"}
        subtitle={`${total} total leads · ${conversionRate}% conversion rate`}
      />

      <main className="flex-1 px-6 py-6 space-y-6">
        {/* Company badge */}
        {displayName && (
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: branding.accentColor || "#2563EB" }}
              aria-hidden="true"
            />
            {displayName}
          </div>
        )}

        {/* KPI Grid */}
        <section aria-label="Key performance indicators">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <MetricCard
              label="Total Leads"
              value={total}
              change="+12%"
              changePositive
              icon={BarChart3}
              accentColor="#2563EB"
              bgColor="bg-blue-500/10"
              iconColor="text-blue-400"
            />
            <MetricCard
              label="Hot Leads"
              value={hot}
              change="+3"
              changePositive
              icon={Flame}
              accentColor="#EF4444"
              bgColor="bg-red-500/10"
              iconColor="text-red-400"
            />
            <MetricCard
              label="Warm Leads"
              value={warm}
              icon={TrendingUp}
              accentColor="#F59E0B"
              bgColor="bg-amber-500/10"
              iconColor="text-amber-400"
            />
            <MetricCard
              label="Cold Leads"
              value={cold}
              icon={Snowflake}
              accentColor="#3B82F6"
              bgColor="bg-sky-500/10"
              iconColor="text-sky-400"
            />
            <MetricCard
              label="Won"
              value={won}
              change="+1"
              changePositive
              icon={Trophy}
              accentColor="#10B981"
              bgColor="bg-emerald-500/10"
              iconColor="text-emerald-400"
            />
            <MetricCard
              label="Closed Lost"
              value={lost}
              icon={XCircle}
              accentColor="#64748B"
              bgColor="bg-slate-500/10"
              iconColor="text-slate-400"
            />
          </div>
        </section>

        {/* Revenue callout */}
        <section aria-label="Revenue summary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#2563EB]/15 to-[#10B981]/10 border border-[#2563EB]/20 rounded-2xl p-5">
              <p className="text-xs text-slate-400 font-medium mb-1">Total Won Revenue</p>
              <p className="text-3xl font-black text-white">
                ${wonRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-emerald-400 mt-1">
                Across {won} closed deals
              </p>
            </div>

            <div className="bg-[#0D1526] border border-white/6 rounded-2xl p-5">
              <p className="text-xs text-slate-400 font-medium mb-1">Avg. Deal Value (Won)</p>
              <p className="text-3xl font-black text-white">
                ${won > 0 ? Math.round(wonRevenue / won).toLocaleString() : 0}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {conversionRate}% lead-to-close rate
              </p>
            </div>
          </div>
        </section>

        {/* Chart + Recent leads */}
        <section className="grid grid-cols-1 xl:grid-cols-5 gap-4" aria-label="Pipeline activity">
          <div className="xl:col-span-3">
            <PipelineChart leads={leads} />
          </div>
          <div className="xl:col-span-2">
            <RecentLeads leads={leads} />
          </div>
        </section>
      </main>
    </div>
  );
}
