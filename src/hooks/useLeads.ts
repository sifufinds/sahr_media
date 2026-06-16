import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { mapLeadRow, type LeadRow } from "@/lib/supabase/mappers";
import type { Lead } from "@/lib/types";
import { useClientAuth } from "@/lib/client-auth";

interface UseLeadsResult {
  leads: Lead[];
  isLoading: boolean;
  error: string | null;
}

const LEAD_COLUMNS =
  "id, first_name, last_name, email, company, title, industry, status, score, source, assigned_date, last_activity, notes, phone, deal_value";

export function useLeads(): UseLeadsResult {
  const { user } = useClientAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadLeads() {
      if (!user) {
        setLeads([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const { data, error: fetchError } = await getSupabaseClient()
        .from("leads")
        .select(LEAD_COLUMNS)
        .eq("client_id", user.id)
        .order("assigned_date", { ascending: false });

      if (cancelled) return;
      if (fetchError) {
        setError(fetchError.message);
      } else {
        setLeads(((data ?? []) as LeadRow[]).map(mapLeadRow));
      }
      setIsLoading(false);
    }

    loadLeads();

    return () => {
      cancelled = true;
    };
  }, [user]);

  return { leads, isLoading, error };
}
