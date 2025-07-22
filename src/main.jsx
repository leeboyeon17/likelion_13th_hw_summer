//A. namespace import 방식
//: 전체 모듈을 객체로 받아서 접근
//: 어떤 모듈에서 나왔는지 명확하다는 장점
import React from "react";
import ReactDOM from "react-dom/client";

//B. named import 방식(더 적합 .......?!?)
//: 필요한 것만 골라서 불러옴
//: 코드가 짧고 가볍다는 장점
//import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

//RouterProvider(라우터 제공자)
//: createBrowserRouter로 생성된 라우터 객체를 애플리케이션에 주입하는 컴포넌트
//: router props를 통해 라우터 구성(라우팅 규칙)을 전달받아 앱의 모든 컴포넌트에서 라우팅 기능을 사용할 수 있음
//: 애플리케이션의 최상단(as main.jsx, index.jsx)에 위치하여 앱 전체를 라우터 구성으로 감싸 정의된 라우트에 따라 라우팅이 가능하게 함
import { RouterProvider } from "react-router-dom";

// ./router.js 파일에서 정의한 라우터 설정을 가져옴
import router from "./router"; 


//-----------------//
import "./index.css"; //얘도 App.jsx로 이동..? ㄴㄴ 일단 두고 나중에 깔끔하게 리팩토링ㄱㄱ
//import HomePage from "./pages/HomePage.jsx"; 이거는 HomePage를 이제 직접 import 하지 않고, 라우터로 연결한 router객체를 import 하니까 필요없는 부분임!
//-----------------//


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* 생성된 'router' 객체를 이곳에 전달하여 앱 전체에 라우팅 기능을 제공. */}
    </React.StrictMode>
  </>
);


//라우터 안 쓸 때 코드(지난주차)
//createRoot(document.getElementById("root")).render(
//  <StrictMode>
//    <HomePage />
//  </StrictMode>
//);