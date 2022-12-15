//스크랩하기  POST /api/scrap
const postScrap = async() => {
    return;
};

//스크랩한 게시글 리스트 가져오기  GET /api/scrap
const getScrap = async() => {
    return;
};


//스크랩 여부 가져오기  GET /api/scrap/:postId
const getIsScrap = async() => {
    // /**  DB 연결 부분 - MySQL 서버 파면 주석 제거하기 **/
    // const pool = await dbConfig;
    // const connection = await pool.getConnection();
    // const query = 'SELECT * FROM user';
    // const result = await connection.query(query);
    // //Connection 할당 해제
    // connection.release();
    return;
};


export default {
    postScrap,
    getScrap,
    getIsScrap
}
