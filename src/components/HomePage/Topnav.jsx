function Topnav() {
  return (
    <nav className="container">
    <div>
      <div className="HomeTab_left">
        <a><img src="src/assets/arrow-upper-right.png" alt="화살표" />트렌딩</a>
        <a><img src="src/assets/clock.png" alt="시계" />최신</a>
        <a><img src="src/assets/wifi-signal.png" alt="피드" />피드</a>
      </div>
    </div>
    <div className="HomeTab_right">
        <div className="HomeTab_selector">
            이번 주<img src="src/assets/caret-down.png" alt="필터링" width="10" />
        </div>
        <img src="src/assets/dots.png" alt="더보기" height="21" width="21" padding="0" className="HomeTab_extra"/>
        {/*
        <select name="star">
          <option value="이번 주">이번 주</option>
          <option value="1">공지사항</option>
          <option value="2">태그 목록</option>
          <option value="3">서비스 정책</option>
          <option value="4">Slack</option>
          <option value="5">문의</option>
        </select>*/}
    </div>
    </nav>

  );
}

export default Topnav;
