"use client";

import { PIPELINE_TREND } from "@/lib/mock-data";

const BAR_COLORS = {
  hot: "#EF4444",
  warm: "#F59E0B",
  won: "#10B981",
};

export function PipelineChart() {
  const maxVal = Math.max(
    ...PIPELINE_TREND.flatMap((m) => [m.hot, m.warm, m.won])
  );

  return (
    <div className="bg-[#0D1526] border border-white/6 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-bold text-white">Pipeline Trend</h2>
          <p className="text-xs text-slate-500 mt-0.5">Lead volume by status · 6 months</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          {Object.entries(BAR_COLORS).map(([key, color]) => (
            <span key={key} className="flex items-center gap-1.5 capitalize">
              <span
                className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
              {key}
            </span>
          ))}
        </div>
      </div>

      <div
        className="flex items-end gap-3"
        role="img"
        aria-label="Pipeline trend chart showing hot, warm, and won leads over 6 months"
      >
        {PIPELINE_TREND.map((month) => {
          const total = month.hot + month.warm + month.won;
          const hotH = Math.round((month.hot / maxVal) * 160);
          const warmH = Math.round((month.warm / maxVal) * 160);
          const wonH = Math.round((month.won / maxVal) * 160);

          return (
            <div key={month.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="flex items-end gap-0.5 h-40" aria-hidden="true">
                <div
                  className="flex-1 rounded-t-sm transition-all duration-500"
                  style={{ height: `${hotH}px`, backgroundColor: BAR_COLORS.hot, opacity: 0.85 }}
                />
                <div
                  className="flex-1 rounded-t-sm transition-all duration-500"
                  style={{ height: `${warmH}px`, backgroundColor: BAR_COLORS.warm, opacity: 0.85 }}
                />
                <div
                  className="flex-1 rounded-t-sm transition-all duration-500"
                  style={{ height: `${wonH}px`, backgroundColor: BAR_COLORS.won, opacity: 0.85 }}
                />
              </div>
              <span className="text-xs text-slate-500">{month.month}</span>
              <span className="text-xs font-medium text-slate-300">{total}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
