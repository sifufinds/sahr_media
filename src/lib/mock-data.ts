export type LeadStatus = "hot" | "warm" | "cold" | "won" | "closed_won" | "closed_lost";

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
  industry: string;
  status: LeadStatus;
  score: number;
  source: string;
  assignedDate: string;
  lastActivity: string;
  notes: string;
  phone: string;
  dealValue: number;
}

export interface Invoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  description: string;
  period: string;
}

export interface PipelineMonth {
  month: string;
  hot: number;
  warm: number;
  cold: number;
  won: number;
  lost: number;
}

export const MOCK_LEADS: Lead[] = [
  {
    id: "l001",
    firstName: "Marcus",
    lastName: "Chen",
    email: "m.chen@apexsoftworks.com",
    company: "Apex SoftWorks",
    title: "Head of Growth",
    industry: "SaaS",
    status: "hot",
    score: 94,
    source: "LinkedIn Outreach",
    assignedDate: "2026-06-01",
    lastActivity: "2026-06-11",
    notes: "Highly interested. Demo scheduled for June 15.",
    phone: "+1 415 555 0192",
    dealValue: 18000,
  },
  {
    id: "l002",
    firstName: "Sarah",
    lastName: "Weston",
    email: "sweston@buildright.co",
    company: "BuildRight Construction",
    title: "VP of Sales",
    industry: "Construction",
    status: "hot",
    score: 89,
    source: "Cold Email",
    assignedDate: "2026-05-28",
    lastActivity: "2026-06-10",
    notes: "Responded within 2 hours. Budget confirmed at $25k/yr.",
    phone: "+1 303 555 0174",
    dealValue: 25000,
  },
  {
    id: "l003",
    firstName: "James",
    lastName: "Okafor",
    email: "james.o@stackpilot.io",
    company: "StackPilot",
    title: "CEO",
    industry: "SaaS",
    status: "warm",
    score: 71,
    source: "LinkedIn Outreach",
    assignedDate: "2026-05-20",
    lastActivity: "2026-06-08",
    notes: "Replied asking for case studies. Sent 3 construction examples.",
    phone: "+1 512 555 0138",
    dealValue: 12000,
  },
  {
    id: "l004",
    firstName: "Rachel",
    lastName: "Torres",
    email: "rtorres@meridianbuilt.com",
    company: "Meridian Built",
    title: "Director of Operations",
    industry: "Construction",
    status: "warm",
    score: 65,
    source: "Referral",
    assignedDate: "2026-05-15",
    lastActivity: "2026-06-05",
    notes: "Referred by Marcus Chen. Reviewing proposal.",
    phone: "+1 702 555 0211",
    dealValue: 9500,
  },
  {
    id: "l005",
    firstName: "Daniel",
    lastName: "Brauner",
    email: "d.brauner@nimbustec.com",
    company: "NimbusTec",
    title: "CRO",
    industry: "SaaS",
    status: "warm",
    score: 58,
    source: "Cold Email",
    assignedDate: "2026-05-10",
    lastActivity: "2026-06-03",
    notes: "Opened emails 4x. Hasn't booked call yet.",
    phone: "+1 628 555 0099",
    dealValue: 15000,
  },
  {
    id: "l006",
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya@coreflowsaas.com",
    company: "CoreFlow SaaS",
    title: "Head of BizDev",
    industry: "SaaS",
    status: "cold",
    score: 31,
    source: "LinkedIn Outreach",
    assignedDate: "2026-04-22",
    lastActivity: "2026-05-20",
    notes: "No response after 3 follow-ups.",
    phone: "+1 650 555 0187",
    dealValue: 8000,
  },
  {
    id: "l007",
    firstName: "Tyler",
    lastName: "Novak",
    email: "tyler.n@ironclad-build.com",
    company: "Ironclad Build",
    title: "Sales Manager",
    industry: "Construction",
    status: "cold",
    score: 22,
    source: "Cold Email",
    assignedDate: "2026-04-18",
    lastActivity: "2026-05-15",
    notes: "Opened once. No engagement.",
    phone: "+1 214 555 0053",
    dealValue: 6000,
  },
  {
    id: "l008",
    firstName: "Lena",
    lastName: "Fischer",
    email: "l.fischer@datasphere.io",
    company: "DataSphere",
    title: "VP Marketing",
    industry: "SaaS",
    status: "won",
    score: 97,
    source: "LinkedIn Outreach",
    assignedDate: "2026-03-10",
    lastActivity: "2026-05-01",
    notes: "Contract signed. 12-month engagement at $2,400/mo.",
    phone: "+1 206 555 0062",
    dealValue: 28800,
  },
  {
    id: "l009",
    firstName: "Anthony",
    lastName: "Miles",
    email: "a.miles@pioneerconstruct.com",
    company: "Pioneer Construct",
    title: "Owner",
    industry: "Construction",
    status: "won",
    score: 95,
    source: "Referral",
    assignedDate: "2026-03-22",
    lastActivity: "2026-05-10",
    notes: "Closed at $1,200/mo. Very satisfied with initial results.",
    phone: "+1 480 555 0142",
    dealValue: 14400,
  },
  {
    id: "l010",
    firstName: "Olivia",
    lastName: "Grant",
    email: "ogrant@cloudnine-saas.com",
    company: "CloudNine SaaS",
    title: "Founder",
    industry: "SaaS",
    status: "closed_lost",
    score: 44,
    source: "Cold Email",
    assignedDate: "2026-02-14",
    lastActivity: "2026-04-02",
    notes: "Went with a competitor. Price objection.",
    phone: "+1 312 555 0019",
    dealValue: 0,
  },
  {
    id: "l011",
    firstName: "Kevin",
    lastName: "Park",
    email: "kpark@struktform.com",
    company: "StruktForm",
    title: "COO",
    industry: "Construction",
    status: "closed_lost",
    score: 39,
    source: "LinkedIn Outreach",
    assignedDate: "2026-02-28",
    lastActivity: "2026-04-15",
    notes: "No budget for Q2. May revisit in Q3.",
    phone: "+1 619 555 0044",
    dealValue: 0,
  },
  {
    id: "l012",
    firstName: "Nina",
    lastName: "Harlow",
    email: "nharlow@looptable.io",
    company: "Looptable",
    title: "Chief Revenue Officer",
    industry: "SaaS",
    status: "hot",
    score: 91,
    source: "Referral",
    assignedDate: "2026-06-05",
    lastActivity: "2026-06-12",
    notes: "Referral from DataSphere. Wants proposal by EOW.",
    phone: "+1 347 555 0076",
    dealValue: 21600,
  },
];

