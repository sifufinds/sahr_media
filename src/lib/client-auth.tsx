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

    // onAuthStateChange fires immediately with an INITIAL_SESSION event on
    // subscribe (session read from storage). The handler itself must not
    // call other Supabase methods (e.g. supabase.from()) synchronously,
    // doing so re-enters supabase-js's internal session lock while the
    // event dispatch still holds it and deadlocks forever on a cold reload.
    // Deferring with setTimeout lets the dispatch finish and release the
    // lock first. See: https://github.com/supabase/supabase-js/issues/762
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setTimeout(() => {
        if (!session?.user?.email) {
          setUser(null);
          setIsLoading(false);
          return;
        }

        loadClientUser(supabase, session.user.id, session.user.email)
          .then(setUser)
          .catch(() => setUser(null))
          .finally(() => setIsLoading(false));
      }, 0);
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
