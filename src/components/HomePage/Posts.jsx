import Postcard from "./Postcard";
import { useEffect, useState } from "react";
import axios from "axios";
//import axiosInstance from "../api/axiosInstance"; baseURL 미리 지정할 수 있다는 장점

function Posts() {
  const [posts, setPosts] = useState([]); //posts라는 state(상태) 변수 선언
  // ㄴposts: 현재 상태 값(게시글 목록 배열)
  // ㄴsetPosts: 그 값을 바꾸는 함수
  
  // <<이후 흐름>>
  // ㄴsetPosts(...): 상태를 API 응답(현재 'reponse')으로 갱신
  // ㄴposts.map(...): 상태 값을 기반으로 컴포넌트 반복 렌더링

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/boards`); //응답을 정의
        console.log("✨메인페이지 응답 데이터 구조:", response); //응답 데이터 구조 콘솔 확인
        setPosts(response.data); //받아온 데이터 화면에 보이도록(콘솔로 확인한 응답 구조 확인 후 알 수 있는 정보!! response에서 data라는 객체를 가져옴)
      } catch (err) {//에러
        console.error("API 호출 에러:", err);
      }
    };
    fetchPosts();
  }, []);

  //console.log("posts 상태 확인:", posts);
  
  return (
    <main className="postsGrid">
      {posts.map((item) => ( //map 함수로 각 Postcard를 반복시킴
        <Postcard
          postID={item.id}
          key={item.id}
          thumbnail={item.thumbnailUrl}    
          title={item.title}
          content={item.content}    
          date={item.createdAt}
          commentcount={item.commentCount}
          profileImg={item.writerProfileUrl}
          writer={item.writerName}
          heartcount={item.heartCount}     
          
        />//Postcard에 맞게 props 매핑
      ))}
    </main>
  );
}

export default Posts;
