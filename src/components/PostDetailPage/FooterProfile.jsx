function FooterProfile({postID, profileImg, writer}) {

    console.log("프로필사진 확인:", profileImg);
    console.log("작성자 확인:", writer);

    return (
        <>
        <div className="footerprofile_container">
            <div>
                <img src={profileImg} alt={writer} />
                <span id="name">{writer}</span>
            </div>
            <button className="follow-btn">팔로우</button>
        </div>
        </>
    );
}


export default FooterProfile;