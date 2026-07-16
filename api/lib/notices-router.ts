import express from 'express';
import type { NoticeStore } from './notice-store';

// Shared secret gating writes to the notice board. Defaults to the pharmacy's
// existing passcode so the site keeps working with zero extra configuration;
// set ADMIN_PASSCODE in the deployment environment to override it.
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || '73103110';

function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.header('x-admin-passcode') !== ADMIN_PASSCODE) {
    return res.status(401).json({ error: 'Admin authentication required' });
  }
  next();
}

function errorDetail(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

/**
 * `getStore` is a lazy getter (not an already-constructed store) so that a
 * misconfigured backend (e.g. a malformed SUPABASE_URL) throws from inside
 * a request's try/catch below instead of crashing the whole serverless
 * function at module load — which surfaces as an opaque
 * FUNCTION_INVOCATION_FAILED page with no diagnosable error.
 */
export function createNoticesRouter(getStore: () => NoticeStore) {
  const router = express.Router();

  router.get('/notices', async (_req, res) => {
    try {
      res.json(await getStore().list());
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch notices', detail: errorDetail(err) });
    }
  });

  router.post('/notices', requireAdmin, async (req, res) => {
    try {
      res.status(201).json(await getStore().create(req.body));
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add notice', detail: errorDetail(err) });
    }
  });

  router.put('/notices/:id', requireAdmin, async (req, res) => {
    try {
      const updated = await getStore().update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: 'Notice not found' });
      res.json(updated);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update notice', detail: errorDetail(err) });
    }
  });

  router.delete('/notices/:id', requireAdmin, async (req, res) => {
    try {
      await getStore().remove(req.params.id);
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete notice', detail: errorDetail(err) });
    }
  });

  router.post('/notices/:id/view', async (req, res) => {
    try {
      const views = await getStore().incrementView(req.params.id);
      if (views === null) return res.status(404).json({ error: 'Notice not found' });
      res.json({ views });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to increment view', detail: errorDetail(err) });
    }
  });

  return router;
}
