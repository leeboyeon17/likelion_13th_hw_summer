function Title({thumbnail, content}) {

    console.log("본문 확인:", content);
    
    return (
            <div className="container">
            <img src={thumbnail} alt="썸네일"/>
            <div className="body_container">
                <p>{content}</p>
            </div>
            </div>
    );
}


export default Title;