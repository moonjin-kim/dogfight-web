import styled from "styled-components"
import CommentBar from "../comment_bar"
import { useState } from "react"
import { newComment } from "../../../api/board";
import { useBoardStore } from "../../../zustand/board";

export default function Comment({
  boardId,
  parentId,
}) {
  const getBoardComment = useBoardStore(state => state.getBoardComment)
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const submitComment = async () => {
    try{
      await newComment(boardId, parentId, nickname, password, content);
      window.location.reload();
      // await getBoardComment();
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <Styled.CommentView>
      <Styled.CommentInputBox>
        <Styled.CommentInfoView>
          <Styled.CommentNickname value={nickname} onChange={(e) => setNickName(e.target.value)} placeholder="닉네임"/>
          <Styled.CommentPassword type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호(4자리)"/>
        </Styled.CommentInfoView>
        <Styled.CommentInput value={content} onChange={(e) => setContent(e.target.value)} placeholder="댓글쓰기"/>
      </Styled.CommentInputBox>
      <Styled.SubmitButton onClick={submitComment}>댓글쓰기</Styled.SubmitButton>
    </Styled.CommentView>
  )
}

const Styled = {
  CommentView : styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 520px;
    height: 100px;
    margin-top: 100px;
  `,
  CommentInfoView : styled.div`
    flex-direction: column;
    align-content: space-between;
  `,
  CommentInputBox : styled.div`
    flex-direction: row;
  `,
  CommentNickname : styled.input`
    width: 100px;
    height: 20px;
  `,
  CommentPassword : styled.input`
    margin-left: 10px;
    width: 100px;
    height: 20px;
  `,
  CommentInputView : styled.div`
    width: 520px;
    display: flex;
    justify-content: space-between;
  `,
  CommentInput : styled.textarea`
    width: 390px;
    height: 60px;
    margin-top: 10px;
  `,
  SubmitButton : styled.button`
    width: 110px;
    height: 102px;
  `
}