/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabId = 'home' | 'location' | 'news';

export type Language = 'ko' | 'en' | 'zh';

export interface NoticeItem {
  id: string;
  titleKo: string;
  titleEn: string;
  titleZh: string;
  contentKo: string;
  contentEn: string;
  contentZh: string;
  date: string;
  views: number;
}
