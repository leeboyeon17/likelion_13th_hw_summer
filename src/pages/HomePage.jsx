import { styled } from "styled-components";
import { dummyData } from "../data/dummy_data";
import Header from "../components/HomePage/Header"
import Topnav from "../components/HomePage/Topnav";
import Posts from "../components/HomePage/Posts";

const Wrapper = styled.div`
  width: 1376px;
  margin: 0 auto;
`

function HomePage() {
  return (
  <Wrapper>
    <Header />
    <Topnav />
    <Posts />
  </Wrapper>
  );
}

export default HomePage;
