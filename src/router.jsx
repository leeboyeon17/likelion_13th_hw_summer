//creatBrowserRouter(핵심 라우터 생성 함수)
//: 라우터 인스턴스를 생성하는 함수
//: 애플리케이션의 모든 라우팅 규칙(경로, 컴포넌트, 중첩 라우팅 등)을 JS객체 형태로 정의된 배열을 인자로 받음
//: 배열 안에 라우트 객체들을 설정하고, 이들이 어떤 컴포넌트를 렌더링할지를 정의함.
import { createBrowserRouter } from "react-router-dom";

//각 컴포넌트 import ((?))
import App from "./App";//가장 큰 그릇인 App import
import HomePage from "./pages/HomePage";//페이지1 import
import PostDetailPage from "./pages/PostDetailPage";//페이지2 import

//-----------------------------------------//

//router 정의
//정의한 객체: Router(경로 정의 객체)
//사용한 함수: createBrowserRouter(핵심 라우터 생성 함수)
//이 함수가 반환하는 router 객체는 RouterProvider 컴포넌트에 전달되어 실제 라우팅 기능을 활성화
const router = createBrowserRouter([
  {
    path: "/", // 루트 경로
    element: <App />, // 공통 레이아웃
    //: 조건이 해당되면 보여줄 element를 표현, <Component/>와 같은 형식으로 전달
    children: [{ path: "/", element: <HomePage /> },
    //: 해당 Route 아래에 중첩되는 하위 경로들을 정의할 때 사용
      { path: "/detail/:postId", element: <PostDetailPage /> }
      // : 이 붙어있으면 동적 변수로 인식함
      //:postId 등등=>"동적 라우트 파라미터"
      //=>PostDetailPage 컴포넌트 안에서 useParams()로 받을 수 있음

    ],
  },
]);

export default router;
//createBrowserRouter로 router 객체 생성 완료