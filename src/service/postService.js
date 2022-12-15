//전체 게시글 리스트 불러오기  GET /api/post
const getPost = async() => {
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
