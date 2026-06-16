export type LeadStatus = "hot" | "warm" | "cold" | "won" | "closed_won" | "closed_lost";

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  industry: string;
  status: LeadStatus;
  score: number;
  source: string;
  assignedDate: string;
  lastActivity: string;
  notes: string;
  phone: string;
  dealValue: number;
}

export type InvoiceStatus = "paid" | "pending" | "overdue";

export interface Invoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  description: string;
  period: string;
}

export interface PipelineMonth {
  month: string;
  hot: number;
  warm: number;
  cold: number;
  won: number;
  lost: number;
}

export const STATUS_LABELS: Record<LeadStatus, string> = {
  hot: "Hot",
  warm: "Warm",
  cold: "Cold",
  won: "Won",
  closed_won: "Closed Won",
  closed_lost: "Closed Lost",
};

export const STATUS_COLORS: Record<LeadStatus, { bg: string; text: string; dot: string }> = {
  hot: { bg: "bg-red-500/15", text: "text-red-400", dot: "bg-red-400" },
  warm: { bg: "bg-amber-500/15", text: "text-amber-400", dot: "bg-amber-400" },
  cold: { bg: "bg-blue-500/15", text: "text-blue-400", dot: "bg-blue-400" },
  won: { bg: "bg-emerald-500/15", text: "text-emerald-400", dot: "bg-emerald-400" },
  closed_won: { bg: "bg-emerald-500/15", text: "text-emerald-400", dot: "bg-emerald-400" },
  closed_lost: { bg: "bg-slate-500/15", text: "text-slate-400", dot: "bg-slate-400" },
};

/** Buckets leads by assigned-date month for the pipeline trend chart. */
export function buildPipelineTrend(leads: Lead[]): PipelineMonth[] {
  const byMonth = new Map<string, PipelineMonth>();

  for (const lead of leads) {
    const monthKey = new Date(lead.assignedDate).toLocaleString("en-US", { month: "short" });
    const bucket =
      byMonth.get(monthKey) ?? { month: monthKey, hot: 0, warm: 0, cold: 0, won: 0, lost: 0 };

    if (lead.status === "won" || lead.status === "closed_won") bucket.won += 1;
    else if (lead.status === "closed_lost") bucket.lost += 1;
    else if (lead.status === "hot") bucket.hot += 1;
    else if (lead.status === "warm") bucket.warm += 1;
    else if (lead.status === "cold") bucket.cold += 1;

    byMonth.set(monthKey, bucket);
  }

  return Array.from(byMonth.values());
}
