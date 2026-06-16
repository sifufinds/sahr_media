/**
 * Seeds the Supabase project with demo client accounts, leads, and invoices.
 *
 * Usage:
 *   npx tsx scripts/seed-supabase.ts
 *
 * Required env vars (add to .env.local, never commit):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY   (Project Settings -> API -> service_role secret;
 *                                 bypasses RLS, server-side only, never ship to the client)
 */

import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

function loadEnvLocal(): void {
  const envPath = path.resolve(__dirname, "../.env.local");
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const match = line.match(/^\s*([^#=\s]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, value] = match;
    if (!(key in process.env)) {
      process.env[key] = value.replace(/^["']|["']$/g, "");
    }
  }
}

loadEnvLocal();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

interface DemoUser {
  email: string;
  password: string;
  name: string;
  company: string;
}

const DEMO_USERS: DemoUser[] = [
  { email: "demo@client.com", password: "demo123", name: "Alex Johnson", company: "DataSphere" },
  { email: "jane@company.com", password: "pass123", name: "Jane Smith", company: "Pioneer Construct" },
];

const DEMO_LEADS = [
  { first_name: "Marcus", last_name: "Chen", email: "m.chen@apexsoftworks.com", company: "Apex SoftWorks", title: "Head of Growth", industry: "SaaS", status: "hot", score: 94, source: "LinkedIn Outreach", assigned_date: "2026-06-01", last_activity: "2026-06-11", notes: "Highly interested. Demo scheduled for June 15.", phone: "+1 415 555 0192", deal_value: 18000 },
  { first_name: "Sarah", last_name: "Weston", email: "sweston@buildright.co", company: "BuildRight Construction", title: "VP of Sales", industry: "Construction", status: "hot", score: 89, source: "Cold Email", assigned_date: "2026-05-28", last_activity: "2026-06-10", notes: "Responded within 2 hours. Budget confirmed at $25k/yr.", phone: "+1 303 555 0174", deal_value: 25000 },
  { first_name: "James", last_name: "Okafor", email: "james.o@stackpilot.io", company: "StackPilot", title: "CEO", industry: "SaaS", status: "warm", score: 71, source: "LinkedIn Outreach", assigned_date: "2026-05-20", last_activity: "2026-06-08", notes: "Replied asking for case studies. Sent 3 construction examples.", phone: "+1 512 555 0138", deal_value: 12000 },
  { first_name: "Rachel", last_name: "Torres", email: "rtorres@meridianbuilt.com", company: "Meridian Built", title: "Director of Operations", industry: "Construction", status: "warm", score: 65, source: "Referral", assigned_date: "2026-05-15", last_activity: "2026-06-05", notes: "Referred by Marcus Chen. Reviewing proposal.", phone: "+1 702 555 0211", deal_value: 9500 },
  { first_name: "Daniel", last_name: "Brauner", email: "d.brauner@nimbustec.com", company: "NimbusTec", title: "CRO", industry: "SaaS", status: "warm", score: 58, source: "Cold Email", assigned_date: "2026-05-10", last_activity: "2026-06-03", notes: "Opened emails 4x. Hasn't booked call yet.", phone: "+1 628 555 0099", deal_value: 15000 },
  { first_name: "Priya", last_name: "Sharma", email: "priya@coreflowsaas.com", company: "CoreFlow SaaS", title: "Head of BizDev", industry: "SaaS", status: "cold", score: 31, source: "LinkedIn Outreach", assigned_date: "2026-04-22", last_activity: "2026-05-20", notes: "No response after 3 follow-ups.", phone: "+1 650 555 0187", deal_value: 8000 },
  { first_name: "Tyler", last_name: "Novak", email: "tyler.n@ironclad-build.com", company: "Ironclad Build", title: "Sales Manager", industry: "Construction", status: "cold", score: 22, source: "Cold Email", assigned_date: "2026-04-18", last_activity: "2026-05-15", notes: "Opened once. No engagement.", phone: "+1 214 555 0053", deal_value: 6000 },
  { first_name: "Lena", last_name: "Fischer", email: "l.fischer@datasphere.io", company: "DataSphere", title: "VP Marketing", industry: "SaaS", status: "won", score: 97, source: "LinkedIn Outreach", assigned_date: "2026-03-10", last_activity: "2026-05-01", notes: "Contract signed. 12-month engagement at $2,400/mo.", phone: "+1 206 555 0062", deal_value: 28800 },
  { first_name: "Anthony", last_name: "Miles", email: "a.miles@pioneerconstruct.com", company: "Pioneer Construct", title: "Owner", industry: "Construction", status: "won", score: 95, source: "Referral", assigned_date: "2026-03-22", last_activity: "2026-05-10", notes: "Closed at $1,200/mo. Very satisfied with initial results.", phone: "+1 480 555 0142", deal_value: 14400 },
  { first_name: "Olivia", last_name: "Grant", email: "ogrant@cloudnine-saas.com", company: "CloudNine SaaS", title: "Founder", industry: "SaaS", status: "closed_lost", score: 44, source: "Cold Email", assigned_date: "2026-02-14", last_activity: "2026-04-02", notes: "Went with a competitor. Price objection.", phone: "+1 312 555 0019", deal_value: 0 },
  { first_name: "Kevin", last_name: "Park", email: "kpark@struktform.com", company: "StruktForm", title: "COO", industry: "Construction", status: "closed_lost", score: 39, source: "LinkedIn Outreach", assigned_date: "2026-02-28", last_activity: "2026-04-15", notes: "No budget for Q2. May revisit in Q3.", phone: "+1 619 555 0044", deal_value: 0 },
  { first_name: "Nina", last_name: "Harlow", email: "nharlow@looptable.io", company: "Looptable", title: "Chief Revenue Officer", industry: "SaaS", status: "hot", score: 91, source: "Referral", assigned_date: "2026-06-05", last_activity: "2026-06-12", notes: "Referral from DataSphere. Wants proposal by EOW.", phone: "+1 347 555 0076", deal_value: 21600 },
];

const DEMO_INVOICES = [
  { number: "INV-2026-006", invoice_date: "2026-06-01", due_date: "2026-06-15", amount: 2400, status: "pending", description: "Lead Generation — Growth Plan", period: "June 2026" },
  { number: "INV-2026-005", invoice_date: "2026-05-01", due_date: "2026-05-15", amount: 2400, status: "paid", description: "Lead Generation — Growth Plan", period: "May 2026" },
  { number: "INV-2026-004", invoice_date: "2026-04-01", due_date: "2026-04-15", amount: 2400, status: "paid", description: "Lead Generation — Growth Plan", period: "April 2026" },
  { number: "INV-2026-003", invoice_date: "2026-03-01", due_date: "2026-03-15", amount: 1800, status: "paid", description: "Lead Generation — Starter Plan", period: "March 2026" },
  { number: "INV-2026-002", invoice_date: "2026-02-01", due_date: "2026-02-15", amount: 1800, status: "paid", description: "Lead Generation — Starter Plan", period: "February 2026" },
  { number: "INV-2026-001", invoice_date: "2026-01-01", due_date: "2026-01-15", amount: 1800, status: "paid", description: "Lead Generation — Starter Plan", period: "January 2026" },
];

async function upsertDemoUser(user: DemoUser): Promise<string> {
  const { data: list, error: listError } = await supabase.auth.admin.listUsers();
  if (listError) throw new Error(`Failed to list users: ${listError.message}`);

  const existing = list.users.find((u) => u.email === user.email);
  let id = existing?.id;

  if (!id) {
    const { data, error } = await supabase.auth.admin.createUser({
      email: user.email,
      password: user.password,
      email_confirm: true,
    });
    if (error || !data.user) throw new Error(`Failed to create ${user.email}: ${error?.message}`);
    id = data.user.id;
  }

  const { error: profileError } = await supabase
    .from("client_profiles")
    .upsert({ id, name: user.name, company: user.company });
  if (profileError) throw new Error(`Failed to upsert profile for ${user.email}: ${profileError.message}`);

  return id;
}

async function main(): Promise<void> {
  const ids: Record<string, string> = {};

  for (const user of DEMO_USERS) {
    ids[user.email] = await upsertDemoUser(user);
    console.log(`Client ready: ${user.email} -> ${ids[user.email]}`);
  }

  const demoClientId = ids["demo@client.com"];

  await supabase.from("leads").delete().eq("client_id", demoClientId);
  const { error: leadsError } = await supabase
    .from("leads")
    .insert(DEMO_LEADS.map((lead) => ({ ...lead, client_id: demoClientId })));
  if (leadsError) throw new Error(`Failed to seed leads: ${leadsError.message}`);

  await supabase.from("invoices").delete().eq("client_id", demoClientId);
  const { error: invoicesError } = await supabase
    .from("invoices")
    .insert(DEMO_INVOICES.map((invoice) => ({ ...invoice, client_id: demoClientId })));
  if (invoicesError) throw new Error(`Failed to seed invoices: ${invoicesError.message}`);

  console.log(`Seeded ${DEMO_LEADS.length} leads and ${DEMO_INVOICES.length} invoices for demo@client.com.`);
  console.log("Done.");
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
