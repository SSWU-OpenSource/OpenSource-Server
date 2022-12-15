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
const getPostDetail = async(postId) => {
    const pool = await dbConfig;
    const connection = await pool.getConnection();
    const query = 'SELECT * FROM postTbl';

    const result = await connection.query(query, postId);
    console.log(result);
    //Connection 할당 해제
    connection.release();

    return '안녕';
};


export default {
    getPost,
    postPost,
    getPostDetail
}