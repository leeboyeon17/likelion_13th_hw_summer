import { styled } from "styled-components";

//스타일 컴포넌트 정의
const SideWrapper = styled.div`
    position: absolute;
    top: 380px;
    left: 200px;
    width: 4rem;
    background: #efefef;
    border: 1px solid #F1F3F5;
    border-radius: 2rem;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`
const IconContainer = styled.div`
    height: 3rem;
    width: 3rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #DEE2E6;
    border-radius: 1.5rem;
    color: #868E96;
    cursor: pointer;
    z-index: 5;

    &:hover {
    outline: 4px auto ;
}
`
const Img = styled.img`
    height: 24px;
    width: 24px;
`
const HeartCount = styled.span`
    margin-top: 0.5rem;
    color: #495057;
    line-height: 1;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-weight: bold;
    margin: 10px 0;
`


//컴포넌트 함수 정의
function SideBar({heartcount}) {

    return (
            <SideWrapper>
                <IconContainer><Img src="/public/heart.png"/></IconContainer>
                <HeartCount>{heartcount}</HeartCount>
                <IconContainer><Img src="/public/share.svg"/></IconContainer>
            </SideWrapper>
    );
}

//export
export default SideBar;