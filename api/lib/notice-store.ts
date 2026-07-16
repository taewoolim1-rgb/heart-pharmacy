import type { NoticeItem } from '../../src/types';

export interface NewNoticeInput {
  titleKo: string;
  titleEn: string;
  titleZh: string;
  contentKo: string;
  contentEn: string;
  contentZh: string;
  date: string;
}

export interface NoticeStore {
  list(): Promise<NoticeItem[]>;
  create(input: NewNoticeInput): Promise<NoticeItem>;
  update(id: string, patch: Partial<NoticeItem>): Promise<NoticeItem | null>;
  remove(id: string): Promise<void>;
}
