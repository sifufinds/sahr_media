-- Sahr Media client portal schema.
-- Each client is a Supabase Auth user (auth.users). client_profiles, leads,
-- invoices, and client_branding all key off that user's id, and RLS scopes
-- every row to auth.uid() so clients can only ever see their own data.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- client_profiles
-- ---------------------------------------------------------------------------
create table public.client_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  company text not null,
  created_at timestamptz not null default now()
);

alter table public.client_profiles enable row level security;

create policy "Clients can view own profile"
  on public.client_profiles for select
  using (auth.uid() = id);

create policy "Clients can update own profile"
  on public.client_profiles for update
  using (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- client_branding (one row per client, editable from the Settings page)
-- ---------------------------------------------------------------------------
create table public.client_branding (
  client_id uuid primary key references public.client_profiles (id) on delete cascade,
  business_name text not null default '',
  logo_url text not null default '',
  accent_color text not null default '#2563EB',
  primary_email text not null default '',
  website text not null default '',
  updated_at timestamptz not null default now()
);

alter table public.client_branding enable row level security;

create policy "Clients can view own branding"
  on public.client_branding for select
  using (auth.uid() = client_id);

create policy "Clients can insert own branding"
  on public.client_branding for insert
  with check (auth.uid() = client_id);

create policy "Clients can update own branding"
  on public.client_branding for update
  using (auth.uid() = client_id);

-- ---------------------------------------------------------------------------
-- leads (read-only for clients; populated by the agency via the service role)
-- ---------------------------------------------------------------------------
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.client_profiles (id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text not null,
  company text not null,
  title text not null default '',
  industry text not null default '',
  status text not null check (status in ('hot', 'warm', 'cold', 'won', 'closed_won', 'closed_lost')),
  score integer not null default 0 check (score between 0 and 100),
  source text not null default '',
  assigned_date date not null default current_date,
  last_activity date not null default current_date,
  notes text not null default '',
  phone text not null default '',
  deal_value numeric(12, 2) not null default 0,
  created_at timestamptz not null default now()
);

create index leads_client_id_idx on public.leads (client_id);
create index leads_client_id_status_idx on public.leads (client_id, status);

alter table public.leads enable row level security;

create policy "Clients can view own leads"
  on public.leads for select
  using (auth.uid() = client_id);

-- ---------------------------------------------------------------------------
-- invoices (read-only for clients; populated by the agency via the service role)
-- ---------------------------------------------------------------------------
create table public.invoices (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.client_profiles (id) on delete cascade,
  number text not null,
  invoice_date date not null,
  due_date date not null,
  amount numeric(12, 2) not null,
  status text not null check (status in ('paid', 'pending', 'overdue')),
  description text not null default '',
  period text not null default '',
  created_at timestamptz not null default now()
);

create index invoices_client_id_idx on public.invoices (client_id);

alter table public.invoices enable row level security;

create policy "Clients can view own invoices"
  on public.invoices for select
  using (auth.uid() = client_id);
