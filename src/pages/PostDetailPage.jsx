import React from "react";
import { Link } from "react-router-dom";

import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // axios 설정한 파일 필요시 import

import Header from "../components/PostDetailPage/Header";
import Title from "../components/PostDetailPage/Title";
import Body from "../components/PostDetailPage/Body";
import Tags from "../components/PostDetailPage/Tags";
import FooterProfile from "../components/PostDetailPage/FooterProfile";
import Comment from "../components/PostDetailPage/Comment";
import SideBar from "../components/PostDetailPage/SideBar";

const Wrapper = styled.div`
  * {
    max-width: 768px;
  }
  margin: 0 auto;
  position: relative;
`;

function PostDetailPage() {

    const postId = useParams().postId;
      // postId에는 URL에서 추출한 값이 들어감
      //실제 URL이 /detail/3이라면, postId는 "3"

    const [post, setPost] = useState([]);

      useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/boards/${postId}`);
        console.log("✨상세페이지 응답 데이터 구조:", response); //응답 데이터 구조 콘솔 확인
        setPost(response.data);
      } catch (err) {//에러
        console.error("게시글 불러오기 실패:", err);
      }
    };
    fetchPost();
  }, [postId]);

  if (!post) return <div>로딩중...</div>;

        return (
        <>
        {/*<div>{postId}번째 게시글 상세페이지</div>*/}
        <Header 
          writer={post.writerName}
        />
      
        <Wrapper>
        <SideBar 
        heartcount={post.heartCount}/>
        <Title
          postID={post.id}
          key={post.id}
          title={post.title}
          writer={post.writerName}
          date={post.createdAt}
          heartcount={post.heartCount}
          />
        <Tags />  
        <Body 
          thumbnail={post.thumbnailUrl}
          content={post.content}
        />
        <FooterProfile
          profileImg={post.writerProfileUrl}
          writer={post.writerName}
        />
        <Comment
          commentcount={post.commentCount}
        />
        </Wrapper>
        </>

        );

}

export default PostDetailPage;