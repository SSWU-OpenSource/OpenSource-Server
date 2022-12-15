//스크랩하기  POST /api/scrap
const postScrap = async() => {
    return;
};

//스크랩한 게시글 리스트 가져오기  GET /api/scrap
const getScrap = async() => {
    return {
        "posts": [
            {
                "id": 1,
                "title": "첫 번째 게시글 제목",
                "content": "첫 번째 게시글 내용"
            },
            {
                "id": 2,
                "title": "두 번째 게시글 제목",
                "content": "두 번째 게시글 내용"
            },
            {
                "id": 3,
                "title": "세 번째 게시글 제목",
                "content": "세 번째 게시글 내용"
            }
        ]
    };
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
