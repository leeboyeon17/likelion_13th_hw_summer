import { styled } from "styled-components";

//스타일 컴포넌트 정의
const Wrapper = styled.div`
  padding: 2.5rem 1rem 0 1rem;
`
const Content = styled.p`
  font-size: 1.125rem;
  color: var(--text1);
  transition: color 0.125s ease-in;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`

//컴포넌트 함수 정의
function Title({thumbnail, content}) {

    console.log("본문 확인:", content);
    
    return (
            <div className="container">
            <img src={thumbnail} alt="썸네일"/>
            <Wrapper className="body_container">
                <Content>{content}</Content>
            </Wrapper>
            </div>
    );
}

//export
export default Title;