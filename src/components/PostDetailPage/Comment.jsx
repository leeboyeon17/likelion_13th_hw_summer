function Comment({postID, commentcount}) {

    console.log("댓글수 확인:", commentcount);

    return (
        <>
        <div className="comment_container">
            <h4>{commentcount}개의 댓글</h4>
            <div>
                <textarea placeholder="댓글을 작성하세요" />
                <div className="button-wrapper"><button className="comment-btn">댓글작성</button></div>
            </div>
            <div><br/>@@@댓글리스트@@@</div>
        </div>
        </>
    );
}


export default Comment;