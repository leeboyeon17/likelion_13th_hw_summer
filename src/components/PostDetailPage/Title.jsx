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
  color: var(--text2);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
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
                        <button className="like-btn">
                            <Heart src="/public/heart.png" alt="좋아요"/> {heartcount}
                        </button>
                    </Right>
                </SubWrapper>
            </div>
            </>
    );
}

//export
export default Title;