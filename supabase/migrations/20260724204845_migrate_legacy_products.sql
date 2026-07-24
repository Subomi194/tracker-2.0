-- Step 1: create one product row per unique product name found in the
-- legacy array, per user — skipping any that already exist (so this is
-- safe to run even if some products were already added manually).
insert into products (user_id, brand, product_name, category)
select distinct on (r.user_id, lower(p))
  r.user_id,
  null as brand,
  p as product_name,
  'other'::product_category as category
from routines r
cross join lateral unnest(r.products) as p
where p is not null
  and length(trim(p)) > 0
order by r.user_id, lower(p), p
on conflict (user_id, (coalesce(lower(brand), '')), lower(product_name)) do nothing;

-- Step 2: link every routine to the product row(s) it referenced.
insert into routine_products (routine_id, product_id)
select distinct
  r.id as routine_id,
  prod.id as product_id
from routines r
cross join lateral unnest(r.products) as p
join products prod
  on prod.user_id = r.user_id
  and prod.brand is null
  and lower(prod.product_name) = lower(p)
where p is not null
  and length(trim(p)) > 0
on conflict (routine_id, product_id) do nothing;