import { styled } from "styled-components";
import { dummyData } from "../data/dummy_data";
import Header from "../components/HomePage/Header"
import Topnav from "../components/HomePage/Topnav";
import Posts from "../components/HomePage/Posts";

function HomePage() {
  return <>
  <Header />
  <Topnav />
  <Posts />
  </>;
}

export default HomePage;
