import { Link } from "react-router-dom";

function Postcard({ postID, thumbnail, title, content, date, commentcount, profileImg, writer, heartcount }) {
  return (
    <div className="postcard">
      <Link to={`/detail/${postID}`}>
        <img src={thumbnail} alt={title} className="postcard_thumbnail" />
      </Link>
      <div className="postcard_content">
        <div>
          <Link to={`/detail/${postID}`}>
          <h3 className="postcard_title">{title}</h3>
          <p className="postcard_summary">{content}</p>
          </Link>
        </div>
        <div className="postcard_subInfo">
          <span>{date} · {commentcount}개의 댓글</span>
        </div>
      </div>
      <div className="postcard_footer">
          <Link to={`/detail/${postID}`} className="postcard_userInfo">
          <img src={profileImg} alt={writer} className="profile_Img" />
          <span>by <b>{writer}</b></span>
          </Link>
          <div className="postcard_likes">
            <img src="/public/heart.png" alt="좋아요" width="10px" height="10px" /> {heartcount}
          </div>
      </div>
    </div>
  );
}

export default Postcard;
