"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { useClientAuth } from "@/lib/client-auth";

export interface ClientBranding {
  businessName: string;
  logoUrl: string;
  accentColor: string;
  primaryEmail: string;
  website: string;
}

const DEFAULT_BRANDING: ClientBranding = {
  businessName: "",
  logoUrl: "",
  accentColor: "#2563EB",
  primaryEmail: "",
  website: "",
};

interface BrandingRow {
  business_name: string;
  logo_url: string;
  accent_color: string;
  primary_email: string;
  website: string;
}

function mapBrandingRow(row: BrandingRow): ClientBranding {
  return {
    businessName: row.business_name,
    logoUrl: row.logo_url,
    accentColor: row.accent_color,
    primaryEmail: row.primary_email,
    website: row.website,
  };
}

interface SettingsContextValue {
  branding: ClientBranding;
  isLoading: boolean;
  updateBranding: (updates: Partial<ClientBranding>) => Promise<void>;
  resetBranding: () => Promise<void>;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function ClientSettingsProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoading: authLoading } = useClientAuth();
  const [branding, setBranding] = useState<ClientBranding>(DEFAULT_BRANDING);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for auth to settle first, otherwise a momentary `user === null`
    // while the session is still resolving gets treated as "logged out"
    // and this resolves with empty branding before the real user loads.
    if (authLoading) return;

    async function loadBranding() {
      if (!user) {
        setBranding(DEFAULT_BRANDING);
        setIsLoading(false);
        return;
      }

      const { data } = await getSupabaseClient()
        .from("client_branding")
        .select("business_name, logo_url, accent_color, primary_email, website")
        .eq("client_id", user.id)
        .maybeSingle();

      if (data) setBranding(mapBrandingRow(data));
      setIsLoading(false);
    }

    loadBranding();
  }, [user, authLoading]);

  const persist = useCallback(
    async (next: ClientBranding) => {
      if (!user) return;
      const supabase = getSupabaseClient();
      await supabase.from("client_branding").upsert({
        client_id: user.id,
        business_name: next.businessName,
        logo_url: next.logoUrl,
        accent_color: next.accentColor,
        primary_email: next.primaryEmail,
        website: next.website,
      });
    },
    [user]
  );

  const updateBranding = useCallback(
    async (updates: Partial<ClientBranding>) => {
      const next = { ...branding, ...updates };
      setBranding(next);
      await persist(next);
    },
    [branding, persist]
  );

  const resetBranding = useCallback(async () => {
    setBranding(DEFAULT_BRANDING);
    await persist(DEFAULT_BRANDING);
  }, [persist]);

  return (
    <SettingsContext.Provider value={{ branding, isLoading, updateBranding, resetBranding }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useClientSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useClientSettings must be used within ClientSettingsProvider");
  return ctx;
}
