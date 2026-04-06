do $$
begin
  if not exists (
    select 1 from pg_type where typname = 'quest_type'
  ) then
    create type public.quest_type as enum ('main', 'sub');
  end if;
end
$$;

create table if not exists public.quests (
  id bigint generated always as identity primary key,
  quest_id text not null unique,
  quest_number integer unique,
  name text not null,
  description text,
  quest_type public.quest_type not null,
  completion_condition text not null
);

insert into public.quests (
  quest_id,
  quest_number,
  name,
  description,
  quest_type,
  completion_condition
) values (
  'login_success',
  1,
  '비밀의 기업',
  '이지스 인프라스트럭쳐 인트라넷에 접속했다.',
  'main',
  'story_login_success'
);