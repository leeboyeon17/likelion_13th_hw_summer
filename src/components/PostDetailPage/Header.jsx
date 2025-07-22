import { styled } from "styled-components";

//스타일 컴포넌트 정의
const Logo = styled.img`
  width: 28px;
  height: 28px;
`
const HeaderBtn = styled.div`
  padding: 5px;
  box-sizing: border-box;
  border-radius: 50%;
  *&:hover {
    background-color: #d8d8d8;
  }
`

//컴포넌트 함수 정의
function Header({writer}) {

  console.log("작성자 확인:", writer);

  return (
    <header className="container">
      {<div className="Header_innerBlock">
        <div className="HeaderLogo_block">
            <a>
              <Logo img src="/public/v.png" alt="v" width="71" height="24"/> {writer}.log
            </a> {/* url 미정이어서 a 태그 내부 href 공란 */}
        </div>
        <div className="Header_right">
            <HeaderBtn><img src="/public/bell.png" alt="알림" width="30" height="30"/></HeaderBtn>
            <HeaderBtn><img src="/public/search.png" alt="탐색" width="24" height="24"/></HeaderBtn>
            <button>로그인</button>
        </div>
        </div>}
    </header>

  );
}

//export
export default Header;
