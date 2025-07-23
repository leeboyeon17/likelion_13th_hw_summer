//1. 상세 페이지 컴포넌트에서 게시글 ID를 URL에서 받아오고
//2. 거기에 맞춰 API 요청을 보낸 다음
//3. 데이터를 Title 컴포넌트에 props로 넘겨줘야 함

//------------------------------------------------------------------//

import { styled } from "styled-components";

//스타일 컴포넌트 정의
const TitleStyle = styled.h1`
  color: #181818;
`
const SubWrapper = styled.div`
  font-size: 1rem;
  color: #495057;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`
const Left = styled.div`
  display: flex;
`
const Right = styled.div`
  font-size: 1rem;
  color: #495057;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`
const LikeBtn = styled.button`
  background: #FFFFFF;
  color: #808080;
    border: 1px solid #ADB5BD;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    -webkit-box-align: center;
    align-items: center;
    height: 1.5rem;
   border-radius: 30px;
  font-weight: 700;
  width: 96px;
  height: 32px;
`
const Heart = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 20px; 
`

//컴포넌트 함수 정의
function Title({postID, title, writer, date, heartcount}) {

    console.log("제목 확인:", title);
    console.log("작성자 확인:", writer);

    return (
            <>
            <div className="container">
                <TitleStyle>{title}</TitleStyle>
                <SubWrapper>
                    <Left><b>{writer}</b> · {date}</Left>
                    <Right>
                        <button className="follow-btn">팔로우</button>
                        <LikeBtn className="like-btn">
                            <Heart src="/public/heart.png" alt="좋아요"/>{heartcount}
                        </LikeBtn>
                    </Right>
                </SubWrapper>
            </div>
            </>
    );
}

//export
export default Title;