import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STATUS_LABELS, STATUS_COLORS, type Lead } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RecentLeadsProps {
  leads: Lead[];
}

export function RecentLeads({ leads }: RecentLeadsProps) {
  const recent = leads.slice(0, 5);

  return (
    <div className="bg-[#0D1526] border border-white/6 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
        <div>
          <h2 className="text-base font-bold text-white">Recent Leads</h2>
          <p className="text-xs text-slate-500 mt-0.5">Latest assigned to your account</p>
        </div>
        <Link
          href="/client/leads"
          className="flex items-center gap-1 text-xs text-[#2563EB] hover:text-blue-400 font-medium transition-colors"
        >
          View all <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="divide-y divide-white/4">
        {recent.map((lead) => {
          const sc = STATUS_COLORS[lead.status];
          return (
            <div
              key={lead.id}
              className="flex items-center gap-4 px-6 py-3.5 hover:bg-white/2 transition-colors"
            >
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-[#1E293B] border border-white/8 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-slate-300">
                  {lead.firstName[0]}{lead.lastName[0]}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {lead.firstName} {lead.lastName}
                </p>
                <p className="text-xs text-slate-500 truncate">{lead.company}</p>
              </div>

              {/* Industry */}
              <span className="hidden sm:block text-xs text-slate-500 w-24 text-right truncate">
                {lead.industry}
              </span>

              {/* Status badge */}
              <span
                className={cn(
                  "flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full",
                  sc.bg,
                  sc.text
                )}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", sc.dot)} aria-hidden="true" />
                {STATUS_LABELS[lead.status]}
              </span>

              {/* Score */}
              <span className="text-xs font-mono text-slate-400 w-10 text-right">
                {lead.score}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
