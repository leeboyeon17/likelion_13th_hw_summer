import { styled } from "styled-components";

//스타일 컴포넌트 정의
const TagBox = styled.div`
  display: flex;
  margin: 0.875rem auto;
  min-height: 0.875rem;
`
const Tag = styled.div`
  background: #f6f6f6;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.875rem;
  color: #12B886;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
  opacity: 0.7;
}
`;

//컴포넌트 함수 정의
function Tags() {
    //API에 해당 데이터 없어서 임의로 입력
    
    return (
        <TagBox>
            <Tag>AI개발</Tag>
            <Tag>API테스트</Tag>
            <Tag>Programmer</Tag>
            <Tag>개발효율화</Tag>
        </TagBox>
    );
}

//export
export default Tags;