import express from 'express';
import postRouter from './postRouter';
import scrapRouter from './scrapRouter';

const router = express.Router();

router.use('/post', postRouter);
router.use('/scrap', scrapRouter);

module.exports = router;