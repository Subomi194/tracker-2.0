create extension if not exists citext;

alter table products
alter column name type citext;

-- products: case-insensitive unique names DROPPED
alter table products
add constraint products_name_unique unique (name);

-- routine_products: prevent duplicate product per routine
alter table routine_products
add constraint routine_products_unique unique (routine_id, products_id);