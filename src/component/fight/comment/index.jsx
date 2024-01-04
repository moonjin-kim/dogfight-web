import styled from "styled-components"
import CommentBar from "../comment_bar"

export default function Comment() {
  return (
    <Styled.CommentView>
      <Styled.CommentInputView>
        <Styled.CommentInput placeholder="댓글쓰기"/>
        <Styled.SubmitButton>댓글쓰기</Styled.SubmitButton>
      </Styled.CommentInputView>
      <CommentBar />
    </Styled.CommentView>
  )
}

const Styled = {
  CommentView : styled.div`
    display: flex;
    flex-direction: column;
    width: 520px;
    margin-top: 100px;
  `,
  CommentInputView : styled.div`
    width: 520px;
    display: flex;
    justify-content: space-between;
  `,
  CommentInput : styled.input`
    width: 400px;
    height: 40px;
  `,
  SubmitButton : styled.button`
    width: 110px;
    height: 46px;
  `
}