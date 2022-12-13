import { Router } from 'express';
import postRouter from './postRouter.js';
import scrapRouter from './scrapRouter.js';

const router = Router();

router.use('/post', postRouter);
router.use('/scrap', scrapRouter);

export default router;