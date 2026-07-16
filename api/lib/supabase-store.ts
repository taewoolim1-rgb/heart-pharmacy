import { randomUUID } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';
import type { NoticeItem } from '../../src/types';
import type { NewNoticeInput, NoticeStore } from './notice-store';

const TABLE = 'notices';
const COLUMNS = 'id, titleKo, titleEn, titleZh, contentKo, contentEn, contentZh, date';

export function createSupabaseStore(): NoticeStore {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set to use the Supabase notice store');
  }
  const client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false }
  });

  return {
    async list() {
      const { data, error } = await client
        .from(TABLE)
        .select(COLUMNS)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as NoticeItem[];
    },

    async create(input: NewNoticeInput) {
      const row = {
        id: randomUUID(),
        ...input
      };
      const { data, error } = await client.from(TABLE).insert(row).select(COLUMNS).single();
      if (error) throw error;
      return data as unknown as NoticeItem;
    },

    async update(id: string, patch: Partial<NoticeItem>) {
      const { id: _ignored, ...fields } = patch;
      const { data, error } = await client
        .from(TABLE)
        .update(fields)
        .eq('id', id)
        .select(COLUMNS)
        .maybeSingle();
      if (error) throw error;
      return (data as unknown as NoticeItem) ?? null;
    },

    async remove(id: string) {
      const { error } = await client.from(TABLE).delete().eq('id', id);
      if (error) throw error;
    }
  };
}
