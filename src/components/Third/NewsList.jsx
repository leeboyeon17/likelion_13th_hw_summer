
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";
import Title from "../common/Title";
import Category from "./Category";


  //스타일 컴포넌트 정의
  const Wrapper = styled.div`
    width: 1500px;
    margin: 0 auto;
  `;
  const PostWrapper = styled.div`
    gap: 30px;
    font-size: 25px;
    margin-top: 30px;
  `;
  const Post = styled.p`
    display: flex;
    gap: 40px;
    margin: 30px 0;
    * {cursor: pointer}; //각 요소에 대해서 적용
  `
  const Thumbnail = styled.img`
  width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;


  const NewsList = () => {
    
    //state 작성
    const [newsList, setNewsList] = useState([]);
    //OPEN API 비동기로 불러와 state에 저장 및 불러오기
    //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}


    //콘솔에만 찍히도록
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        setNewsList(response.data.articles)
        console.log("3rd response", response);  
      } catch (error) {
        console.error("에러 내용:", error);
      }
    };


    //처음 마운트 될 때 한 번 불러오기
    useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`) // API 주소 확인 필요
      .then((res) => setNewsList(res.data.articles))
      .catch((err) => console.error(err));
  }, []);


    //화면에 띄울 부분
    return (
    <>
    <Title title={" 멋사 NEWS"} />
    <Wrapper>
      <Category />
      <PostWrapper>
        {newsList.map((item) => (
          <div key={item.url}>
            <Post>
            <Thumbnail img src={item.urlToImage} alt="썸네일" />
            <p>{item.title}</p>
            </Post>
          </div>
        ))}
      </PostWrapper>
    </Wrapper>
    </>
  );
};

export default NewsList;

