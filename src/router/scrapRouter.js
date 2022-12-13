import { Router } from 'express';
import scrapController from '../controller/scrapController';

const router = Router();

//스크랩하기  POST /api/scrap
router.post('/', scrapController.postScrap);

//스크랩한 게시글 리스트 가져오기  GET /api/scrap
router.get('/', scrapController.getScrap);

//스크랩 여부 가져오기  GET /api/scrap/:postId
router.get('/:postId', scrapController.getIsScrap);


module.exports = router;