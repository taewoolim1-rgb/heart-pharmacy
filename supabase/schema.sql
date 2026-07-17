-- Run this once in the Supabase SQL Editor (Project > SQL Editor > New query).
-- Creates the table backing the "소식 및 공지사항" (News & Notices) board.

create table if not exists public.notices (
  id text primary key,
  "titleKo" text not null,
  "titleEn" text not null default '',
  "titleZh" text not null default '',
  "contentKo" text not null default '',
  "contentEn" text not null default '',
  "contentZh" text not null default '',
  date text not null,
  views integer not null default 0,
  created_at timestamptz not null default now()
);

-- Row Level Security is enabled with no policies: only requests using the
-- service_role key (held server-side by the Vercel API function, never sent
-- to the browser) can read/write this table. Anonymous/public clients get
-- nothing directly from Supabase — they only ever talk to our own /api/notices
-- endpoints.
alter table public.notices enable row level security;

-- Seed the same three starter announcements the site shipped with, so the
-- board isn't empty right after the table is created. Safe to re-run.
insert into public.notices (id, "titleKo", "titleEn", "titleZh", "contentKo", "contentEn", "contentZh", date, views)
values
  (
    '1',
    '[공지] 2026년 하절기 휴가 기간 야간 정상 조제 업무 안내',
    '[Notice] Guide to Late-Night Compounding Services During 2026 Summer Vacation',
    '[公告] 2026夏季休假期间正常配药指南',
    '안녕하세요. 제주 연동의 365일 연중무휴 야간 조제 약국, 제주마음약국입니다.',
    'Hello, this is Jeju Heart Pharm, your 365-day late-night compounding pharmacy in Yeondong, Jeju.',
    '您好，这里是位于济州莲洞、365天全年无休的夜间配药药店——济州心药店。',
    '2026.07.12',
    45
  ),
  (
    '2',
    '[장비 도입] 정밀 ATC 자동 포장 조제 머신 2호기 업그레이드 완료',
    '[Equipment] Precision ATC Auto-Packaging Compounding Machine Unit 2 Upgrade Completed',
    '[设备引进] 高精度 ATC 自动包装分药机2号机升级完毕',
    '제주마음약국은 보다 정밀하고 위생적이며 신속한 조제 서비스를 실현하기 위해 최첨단 ATC 2호기를 업그레이드 완료하였습니다.',
    'Jeju Heart Pharm has upgraded our second ATC unit to the latest premium model to achieve more precise, hygienic, and rapid compounding services.',
    '济州心药店为了实现更精准、更卫生、更快速的配药服务，已将第2台尖端ATC机全面升级为最新款高端机型。',
    '2026.06.28',
    28
  ),
  (
    '3',
    '[예방 안내] 제주 관광객 여름철 모기 및 풀벌레 물림 예방 수칙',
    '[Prevention] Summer Mosquito and Wild Bug Bite Prevention Rules for Jeju Tourists',
    '[预防指南] 济州游客夏季防蚊虫叮咬注意事项',
    '본격적인 여름철을 맞아 제주도의 아름다운 숲길, 오름, 그리고 야외 잔디밭을 찾으시는 관광객분들이 급증하고 있습니다.',
    'With the peak summer season, many tourists are visiting Jeju''s beautiful forest paths, oreums, and outdoor lawns.',
    '随着盛夏时节的到来，前往济州岛美丽的林荫路、寄生火山以及户外草地的游客急剧增加。',
    '2026.06.15',
    62
  )
on conflict (id) do nothing;
