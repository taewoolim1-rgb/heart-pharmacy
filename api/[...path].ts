import express from 'express';
import { createNoticesRouter } from './lib/notices-router.js';
import { getNoticeStore } from './lib/get-store.js';

const app = express();
app.use(express.json());
app.use('/api', createNoticesRouter(getNoticeStore));

export default app;
