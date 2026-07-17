/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, TabId } from './types';

export const SITE_URL = 'https://heart-pharm.com';

// Path prefix used in the URL for each language. Korean has no prefix (default/canonical language).
export const LANG_PREFIX: Record<Language, string> = {
  ko: '',
  en: '/en',
  zh: '/zh',
};

// Tab path segment (home has no segment).
export const TAB_PATH: Record<TabId, string> = {
  home: '',
  location: '/location',
  news: '/news',
};

export function buildPath(lang: Language, tab: TabId): string {
  const path = `${LANG_PREFIX[lang]}${TAB_PATH[tab]}`;
  return path === '' ? '/' : path;
}

interface SeoEntry {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

type SeoTable = Record<TabId, Record<Language, SeoEntry>>;

export const SEO: SeoTable = {
  home: {
    ko: {
      title: '늘 가까운 이웃, 한라병원 옆 제주마음약국 | 신제주·연동 야간약국',
      description:
        '제주 신제주·연동 한라병원 바로 옆, 365일 연중무휴 야간 조제 약국 제주마음약국입니다. 처방 조제부터 리쥬란·리쥬올 등 약국화장품, 애크논·아렉스·노스카나 트러블·흉터 케어, 멜라토닝·비판텐 상비약까지 안내합니다.',
      ogTitle: '늘 가까운 이웃, 한라병원 옆 제주마음약국',
      ogDescription: '제주 신제주·연동 한라병원 바로 옆, 365일 연중무휴 야간 조제 약국입니다.',
    },
    en: {
      title: 'Heart Pharm | 24/7 Night Pharmacy Next to Halla Hospital, Jeju',
      description:
        'Heart Pharm is a 365-day night-dispensing pharmacy located right next to Halla Hospital in Yeon-dong, Jeju. Prescription dispensing, Rejuran/Rejuvel skincare, and trusted OTC medicine for visitors and residents.',
      ogTitle: 'Heart Pharm | Night Pharmacy Next to Halla Hospital, Jeju',
      ogDescription: 'Located next to Halla Hospital in Yeon-dong, Jeju. Open 365 days a year.',
    },
    zh: {
      title: '济州心药店 | 韩拉医院旁的济州夜间药局，丽珠兰·皮肤护理专业药局',
      description:
        '济州心药店位于济州新济州·莲洞韩拉医院旁，365天全年无休的夜间调剂药局。提供处方调配、丽珠兰·丽珠悦等药妆品，以及各类皮肤护理与常备药品咨询。',
      ogTitle: '济州心药店 | 韩拉医院旁的济州夜间药局',
      ogDescription: '位于济州新济州·莲洞韩拉医院旁，365天全年无休营业。',
    },
  },
  location: {
    ko: {
      title: '오시는 길 | 제주마음약국 (신제주·연동, 한라병원 옆)',
      description:
        '제주마음약국 오시는 길 안내입니다. 신제주·연동 한라병원 바로 옆에 위치하며, 자가용·대중교통 이용 방법과 주차 안내를 확인하실 수 있습니다.',
      ogTitle: '오시는 길 | 제주마음약국',
      ogDescription: '신제주·연동 한라병원 바로 옆, 제주마음약국 위치 안내입니다.',
    },
    en: {
      title: 'Directions | Heart Pharm, Jeju (Next to Halla Hospital)',
      description:
        'Directions to Heart Pharm in Yeon-dong, Jeju — located right next to Halla Hospital. Find driving, public transit, and parking information here.',
      ogTitle: 'Directions | Heart Pharm, Jeju',
      ogDescription: 'Located next to Halla Hospital in Yeon-dong, Jeju.',
    },
    zh: {
      title: '交通路线 | 济州心药店（韩拉医院旁）',
      description:
        '济州心药店交通路线指南。药店位于济州新济州·莲洞韩拉医院旁，提供自驾、公共交通及停车信息。',
      ogTitle: '交通路线 | 济州心药店',
      ogDescription: '位于济州新济州·莲洞韩拉医院旁的济州心药店交通指南。',
    },
  },
  news: {
    ko: {
      title: '소식 및 공지사항 | 제주마음약국',
      description: '제주마음약국의 최신 소식과 공지사항을 확인하세요.',
      ogTitle: '소식 및 공지사항 | 제주마음약국',
      ogDescription: '제주마음약국의 최신 소식과 공지사항입니다.',
    },
    en: {
      title: 'News & Notices | Heart Pharm, Jeju',
      description: 'Check the latest news and notices from Heart Pharm in Jeju.',
      ogTitle: 'News & Notices | Heart Pharm',
      ogDescription: 'Latest news and notices from Heart Pharm, Jeju.',
    },
    zh: {
      title: '新闻与公告 | 济州心药店',
      description: '查看济州心药店的最新新闻与公告。',
      ogTitle: '新闻与公告 | 济州心药店',
      ogDescription: '济州心药店的最新新闻与公告。',
    },
  },
};

export const HTML_LANG: Record<Language, string> = {
  ko: 'ko',
  en: 'en',
  zh: 'zh-Hans',
};
