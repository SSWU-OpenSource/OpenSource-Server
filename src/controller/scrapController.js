import scrapService from "../service/scrapService.js";

//스크랩하기  POST /api/scrap
const postScrap = async(req, res) => {

};

//스크랩한 게시글 리스트 가져오기  GET /api/scrap
const getScrap = async(req, res) => {

};


//스크랩 여부 가져오기  GET /api/scrap/:postId
const getIsScrap = async(req, res) => {
    try {
        const data = await scrapService.getIsScrap();
        return res.status(200).json({ status: 200, message: '채은: 스크랩 여부 조회 성공', data });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ status: 500, message: '서버 에러' });
    }
};

export default {
    postScrap,
    getScrap,
    getIsScrap
}