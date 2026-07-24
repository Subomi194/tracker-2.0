alter table products alter column brand drop not null;

-- The old unique constraint breaks with nulls (Postgres treats every NULL
-- as distinct, so two products with a null brand wouldn't be caught as
-- duplicates). Replace it with a case-insensitive expression index instead.
alter table products drop constraint products_user_id_brand_product_name_key;

create unique index products_user_id_brand_product_name_idx
  on products (user_id, coalesce(lower(brand), ''), lower(product_name));