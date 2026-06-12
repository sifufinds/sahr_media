"use client";

import { createContext, useContext, useState, useEffect } from "react";

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

const DEMO_USERS: Array<ClientUser & { password: string }> = [
  {
    id: "client_001",
    email: "demo@client.com",
    password: "demo123",
    name: "Alex Johnson",
    company: "DataSphere",
  },
  {
    id: "client_002",
    email: "jane@company.com",
    password: "pass123",
    name: "Jane Smith",
    company: "Pioneer Construct",
  },
];

const STORAGE_KEY = "sm_client_user";

export function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 800));
    const match = DEMO_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!match) {
      return { success: false, error: "Invalid email or password." };
    }
    const { password: _pw, ...clientUser } = match;
    void _pw;
    setUser(clientUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

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
