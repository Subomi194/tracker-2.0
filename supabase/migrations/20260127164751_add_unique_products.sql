create extension if not exists citext;

-- Update products unique constraint
alter table products
drop constraint if exists products_name_unique;

alter table products
add constraint products_user_name_unique unique (user_id, name);
