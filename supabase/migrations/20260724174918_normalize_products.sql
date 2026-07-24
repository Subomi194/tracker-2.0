-- Category enum matching your spec
create type product_category as enum (
  'shampoo',
  'conditioner',
  'deep_conditioner',
  'pre_poo',
  'leave_in',
  'oil',
  'cream',
  'curl_cream',
  'gel',
  'mousse',
  'hair_mask',
  'other'
);

-- One row per unique product a user owns
create table products (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  brand text not null,
  product_name text not null,
  category product_category not null default 'other',
  notes text,
  created_at timestamptz not null default now(),
  unique (user_id, brand, product_name) -- prevents accidental duplicates per user
);

-- Join table: replaces the old `products` jsonb column on routines
create table routine_products (
  routine_id uuid not null references routines(id) on delete cascade,
  product_id uuid not null references products(id) on delete cascade,
  primary key (routine_id, product_id)
);

alter table products enable row level security;
alter table routine_products enable row level security;

create policy "Users can view own products"
  on products for select
  using (auth.uid() = user_id);

create policy "Users can insert own products"
  on products for insert
  with check (auth.uid() = user_id);

create policy "Users can update own products"
  on products for update
  using (auth.uid() = user_id);

create policy "Users can delete own products"
  on products for delete
  using (auth.uid() = user_id);

create policy "Users can view own routine_products"
  on routine_products for select
  using (exists (
    select 1 from routines
    where routines.id = routine_products.routine_id
    and routines.user_id = auth.uid()
  ));

create policy "Users can insert own routine_products"
  on routine_products for insert
  with check (exists (
    select 1 from routines
    where routines.id = routine_products.routine_id
    and routines.user_id = auth.uid()
  ));

create policy "Users can delete own routine_products"
  on routine_products for delete
  using (exists (
    select 1 from routines
    where routines.id = routine_products.routine_id
    and routines.user_id = auth.uid()
  ));