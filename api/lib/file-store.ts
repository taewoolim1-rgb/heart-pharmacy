import path from 'path';
import fs from 'fs';
import type { NoticeItem } from '../../src/types';
import type { NewNoticeInput, NoticeStore } from './notice-store';

const NOTICES_FILE = path.join(process.cwd(), 'notices.json');

const DEFAULT_NOTICES: NoticeItem[] = [
  {
    id: '1',
    titleKo: '[공지] 2026년 하절기 휴가 기간 야간 정상 조제 업무 안내',
    titleEn: '[Notice] Guide to Late-Night Compounding Services During 2026 Summer Vacation',
    titleZh: '[公告] 2026夏季休假期间正常配药指南',
    contentKo: '안녕하세요. 제주 노형오거리의 365일 연중무휴 야간 조제 약국, 제주마음약국입니다.',
    contentEn: 'Hello, this is Jeju Heart Pharm, your 365-day late-night compounding pharmacy at Nohyeong Five-way Intersection, Jeju.',
    contentZh: '您好，这里是位于济州老衡五岔路口、365天全年无休的夜间配药药店——济州心药店。',
    date: '2026.07.12',
    views: 45
  },
  {
    id: '2',
    titleKo: '[장비 도입] 정밀 ATC 자동 포장 조제 머신 2호기 업그레이드 완료',
    titleEn: '[Equipment] Precision ATC Auto-Packaging Compounding Machine Unit 2 Upgrade Completed',
    titleZh: '[设备引进] 高精度 ATC 自动包装分药机2号机升级完毕',
    contentKo: '제주마음약국은 보다 정밀하고 위생적이며 신속한 조제 서비스를 실현하기 위해 최첨단 ATC 2호기를 업그레이드 완료하였습니다.',
    contentEn: 'Jeju Heart Pharm has upgraded our second ATC unit to the latest premium model to achieve more precise, hygienic, and rapid compounding services.',
    contentZh: '济州心药店为了实现更精准、更卫生、更快速的配药服务，已将第2台尖端ATC机全面升级为最新款高端机型。',
    date: '2026.06.28',
    views: 28
  },
  {
    id: '3',
    titleKo: '[예방 안내] 제주 관광객 여름철 모기 및 풀벌레 물림 예방 수칙',
    titleEn: '[Prevention] Summer Mosquito and Wild Bug Bite Prevention Rules for Jeju Tourists',
    titleZh: '[预防指南] 济州游客夏季防蚊虫叮咬注意事项',
    contentKo: '본격적인 여름철을 맞아 제주도의 아름다운 숲길, 오름, 그리고 야외 잔디밭을 찾으시는 관광객분들이 급증하고 있습니다.',
    contentEn: "With the peak summer season, many tourists are visiting Jeju's beautiful forest paths, oreums, and outdoor lawns.",
    contentZh: '随着盛夏时节的到来，前往济州岛美丽的林荫路、寄生火山以及户外草地的游客急剧增加。',
    date: '2026.06.15',
    views: 62
  }
];

function load(): NoticeItem[] {
  try {
    if (fs.existsSync(NOTICES_FILE)) {
      return JSON.parse(fs.readFileSync(NOTICES_FILE, 'utf-8'));
    }
  } catch (err) {
    console.error('Failed to load notices file:', err);
  }
  save(DEFAULT_NOTICES);
  return DEFAULT_NOTICES;
}

function save(notices: NoticeItem[]) {
  fs.writeFileSync(NOTICES_FILE, JSON.stringify(notices, null, 2), 'utf-8');
}

/**
 * Local-disk store used only for `npm run dev` when no Supabase credentials
 * are configured. Not used in the deployed Vercel app — serverless function
 * instances don't share a persistent disk, so this store must never back
 * production traffic.
 */
export function createFileStore(): NoticeStore {
  return {
    async list() {
      return load();
    },

    async create(input) {
      const notices = load();
      const notice: NoticeItem = { id: Date.now().toString(), views: 0, ...input };
      save([notice, ...notices]);
      return notice;
    },

    async update(id, patch) {
      const notices = load();
      const index = notices.findIndex((n) => n.id === id);
      if (index === -1) return null;
      notices[index] = { ...notices[index], ...patch, id };
      save(notices);
      return notices[index];
    },

    async remove(id) {
      const notices = load();
      save(notices.filter((n) => n.id !== id));
    },

    async incrementView(id) {
      const notices = load();
      const notice = notices.find((n) => n.id === id);
      if (!notice) return null;
      notice.views = (notice.views || 0) + 1;
      save(notices);
      return notice.views;
    }
  };
}
