alter table if exists public.player_quest_progress
  drop constraint if exists player_quest_progress_player_id_fkey;

alter table if exists public.player_quest_progress
  add constraint player_quest_progress_player_id_fkey
  foreign key (player_id)
  references public.players (id)
  on delete cascade;
