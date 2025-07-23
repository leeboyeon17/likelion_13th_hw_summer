import { styled } from "styled-components";

//최상위 Wrapper
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`
//Left
const HeaderLeft = styled.div`
  display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    color: #212529;
    font-size: 1.3125rem;
    text-decoration: none;
    font-family: "Fira Mono", monospace;
    gap: 10px;
`
const Logo = styled.img`
  width: 35px;
  height: 35px;
`
const LogoName = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`

//Right
const HeaderRight = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  //gap: 16px;
`
const HeaderIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  //In combination with 'float' and 'position',
  //determines the type of box or boxes that are generated for an element.
  -webkit-box-align: center;
  -webkit-box-pack: center;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  //color: #212529;
  //background: transparent; //지금은 svg라서 의미x
  *&:hover {
    background-color: #e5e5e5;
  } 
`
const LoginBtn = styled.button`
  height: 32px;
  width: 80px;
  border-radius: 100px;
  background-color: #2b2b2b;
  color: rgba(255, 255, 255, 0.87);
  padding: 0;
  font-weight: 600;
`

//컴포넌트 함수 정의
function Header({writer}) {

  console.log("작성자 확인:", writer);

  return (
    <header className="container">
      {<HeaderWrapper>
        <HeaderLeft>
            <Logo img src="/public/v.png" alt="v" width="71" height="24"/> 
            <LogoName>{writer}.log</LogoName>
        </HeaderLeft>
        <HeaderRight>
            <HeaderIcon><img src="/public/bell.png" alt="알림" width="25" height="25"/></HeaderIcon>
            <HeaderIcon><img src="/public/search.png" alt="탐색" width="19" height="19"/></HeaderIcon>
            <LoginBtn>로그인</LoginBtn>
        </HeaderRight>
      </HeaderWrapper>}
    </header>

  );
}

//export
export default Header;