export const MOCK_INVOICES: Invoice[] = [
  {
    id: "inv001",
    number: "INV-2026-006",
    date: "2026-06-01",
    dueDate: "2026-06-15",
    amount: 2400,
    status: "pending",
    description: "Lead Generation — Growth Plan",
    period: "June 2026",
  },
  {
    id: "inv002",
    number: "INV-2026-005",
    date: "2026-05-01",
    dueDate: "2026-05-15",
    amount: 2400,
    status: "paid",
    description: "Lead Generation — Growth Plan",
    period: "May 2026",
  },
  {
    id: "inv003",
    number: "INV-2026-004",
    date: "2026-04-01",
    dueDate: "2026-04-15",
    amount: 2400,
    status: "paid",
    description: "Lead Generation — Growth Plan",
    period: "April 2026",
  },
  {
    id: "inv004",
    number: "INV-2026-003",
    date: "2026-03-01",
    dueDate: "2026-03-15",
    amount: 1800,
    status: "paid",
    description: "Lead Generation — Starter Plan",
    period: "March 2026",
  },
  {
    id: "inv005",
    number: "INV-2026-002",
    date: "2026-02-01",
    dueDate: "2026-02-15",
    amount: 1800,
    status: "paid",
    description: "Lead Generation — Starter Plan",
    period: "February 2026",
  },
  {
    id: "inv006",
    number: "INV-2026-001",
    date: "2026-01-01",
    dueDate: "2026-01-15",
    amount: 1800,
    status: "paid",
    description: "Lead Generation — Starter Plan",
    period: "January 2026",
  },
];

export const PIPELINE_TREND: PipelineMonth[] = [
  { month: "Jan", hot: 4, warm: 7, cold: 5, won: 2, lost: 1 },
  { month: "Feb", hot: 5, warm: 8, cold: 6, won: 3, lost: 2 },
  { month: "Mar", hot: 6, warm: 9, cold: 4, won: 4, lost: 1 },
  { month: "Apr", hot: 7, warm: 10, cold: 7, won: 3, lost: 3 },
  { month: "May", hot: 8, warm: 11, cold: 5, won: 5, lost: 2 },
  { month: "Jun", hot: 3, warm: 3, cold: 2, won: 2, lost: 0 },
];

export const STATUS_LABELS: Record<LeadStatus, string> = {
  hot: "Hot",
  warm: "Warm",
  cold: "Cold",
  won: "Won",
  closed_won: "Closed Won",
  closed_lost: "Closed Lost",
};

export const STATUS_COLORS: Record<LeadStatus, { bg: string; text: string; dot: string }> = {
  hot: { bg: "bg-red-500/15", text: "text-red-400", dot: "bg-red-400" },
  warm: { bg: "bg-amber-500/15", text: "text-amber-400", dot: "bg-amber-400" },
  cold: { bg: "bg-blue-500/15", text: "text-blue-400", dot: "bg-blue-400" },
  won: { bg: "bg-emerald-500/15", text: "text-emerald-400", dot: "bg-emerald-400" },
  closed_won: { bg: "bg-emerald-500/15", text: "text-emerald-400", dot: "bg-emerald-400" },
  closed_lost: { bg: "bg-slate-500/15", text: "text-slate-400", dot: "bg-slate-400" },
};
