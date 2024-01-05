import styled from "styled-components"
import CommentBar from "../comment_bar"
import { useState } from "react"
import { newComment } from "../../../api/board";
import { useBoardStore } from "../../../zustand/board";

export default function Comment({
  boardId,
  parentId,
  level,
}) {
  const getBoardComment = useBoardStore(state => state.getBoardComment)
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const submitComment = async () => {
    try{
      await newComment(boardId, parentId, nickname, password, content);
      window.location.reload();
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <Styled.CommentView level={level}>
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

const calCommentSize = (level) => `calc(520px - ${level * 20}px)`;
const calMarginLeft = (level) => `${level * 20}px`;

const Styled = {
  CommentView : styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    width: ${(props) => calCommentSize(props.level)};
    margin-left: ${(props) => calMarginLeft(props.level)};
    height: 100px;
  `,
  CommentInfoView : styled.div`
    flex-direction: column;
    align-content: space-between;
  `,
  CommentInputBox : styled.div`
    width: 87%;
    flex-direction: row;
  `,
  CommentNickname : styled.input`
    width: 90px;
    height: 20px;
  `,
  CommentPassword : styled.input`
    margin-left: 10px;
    width: 90px;
    height: 20px;
  `,
  CommentInputView : styled.div`
    width: 520px;
    display: flex;
    justify-content: space-between;
  `,
  CommentInput : styled.textarea`
    width: 100%;
    height: 60px;
    margin-top: 10px;
  `,
  SubmitButton : styled.button`
    width: 50px;
    height: 102px;
  `
}