"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";

interface ClientUser {
  id: string;
  email: string;
  name: string;
  company: string;
}

interface AuthContextValue {
  user: ClientUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

async function loadClientUser(
  supabase: ReturnType<typeof getSupabaseClient>,
  id: string,
  email: string
): Promise<ClientUser> {
  const { data, error } = await supabase
    .from("client_profiles")
    .select("name, company")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(`Failed to load client profile: ${error.message}`);
  }

  return { id, email, name: data.name, company: data.company };
}

export function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabaseClient();

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user?.email) {
        try {
          setUser(await loadClientUser(supabase, session.user.id, session.user.email));
        } catch {
          setUser(null);
        }
      }
      setIsLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user?.email) {
        try {
          setUser(await loadClientUser(supabase, session.user.id, session.user.email));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });

    return () => subscription.subscription.unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return { success: false, error: "Invalid email or password." };
    }
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    const supabase = getSupabaseClient();
    void supabase.auth.signOut();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useClientAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useClientAuth must be used within ClientAuthProvider");
  return ctx;
}
