import { styled } from "styled-components";

const CategoryBox = styled.div`
  display: flex;
  gap: 40px;
  font-size: 25px;
  border: 1px solid white;
  margin-top: 30px;
  padding: 20px 20px;
  align-items: center;
  
  * {cursor: pointer}; //각 카테고리에 대해서 적용
`;

function Category() {
    return (
    <CategoryBox>
        <div>전체</div>
        <div>스포츠</div>
        <div>연예</div>
        <div>경제</div>
    </CategoryBox>
    );
}

export default Category;

      