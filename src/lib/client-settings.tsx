"use client";

import { createContext, useContext, useState, useEffect } from "react";

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

interface SettingsContextValue {
  branding: ClientBranding;
  updateBranding: (updates: Partial<ClientBranding>) => void;
  resetBranding: () => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

const STORAGE_KEY = "sm_client_branding";

export function ClientSettingsProvider({ children }: { children: React.ReactNode }) {
  const [branding, setBranding] = useState<ClientBranding>(DEFAULT_BRANDING);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setBranding({ ...DEFAULT_BRANDING, ...JSON.parse(stored) });
    } catch {
      // ignore
    }
  }, []);

  const updateBranding = (updates: Partial<ClientBranding>) => {
    setBranding((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const resetBranding = () => {
    setBranding(DEFAULT_BRANDING);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <SettingsContext.Provider value={{ branding, updateBranding, resetBranding }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useClientSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useClientSettings must be used within ClientSettingsProvider");
  return ctx;
}
