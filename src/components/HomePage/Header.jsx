function Header() {
  return (
    <header className="container">
      {<div className="Header_innerBlock">
        <div className="HeaderLogo_block">
            <a><img src="src/assets/logo.svg" alt="로고" width="71" height="24"/></a> {/* url 미정이어서 a 태그 내부 href 공란 */}
        </div>
        <div className="Header_right">
            <a><img src="src/assets/bell.png" alt="알림" width="30" height="30"/></a>
            <a><img src="src/assets/search.png" alt="탐색" width="24" height="24"/></a>
            <button>로그인</button>
        </div>
        </div>}
    </header>

  );
}

export default Header;
