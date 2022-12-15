import postService from "../service/postService.js";

//전체 게시글 리스트 불러오기  GET /api/post
const getPost = async (req, res) => {
    const data = await postService.getPost();
    return res.status(200).json({ status: 200, message: '게시글 상세보기 성공', data});
};

//게시글 작성하기  POST /api/post
const postPost = async(req, res) => {

};

//게시글 상세보기  GET /api/post/:postId
const getPostDetail = async(req, res) => {
    try {
        const data = await postService.getPostDetail();
        return res.status(200).json({ status: 200, message: '채은: 게시글 상세보기 성공', data });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ status: 500, message: '서버 에러' });
    }
};

export default {
    getPost,
    postPost,
    getPostDetail
}