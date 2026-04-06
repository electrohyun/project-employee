alter table if exists public.comments
  drop constraint if exists comments_author_id_fkey;

alter table if exists public.posts
  drop constraint if exists posts_author_id_fkey;

drop trigger if exists trg_user_profiles_updated_at on public.user_profiles;

drop index if exists public.idx_user_profiles_auth_user_id;

drop table if exists public.user_profiles;

create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_players_auth_user_id
  on public.players (auth_user_id);

create or replace trigger trg_players_updated_at
before update on public.players
for each row
execute function public.set_updated_at();

alter table public.players enable row level security;

grant all on table public.players to anon;
grant all on table public.players to authenticated;
grant all on table public.players to service_role;
