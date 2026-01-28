alter table routine_types enable row level security;

create policy "Routine types are readable by everyone"
on routine_types 
for select 
using (true);

alter table routines enable row level security;

create policy "Users can read their own routines"
on routines 
for select 
using (auth.uid() = user_id);

create policy "Users can insert their own routines"
on routines 
for insert 
with check (auth.uid() = user_id);

create policy "Users can update their own routines"
on routines 
for update 
using (auth.uid() = user_id);

create policy "Users can delete their own routines"
on routines 
for delete 
using (auth.uid() = user_id);

alter table products enable row level security;

create policy "Users can view their own products"
on products 
for select 
using (auth.uid() = user_id);

create policy "Users can insert their own products"
on products 
for insert 
with check (auth.uid() = user_id);

create policy "Users can update their own products"
on products 
for update 
using (auth.uid() = user_id);

create policy "Users can delete their own products"
on products 
for delete 
using (auth.uid() = user_id);

alter table routine_products enable row level security;

create policy "Users can manage routine products for their routines"
on routine_products
using (
  exists (
    select 1
    from routines
    where routines.id = routine_products.routine_id
      and routines.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from routines
    where routines.id = routine_products.routine_id
      and routines.user_id = auth.uid()
  )
);