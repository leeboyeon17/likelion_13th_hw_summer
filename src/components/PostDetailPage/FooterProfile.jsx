import { styled } from "styled-components";

//스타일 컴포넌트 정의
const Wrapper = styled.div` //이때 정의하는 변수명은 전역x??
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  margin: 10rem auto 6rem auto;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
`
const ProfileImg = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
`
const Name = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: var(--text1);
`

//컴포넌트 함수 정의
function FooterProfile({postID, profileImg, writer}) {

    console.log("프로필사진 확인:", profileImg);
    console.log("작성자 확인:", writer);

    return (
        <>
        <Wrapper>
            <Profile>
                <ProfileImg img src={profileImg} alt={writer} />
                <Name>{writer}</Name>
            </Profile>
            <button className="follow-btn">팔로우</button>
        </Wrapper>
        </>
    );
}

//export
export default FooterProfile;