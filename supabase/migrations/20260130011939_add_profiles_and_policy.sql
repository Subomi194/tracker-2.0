create table profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    name text not null,
    create_at timestamp with time zone default now()
);


