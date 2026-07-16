import type { NoticeStore } from './notice-store';
import { createSupabaseStore } from './supabase-store.js';
import { createFileStore } from './file-store.js';

let store: NoticeStore | null = null;

export function getNoticeStore(): NoticeStore {
  if (!store) {
    store = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
      ? createSupabaseStore()
      : createFileStore();
  }
  return store;
}
