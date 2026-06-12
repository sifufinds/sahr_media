import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  changePositive?: boolean;
  icon: LucideIcon;
  accentColor: string;
  bgColor: string;
  iconColor: string;
}

export function MetricCard({
  label,
  value,
  change,
  changePositive,
  icon: Icon,
  accentColor,
  bgColor,
  iconColor,
}: MetricCardProps) {
  return (
    <div className="bg-[#0D1526] border border-white/6 rounded-2xl p-5 hover:border-white/12 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn("w-10 h-10 rounded-xl flex items-center justify-center", bgColor)}
        >
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
        {change && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              changePositive
                ? "text-emerald-400 bg-emerald-500/10"
                : "text-red-400 bg-red-500/10"
            )}
          >
            {change}
          </span>
        )}
      </div>
      <p className="text-3xl font-black text-white tracking-tight">{value}</p>
      <p className="text-sm text-slate-500 mt-1">{label}</p>
      <div
        className="mt-3 h-0.5 rounded-full opacity-40"
        style={{ background: accentColor }}
        aria-hidden="true"
      />
    </div>
  );
}
