import { Router } from 'express';

const router = Router();

//스크랩하기  POST /api/scrap
router.post('/', );

//스크랩한 게시글 리스트 가져오기  GET /api/scrap
router.get('/', );

//스크랩 여부 가져오기  GET /api/scrap/:postId
router.get('/:postId', );


module.exports = router;