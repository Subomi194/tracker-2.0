drop extension if exists "pg_net";


  create table "public"."products" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null default auth.uid(),
    "name" text not null,
    "category" text
      );


alter table "public"."products" enable row level security;


  create table "public"."routine_products" (
    "id" uuid not null default gen_random_uuid(),
    "routine_id" uuid not null default gen_random_uuid(),
    "products_id" uuid not null default gen_random_uuid()
      );


alter table "public"."routine_products" enable row level security;


  create table "public"."routine_types" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null
      );


alter table "public"."routine_types" enable row level security;


  create table "public"."routines" (
    "id" uuid not null default gen_random_uuid(),
    "user_id" uuid not null default auth.uid(),
    "routine_type_id" uuid not null default gen_random_uuid(),
    "date" date not null,
    "notes" text
      );


alter table "public"."routines" enable row level security;


  create table "public"."users" (
    "id" uuid not null default auth.uid(),
    "email" text not null,
    "created_at" timestamp with time zone not null default now()
      );


alter table "public"."users" enable row level security;

CREATE UNIQUE INDEX products_pkey ON public.products USING btree (id);

CREATE UNIQUE INDEX routine_products_pkey ON public.routine_products USING btree (id);

CREATE UNIQUE INDEX routine_products_products_id_key ON public.routine_products USING btree (products_id);

CREATE UNIQUE INDEX routine_products_routine_id_key ON public.routine_products USING btree (routine_id);

CREATE UNIQUE INDEX routine_types_name_key ON public.routine_types USING btree (name);

CREATE UNIQUE INDEX routine_types_pkey ON public.routine_types USING btree (id);

CREATE UNIQUE INDEX routines_pkey ON public.routines USING btree (id);

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."products" add constraint "products_pkey" PRIMARY KEY using index "products_pkey";

alter table "public"."routine_products" add constraint "routine_products_pkey" PRIMARY KEY using index "routine_products_pkey";

alter table "public"."routine_types" add constraint "routine_types_pkey" PRIMARY KEY using index "routine_types_pkey";

alter table "public"."routines" add constraint "routines_pkey" PRIMARY KEY using index "routines_pkey";

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."products" add constraint "products_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."products" validate constraint "products_user_id_fkey";

