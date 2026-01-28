create table routine_routine_types (
  id uuid primary key default gen_random_uuid(),
  routine_id uuid not null references routines(id) on delete cascade,
  routine_type_id uuid not null references routine_types(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (routine_id, routine_type_id)
);

alter table public.routine_routine_types enable row level security;

-- allow users to insert their own routine types
create policy "Users can insert routine routine types"
on public.routine_routine_types
for insert
with check (
  exists (
    select 1
    from public.routines
    where routines.id = routine_routine_types.routine_id
      and routines.user_id = auth.uid()
  )
);

-- allow users to read their own routine types
create policy "Users can read routine routine types"
on public.routine_routine_types
for select
using (
  exists (
    select 1
    from public.routines
    where routines.id = routine_routine_types.routine_id
      and routines.user_id = auth.uid()
  )
);