/**  DB 연결 부분 - MySQL 서버 파면 주석 제거하기 **/
import dbConfig from "../db/dbConfig.js";


//전체 게시글 리스트 불러오기  GET /api/post
const getPost = async() => {
    return;
};

//게시글 작성하기  POST /api/post
const postPost = async() => {
    return;
};

//게시글 상세보기  GET /api/post/:postId
const getPostDetail = async() => {
    return {
        "id": 1,
        "title": "첫 번째 게시글 제목",
        "content": "첫 번째 게시글 내용"
    };
};


export default {
    getPost,
    postPost,
    getPostDetail
}