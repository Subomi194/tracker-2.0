drop table if exists routine_products;

drop table if exists products;

alter table routines
add column products text[] default '{}';