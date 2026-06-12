"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useClientAuth } from "@/lib/client-auth";
import { useClientSettings } from "@/lib/client-settings";

const NAV_ITEMS = [
  { href: "/client", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/client/leads", label: "Leads", icon: Users, exact: false },
  { href: "/client/billing", label: "Billing", icon: CreditCard, exact: false },
  { href: "/client/settings", label: "Settings", icon: Settings, exact: false },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useClientAuth();
  const { branding } = useClientSettings();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/client-login");
  };

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const displayName = branding.businessName || user?.company || "Client Portal";
  const initials = displayName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-5 pt-6 pb-5 border-b border-white/6">
        <div className="flex items-center gap-3">
          {branding.logoUrl ? (
            <img
              src={branding.logoUrl}
              alt={displayName}
              className="w-9 h-9 rounded-xl object-cover"
            />
          ) : (
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0"
              style={{ backgroundColor: branding.accentColor || "#2563EB" }}
            >
              {initials.slice(0, 2) || "S"}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate leading-tight">{displayName}</p>
            <p className="text-slate-500 text-xs truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5" aria-label="Dashboard navigation">
        {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group",
                active
                  ? "bg-[#2563EB]/15 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon
                className={cn(
                  "w-4.5 h-4.5 flex-shrink-0 transition-colors",
                  active ? "text-[#2563EB]" : "text-slate-500 group-hover:text-slate-300"
                )}
                style={{ width: "1.125rem", height: "1.125rem" }}
              />
              {label}
              {active && (
                <ChevronRight
                  className="w-3.5 h-3.5 ml-auto text-[#2563EB]/60"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-5 pt-3 border-t border-white/6">
        <div className="px-3 py-2 mb-2">
          <p className="text-xs text-slate-500 truncate">{user?.name}</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/8 transition-all duration-150"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 bg-[#0D1526] border-r border-white/6 min-h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2.5 bg-[#111827]/90 backdrop-blur-sm border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors shadow-lg"
        aria-label="Open navigation"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative w-64 bg-[#0D1526] border-r border-white/6 flex flex-col">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}
