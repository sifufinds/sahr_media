"use client";

import { useState } from "react";
import {
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
  Zap,
  Shield,
  TrendingUp,
  Loader2,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useInvoices } from "@/hooks/useInvoices";
import { cn } from "@/lib/utils";

const PLAN_FEATURES = [
  "Up to 40 qualified leads/month",
  "Hot/Warm/Cold lead scoring",
  "Multi-channel outreach (Email + LinkedIn)",
  "Weekly pipeline reports",
  "Dedicated account manager",
  "CRM-ready lead data",
];

const STATUS_CONFIG = {
  paid: {
    label: "Paid",
    icon: CheckCircle2,
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  pending: {
    label: "Due",
    icon: Clock,
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  overdue: {
    label: "Overdue",
    icon: AlertCircle,
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
  },
};

export default function BillingPage() {
  const { invoices, isLoading } = useInvoices();
  const [tab, setTab] = useState<"overview" | "invoices">("overview");

  const totalPaid = invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.amount, 0);
  const pendingAmount = invoices
    .filter((i) => i.status === "pending")
    .reduce((sum, i) => sum + i.amount, 0);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-[#2563EB] animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader title="Billing & Payments" subtitle="Manage your subscription and invoices" />

      <main className="flex-1 px-6 py-6 space-y-6">
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-[#0D1526] border border-white/6 rounded-xl p-1 w-fit">
          {(["overview", "invoices"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-150",
                tab === t
                  ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            {/* Plan card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Current plan */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#1a2744] to-[#0D1526] border border-[#2563EB]/25 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-[#2563EB] bg-[#2563EB]/15 px-2.5 py-0.5 rounded-full">
                        Active
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white">Growth Plan</h2>
                    <p className="text-slate-400 text-sm mt-0.5">
                      $2,400 / month · Billed monthly
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#2563EB]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {PLAN_FEATURES.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div>
                    <p className="text-xs text-slate-500">Next billing date</p>
                    <p className="text-sm font-medium text-white">July 1, 2026</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium text-slate-300 bg-white/6 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
                      Manage Plan
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors shadow-lg shadow-blue-500/20">
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats cards */}
              <div className="flex flex-col gap-4">
                <div className="bg-[#0D1526] border border-white/6 rounded-2xl p-5 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <TrendingUp className="w-4.5 h-4.5 text-emerald-400" style={{ width: "1.125rem", height: "1.125rem" }} />
                    </div>
                    <p className="text-xs text-slate-500">Total Paid (YTD)</p>
                  </div>
                  <p className="text-2xl font-black text-white">${totalPaid.toLocaleString()}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {invoices.filter((i) => i.status === "paid").length} invoices
                  </p>
                </div>

                <div className="bg-[#0D1526] border border-white/6 rounded-2xl p-5 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Clock className="w-4.5 h-4.5 text-amber-400" style={{ width: "1.125rem", height: "1.125rem" }} />
                    </div>
                    <p className="text-xs text-slate-500">Outstanding</p>
                  </div>
                  <p className="text-2xl font-black text-white">
                    {pendingAmount > 0 ? `$${pendingAmount.toLocaleString()}` : "$0"}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {pendingAmount > 0 ? "Due June 15, 2026" : "All invoices paid"}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-[#0D1526] border border-white/6 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white">Payment Method</h3>
                <button className="text-sm text-[#2563EB] hover:text-blue-400 transition-colors font-medium">
                  Update
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 border border-white/10 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">•••• •••• •••• 4242</p>
                  <p className="text-xs text-slate-500">Expires 04 / 2028 · Visa</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <Shield className="w-3 h-3" />
                  Verified
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "invoices" && (
          <div className="bg-[#0D1526] border border-white/6 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
              <div>
                <h2 className="text-base font-bold text-white">Invoice History</h2>
                <p className="text-xs text-slate-500 mt-0.5">{invoices.length} invoices</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm" aria-label="Invoice history">
                <thead>
                  <tr className="border-b border-white/6">
                    {["Invoice #", "Period", "Description", "Amount", "Status", ""].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="text-left text-xs font-medium text-slate-500 uppercase tracking-wide px-5 py-3.5 first:pl-6 last:pr-6"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/4">
                  {invoices.map((inv) => {
                    const sc = STATUS_CONFIG[inv.status];
                    const StatusIcon = sc.icon;
                    return (
                      <tr key={inv.id} className="hover:bg-white/2 transition-colors">
                        <td className="px-6 py-3.5">
                          <p className="text-sm font-mono text-slate-300">{inv.number}</p>
                          <p className="text-xs text-slate-600">
                            {new Date(inv.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </td>
                        <td className="px-5 py-3.5">
                          <p className="text-sm text-slate-300">{inv.period}</p>
                        </td>
                        <td className="px-5 py-3.5">
                          <p className="text-sm text-slate-400">{inv.description}</p>
                        </td>
                        <td className="px-5 py-3.5">
                          <p className="text-sm font-semibold text-white">
                            ${inv.amount.toLocaleString()}
                          </p>
                        </td>
                        <td className="px-5 py-3.5">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border",
                              sc.bg,
                              sc.text,
                              sc.border
                            )}
                          >
                            <StatusIcon className="w-3 h-3" />
                            {sc.label}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-right">
                          <button
                            className="p-1.5 text-slate-500 hover:text-white hover:bg-white/8 rounded-lg transition-colors"
                            aria-label={`Download ${inv.number}`}
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary row */}
            <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/6 bg-white/2">
              <p className="text-xs text-slate-500">
                Total paid:{" "}
                <span className="text-white font-semibold">${totalPaid.toLocaleString()}</span>
              </p>
              <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                <Download className="w-3.5 h-3.5" />
                Export all
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
