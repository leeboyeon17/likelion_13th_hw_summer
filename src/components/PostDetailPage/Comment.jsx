import { styled } from "styled-components";

//스타일 컴포넌트 정의
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  color: #212529;
`
const Count = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 1rem;
`
const Textarea = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid #eceded;;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: #212529;
  line-height: 1.75;
  background: #FFFFFF;
  box-sizing: border-box;
`

//컴포넌트 함수 정의
function Comment({postID, commentcount}) {

    console.log("댓글수 확인:", commentcount);

    return (
        <>
        <Wrapper>
            <Count>{commentcount}개의 댓글</Count>
            <div>
                <Textarea placeholder="댓글을 작성하세요" />
                <div className="button-wrapper"><button className="comment-btn">댓글작성</button></div>
            </div>
            <div><br/>@@@댓글리스트@@@</div>
        </Wrapper>
        </>
    );
}

//export
export default Comment;