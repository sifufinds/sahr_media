"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Loader2 } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { type LeadStatus, STATUS_LABELS, STATUS_COLORS } from "@/lib/types";
import { useLeads } from "@/hooks/useLeads";
import { cn } from "@/lib/utils";

type FilterTab = "all" | LeadStatus;

const FILTER_TABS: { value: FilterTab; label: string }[] = [
  { value: "all", label: "All" },
  { value: "hot", label: "Hot" },
  { value: "warm", label: "Warm" },
  { value: "cold", label: "Cold" },
  { value: "won", label: "Won" },
  { value: "closed_lost", label: "Closed Lost" },
];

const SCORE_COLOR = (score: number) => {
  if (score >= 80) return "text-emerald-400";
  if (score >= 50) return "text-amber-400";
  return "text-slate-500";
};

export default function LeadsPage() {
  const { leads, isLoading } = useLeads();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [search, setSearch] = useState("");

  const filtered = leads.filter((lead) => {
    const matchesFilter =
      activeFilter === "all" || lead.status === activeFilter;

    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      lead.firstName.toLowerCase().includes(q) ||
      lead.lastName.toLowerCase().includes(q) ||
      lead.company.toLowerCase().includes(q) ||
      lead.industry.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q);

    return matchesFilter && matchesSearch;
  });

  const countFor = (val: FilterTab) =>
    val === "all" ? leads.length : leads.filter((l) => l.status === val).length;

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
        title="Leads"
        subtitle={`${filtered.length} leads shown`}
      />

      <main className="flex-1 px-6 py-6">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
            <input
              type="search"
              placeholder="Search by name, company…"
              aria-label="Search leads"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0D1526] border border-white/8 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2563EB]/40 focus:ring-1 focus:ring-[#2563EB]/20 transition-colors"
            />
          </div>

          <button
            className="flex items-center gap-2 px-3.5 py-2.5 bg-[#0D1526] border border-white/8 rounded-xl text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors"
            aria-label="Filter options"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Filter tabs */}
        <div
          className="flex items-center gap-1 mb-5 overflow-x-auto pb-1 scrollbar-none"
          role="tablist"
          aria-label="Lead status filter"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              role="tab"
              aria-selected={activeFilter === tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150",
                activeFilter === tab.value
                  ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/6"
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "text-xs px-1.5 py-0 rounded-full font-mono",
                  activeFilter === tab.value
                    ? "bg-white/20 text-white"
                    : "bg-white/6 text-slate-500"
                )}
              >
                {countFor(tab.value)}
              </span>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-[#0D1526] border border-white/6 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" role="table" aria-label="Leads table">
              <thead>
                <tr className="border-b border-white/6">
                  <th
                    scope="col"
                    className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3.5"
                  >
                    Lead
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-4 py-3.5 hidden md:table-cell"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-4 py-3.5 hidden lg:table-cell"
                  >
                    Industry
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-4 py-3.5"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-4 py-3.5 hidden sm:table-cell"
                  >
                    Source
                  </th>
                  <th
                    scope="col"
                    className="text-right text-xs font-medium text-slate-500 uppercase tracking-wide px-4 py-3.5"
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    className="text-right text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3.5 hidden xl:table-cell"
                  >
                    Deal Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/4">
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center text-slate-500 py-12 text-sm">
                      No leads match your current filters.
                    </td>
                  </tr>
                )}
                {filtered.map((lead) => {
                  const sc = STATUS_COLORS[lead.status];
                  return (
                    <tr
                      key={lead.id}
                      className="hover:bg-white/2 transition-colors group"
                    >
                      {/* Lead name */}
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#1E293B] border border-white/8 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-slate-300">
                              {lead.firstName[0]}{lead.lastName[0]}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-white">
                              {lead.firstName} {lead.lastName}
                            </p>
                            <p className="text-xs text-slate-500 truncate max-w-[160px]">
                              {lead.title}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Company */}
                      <td className="px-4 py-3.5 hidden md:table-cell">
                        <p className="text-sm text-slate-300">{lead.company}</p>
                      </td>

                      {/* Industry */}
                      <td className="px-4 py-3.5 hidden lg:table-cell">
                        <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-md">
                          {lead.industry}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3.5">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full",
                            sc.bg,
                            sc.text
                          )}
                        >
                          <span
                            className={cn("w-1.5 h-1.5 rounded-full", sc.dot)}
                            aria-hidden="true"
                          />
                          {STATUS_LABELS[lead.status]}
                        </span>
                      </td>

                      {/* Source */}
                      <td className="px-4 py-3.5 hidden sm:table-cell">
                        <p className="text-xs text-slate-500">{lead.source}</p>
                      </td>

                      {/* Score */}
                      <td className="px-4 py-3.5 text-right">
                        <span
                          className={cn(
                            "text-sm font-mono font-bold",
                            SCORE_COLOR(lead.score)
                          )}
                        >
                          {lead.score}
                        </span>
                      </td>

                      {/* Deal value */}
                      <td className="px-5 py-3.5 text-right hidden xl:table-cell">
                        <span className="text-sm text-slate-300">
                          {lead.dealValue > 0
                            ? `$${lead.dealValue.toLocaleString()}`
                            : "—"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table footer */}
          {filtered.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/6">
              <p className="text-xs text-slate-500">
                Showing {filtered.length} of {leads.length} leads
              </p>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1.5 text-xs text-slate-500 hover:text-white bg-white/4 rounded-lg transition-colors">
                  Previous
                </button>
                <button className="px-3 py-1.5 text-xs bg-[#2563EB] text-white rounded-lg">
                  1
                </button>
                <button className="px-3 py-1.5 text-xs text-slate-500 hover:text-white bg-white/4 rounded-lg transition-colors">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
