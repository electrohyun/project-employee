do $$
begin
  if not exists (
    select 1 from pg_type where typname = 'quest_progress_status'
  ) then
    create type public.quest_progress_status as enum ('active', 'completed');
  end if;
end
$$;

create table if not exists public.player_quest_progress (
  id bigint generated always as identity primary key,
  player_id uuid not null references public.players (id) on delete cascade,
  quest_id text not null references public.quests (quest_id) on delete cascade,
  status public.quest_progress_status not null,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (player_id, quest_id)
);

create or replace trigger trg_player_quest_progress_updated_at
before update on public.player_quest_progress
for each row
execute function public.set_updated_at();
