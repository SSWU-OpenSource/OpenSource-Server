import dbConfig from "../db/dbConfig.js";


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
    return {
        "is_scrap": true
    };
};


export default {
    postScrap,
    getScrap,
    getIsScrap
}