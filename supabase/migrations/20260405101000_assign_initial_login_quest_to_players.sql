create or replace function public.assign_initial_login_quest()
returns trigger
language plpgsql
as $$
begin
  insert into public.player_quest_progress (
    player_id,
    quest_id,
    status
  ) values (
    new.id,
    'login_success',
    'active'
  )
  on conflict (player_id, quest_id) do nothing;

  return new;
end;
$$;

create or replace trigger trg_players_assign_initial_login_quest
after insert on public.players
for each row
execute function public.assign_initial_login_quest();

insert into public.player_quest_progress (
  player_id,
  quest_id,
  status
)
select
  players.id,
  'login_success',
  'active'
from public.players
on conflict (player_id, quest_id) do nothing;
