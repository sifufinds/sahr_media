import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { mapInvoiceRow, type InvoiceRow } from "@/lib/supabase/mappers";
import type { Invoice } from "@/lib/types";
import { useClientAuth } from "@/lib/client-auth";

interface UseInvoicesResult {
  invoices: Invoice[];
  isLoading: boolean;
  error: string | null;
}

const INVOICE_COLUMNS = "id, number, invoice_date, due_date, amount, status, description, period";

export function useInvoices(): UseInvoicesResult {
  const { user } = useClientAuth();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadInvoices() {
      if (!user) {
        setInvoices([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const { data, error: fetchError } = await getSupabaseClient()
        .from("invoices")
        .select(INVOICE_COLUMNS)
        .eq("client_id", user.id)
        .order("invoice_date", { ascending: false });

      if (cancelled) return;
      if (fetchError) {
        setError(fetchError.message);
      } else {
        setInvoices(((data ?? []) as InvoiceRow[]).map(mapInvoiceRow));
      }
      setIsLoading(false);
    }

    loadInvoices();

    return () => {
      cancelled = true;
    };
  }, [user]);

  return { invoices, isLoading, error };
}
