//App.jsx: 가장 큰 그릇. 최상위 레이아웃 컴포넌트로 애플리케이션의 전반적인 레이아웃을 담당
//Outlet: 라우트와 일치하는 컴포넌트를 렌더링함

import { styled, ThemeProvider } from "styled-components";

//라우터 자식 컴포넌트를 보여주기 위한 핵심 도구인 <Outlet />을 사용하기 위한 import
//이후에는 <Outlet />이 있어야만 children으로 등록한 컴포넌트들이 제대로 보여질 수 있음
import { Outlet } from "react-router-dom";

//---------------------------------------------//

//'Wrapper' 정의
const Wrapper = styled.div`
  //* {border: 1px solid black;}
`;

//Wrapper를 출력하는 'Layout' 정의
const Layout = () => {
  return (
    <>
      <Wrapper>
        <h3>헤헤 신나는 벨로그 만들기//</h3> { /*공통헤더*/ }
        <Outlet />
      </Wrapper>
    </>
  );
};

//Layout을 출력하는 'App' 함수 정의
function App() {
  return (
    <>
      <Layout />
    </>
  );
}

//App을 export
export default App;