alter table "public"."routine_products" add constraint "routine_products_products_id_fkey" FOREIGN KEY (products_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."routine_products" validate constraint "routine_products_products_id_fkey";

alter table "public"."routine_products" add constraint "routine_products_products_id_key" UNIQUE using index "routine_products_products_id_key";

alter table "public"."routine_products" add constraint "routine_products_routine_id_fkey" FOREIGN KEY (routine_id) REFERENCES public.routines(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."routine_products" validate constraint "routine_products_routine_id_fkey";

alter table "public"."routine_products" add constraint "routine_products_routine_id_key" UNIQUE using index "routine_products_routine_id_key";

alter table "public"."routine_types" add constraint "routine_types_name_key" UNIQUE using index "routine_types_name_key";

alter table "public"."routines" add constraint "routines_routine_type_id_fkey" FOREIGN KEY (routine_type_id) REFERENCES public.routine_types(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."routines" validate constraint "routines_routine_type_id_fkey";

alter table "public"."routines" add constraint "routines_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."routines" validate constraint "routines_user_id_fkey";

alter table "public"."users" add constraint "users_email_key" UNIQUE using index "users_email_key";

grant delete on table "public"."products" to "anon";

grant insert on table "public"."products" to "anon";

grant references on table "public"."products" to "anon";

grant select on table "public"."products" to "anon";

grant trigger on table "public"."products" to "anon";

grant truncate on table "public"."products" to "anon";

grant update on table "public"."products" to "anon";

grant delete on table "public"."products" to "authenticated";

grant insert on table "public"."products" to "authenticated";

grant references on table "public"."products" to "authenticated";

grant select on table "public"."products" to "authenticated";

grant trigger on table "public"."products" to "authenticated";

grant truncate on table "public"."products" to "authenticated";

grant update on table "public"."products" to "authenticated";

grant delete on table "public"."products" to "service_role";

grant insert on table "public"."products" to "service_role";

grant references on table "public"."products" to "service_role";

grant select on table "public"."products" to "service_role";

grant trigger on table "public"."products" to "service_role";

grant truncate on table "public"."products" to "service_role";

grant update on table "public"."products" to "service_role";

grant delete on table "public"."routine_products" to "anon";

grant insert on table "public"."routine_products" to "anon";

grant references on table "public"."routine_products" to "anon";

grant select on table "public"."routine_products" to "anon";

grant trigger on table "public"."routine_products" to "anon";

grant truncate on table "public"."routine_products" to "anon";

grant update on table "public"."routine_products" to "anon";

grant delete on table "public"."routine_products" to "authenticated";

grant insert on table "public"."routine_products" to "authenticated";

grant references on table "public"."routine_products" to "authenticated";

grant select on table "public"."routine_products" to "authenticated";

grant trigger on table "public"."routine_products" to "authenticated";

grant truncate on table "public"."routine_products" to "authenticated";

grant update on table "public"."routine_products" to "authenticated";

grant delete on table "public"."routine_products" to "service_role";

grant insert on table "public"."routine_products" to "service_role";

grant references on table "public"."routine_products" to "service_role";

grant select on table "public"."routine_products" to "service_role";

grant trigger on table "public"."routine_products" to "service_role";

grant truncate on table "public"."routine_products" to "service_role";

grant update on table "public"."routine_products" to "service_role";

grant delete on table "public"."routine_types" to "anon";

grant insert on table "public"."routine_types" to "anon";

grant references on table "public"."routine_types" to "anon";

grant select on table "public"."routine_types" to "anon";

grant trigger on table "public"."routine_types" to "anon";

grant truncate on table "public"."routine_types" to "anon";

grant update on table "public"."routine_types" to "anon";

grant delete on table "public"."routine_types" to "authenticated";

grant insert on table "public"."routine_types" to "authenticated";

grant references on table "public"."routine_types" to "authenticated";

grant select on table "public"."routine_types" to "authenticated";

grant trigger on table "public"."routine_types" to "authenticated";

grant truncate on table "public"."routine_types" to "authenticated";

grant update on table "public"."routine_types" to "authenticated";

grant delete on table "public"."routine_types" to "service_role";

grant insert on table "public"."routine_types" to "service_role";

grant references on table "public"."routine_types" to "service_role";

grant select on table "public"."routine_types" to "service_role";

grant trigger on table "public"."routine_types" to "service_role";

grant truncate on table "public"."routine_types" to "service_role";

grant update on table "public"."routine_types" to "service_role";

grant delete on table "public"."routines" to "anon";

grant insert on table "public"."routines" to "anon";

grant references on table "public"."routines" to "anon";

grant select on table "public"."routines" to "anon";

grant trigger on table "public"."routines" to "anon";

grant truncate on table "public"."routines" to "anon";

grant update on table "public"."routines" to "anon";

grant delete on table "public"."routines" to "authenticated";

grant insert on table "public"."routines" to "authenticated";

grant references on table "public"."routines" to "authenticated";

grant select on table "public"."routines" to "authenticated";

grant trigger on table "public"."routines" to "authenticated";

grant truncate on table "public"."routines" to "authenticated";

grant update on table "public"."routines" to "authenticated";

grant delete on table "public"."routines" to "service_role";

grant insert on table "public"."routines" to "service_role";

grant references on table "public"."routines" to "service_role";

grant select on table "public"."routines" to "service_role";

grant trigger on table "public"."routines" to "service_role";

grant truncate on table "public"."routines" to "service_role";

grant update on table "public"."routines" to "service_role";

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";


