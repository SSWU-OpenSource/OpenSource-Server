import { Router } from 'express';
import postController from '../controller/postController.js';

const router = Router();

//게시글 상세보기  GET /api/post/:postId
router.get('/:postId', postController.getPostDetail);

//전체 게시글 리스트 불러오기  GET /api/post
router.get('/', postController.getPost);

//게시글 작성하기  POST /api/post
router.post('/', postController.postPost);


//module.exports = router;
export default router;