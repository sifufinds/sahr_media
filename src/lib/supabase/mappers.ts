import type { Invoice, Lead, LeadStatus, InvoiceStatus } from "@/lib/types";

export interface LeadRow {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  title: string;
  industry: string;
  status: LeadStatus;
  score: number;
  source: string;
  assigned_date: string;
  last_activity: string;
  notes: string;
  phone: string;
  deal_value: number;
}

export interface InvoiceRow {
  id: string;
  number: string;
  invoice_date: string;
  due_date: string;
  amount: number;
  status: InvoiceStatus;
  description: string;
  period: string;
}

export function mapLeadRow(row: LeadRow): Lead {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    company: row.company,
    title: row.title,
    industry: row.industry,
    status: row.status,
    score: row.score,
    source: row.source,
    assignedDate: row.assigned_date,
    lastActivity: row.last_activity,
    notes: row.notes,
    phone: row.phone,
    dealValue: Number(row.deal_value),
  };
}

export function mapInvoiceRow(row: InvoiceRow): Invoice {
  return {
    id: row.id,
    number: row.number,
    date: row.invoice_date,
    dueDate: row.due_date,
    amount: Number(row.amount),
    status: row.status,
    description: row.description,
    period: row.period,
  };
}
