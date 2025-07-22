//1. 상세 페이지 컴포넌트에서 게시글 ID를 URL에서 받아오고
//2. 거기에 맞춰 API 요청을 보낸 다음
//3. 데이터를 Title 컴포넌트에 props로 넘겨줘야 함


function Title({postID, title, writer, date, heartcount}) {

    console.log("제목 확인:", title);
    console.log("작성자 확인:", writer);

    return (
            <>
            <div className="container">
                <h1>{title}</h1>
                <div className="titleInfo">
                    <div><b>{writer}</b> · {date}</div>
                    <div>
                        <button className="follow-btn">팔로우</button>
                        <button className="like-btn">
                            <img src="src/assets/heart.png" alt="좋아요" width="10px" height="10px" /> {heartcount}
                        </button>
                    </div>
                </div>
                <div className=""></div>
            </div>
            </>
    );
}


export default Title;