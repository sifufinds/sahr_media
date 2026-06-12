"use client";

import { useState, useRef } from "react";
import { Upload, RotateCcw, Check, Palette, Building2, Globe, Mail } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useClientSettings } from "@/lib/client-settings";
import { cn } from "@/lib/utils";

const ACCENT_PRESETS = [
  { label: "SAHR Blue", color: "#2563EB" },
  { label: "Emerald", color: "#10B981" },
  { label: "Violet", color: "#7C3AED" },
  { label: "Rose", color: "#E11D48" },
  { label: "Amber", color: "#D97706" },
  { label: "Cyan", color: "#0891B2" },
];

export default function SettingsPage() {
  const { branding, updateBranding, resetBranding } = useClientSettings();
  const [saved, setSaved] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string>(branding.logoUrl || "");
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    businessName: branding.businessName,
    accentColor: branding.accentColor,
    primaryEmail: branding.primaryEmail,
    website: branding.website,
  });

  const handleField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Logo must be under 2 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target?.result as string;
      setLogoPreview(url);
      updateBranding({ logoUrl: url });
      setSaved(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    updateBranding(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    resetBranding();
    setForm({ businessName: "", accentColor: "#2563EB", primaryEmail: "", website: "" });
    setLogoPreview("");
    setSaved(false);
  };

  const initials = (form.businessName || "SM")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader title="Settings" subtitle="Customize your portal branding" />

      <main className="flex-1 px-6 py-6">
        <div className="max-w-2xl space-y-6">
          {/* Logo upload */}
          <section className="bg-[#0D1526] border border-white/6 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Upload className="w-4 h-4 text-slate-400" />
              <h2 className="text-base font-bold text-white">Logo</h2>
            </div>

            <div className="flex items-start gap-6">
              {/* Preview */}
              <div className="flex-shrink-0">
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Business logo preview"
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10"
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-2xl border-2 border-dashed border-white/15 flex items-center justify-center"
                    style={{ backgroundColor: `${form.accentColor}20` }}
                  >
                    <span className="text-xl font-black text-white/60">{initials}</span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-400 mb-3">
                  Upload your business logo. It will appear in the sidebar and portal header.
                  PNG or SVG recommended · max 2 MB.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-white/6 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    {logoPreview ? "Replace" : "Upload logo"}
                  </button>
                  {logoPreview && (
                    <button
                      onClick={() => {
                        setLogoPreview("");
                        updateBranding({ logoUrl: "" });
                      }}
                      className="px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/8 border border-red-500/20 rounded-xl transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/png,image/svg+xml,image/jpeg,image/webp"
                  className="sr-only"
                  aria-label="Upload logo"
                  onChange={handleLogoChange}
                />
              </div>
            </div>
          </section>

          {/* Business info */}
          <section className="bg-[#0D1526] border border-white/6 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Building2 className="w-4 h-4 text-slate-400" />
              <h2 className="text-base font-bold text-white">Business Info</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Business name
                </label>
                <input
                  id="businessName"
                  type="text"
                  value={form.businessName}
                  onChange={(e) => handleField("businessName", e.target.value)}
                  placeholder="Your company name"
                  maxLength={64}
                  className="w-full bg-[#0A1120] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/25 transition-colors"
                />
                <p className="text-xs text-slate-600 mt-1">
                  Shown in the sidebar and report headers.
                </p>
              </div>

              <div>
                <label htmlFor="primaryEmail" className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Mail className="w-3.5 h-3.5 inline mr-1 text-slate-500" />
                  Primary contact email
                </label>
                <input
                  id="primaryEmail"
                  type="email"
                  value={form.primaryEmail}
                  onChange={(e) => handleField("primaryEmail", e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-[#0A1120] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/25 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Globe className="w-3.5 h-3.5 inline mr-1 text-slate-500" />
                  Website
                </label>
                <input
                  id="website"
                  type="url"
                  value={form.website}
                  onChange={(e) => handleField("website", e.target.value)}
                  placeholder="https://yoursite.com"
                  className="w-full bg-[#0A1120] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/25 transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Accent color */}
          <section className="bg-[#0D1526] border border-white/6 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Palette className="w-4 h-4 text-slate-400" />
              <h2 className="text-base font-bold text-white">Accent Color</h2>
            </div>

            <p className="text-sm text-slate-400 mb-4">
              Sets the highlight color for your logo initials, active nav items, and buttons.
            </p>

            {/* Presets */}
            <div className="flex flex-wrap gap-2 mb-4">
              {ACCENT_PRESETS.map(({ label, color }) => (
                <button
                  key={color}
                  onClick={() => handleField("accentColor", color)}
                  title={label}
                  aria-label={`Set accent to ${label}`}
                  className={cn(
                    "w-8 h-8 rounded-xl transition-all duration-150",
                    form.accentColor === color
                      ? "scale-110 outline outline-2 outline-offset-2"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  )}
                  style={{
                    backgroundColor: color,
                    outlineColor: form.accentColor === color ? color : "transparent",
                  }}
                />
              ))}
            </div>

            {/* Custom color */}
            <div className="flex items-center gap-3">
              <label htmlFor="accentColorCustom" className="text-sm text-slate-400">
                Custom
              </label>
              <input
                id="accentColorCustom"
                type="color"
                value={form.accentColor}
                onChange={(e) => handleField("accentColor", e.target.value)}
                className="w-9 h-9 rounded-lg cursor-pointer border-0 bg-transparent"
              />
              <code className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded-lg">
                {form.accentColor}
              </code>
            </div>

            {/* Live preview */}
            <div className="mt-4 p-3 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg"
                style={{ backgroundColor: form.accentColor }}
              >
                {initials.slice(0, 2) || "S"}
              </div>
              <span className="text-xs text-slate-400">Sidebar logo preview</span>
              <div
                className="ml-auto px-3 py-1.5 rounded-lg text-xs text-white font-medium"
                style={{ backgroundColor: form.accentColor }}
              >
                Active item
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-400 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to defaults
            </button>

            <button
              onClick={handleSave}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg",
                saved
                  ? "bg-emerald-600 text-white shadow-emerald-500/20"
                  : "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-blue-500/20"
              )}
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  Saved
                </>
              ) : (
                "Save changes"
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
