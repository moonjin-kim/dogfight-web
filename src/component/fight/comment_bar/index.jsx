import styled from "styled-components"
import { colors, rgba } from "../../../assets/styles/colors"
import { Font } from "../../../assets/styles/fonts"
import { useState } from "react"
import ReactModal from "react-modal";
import Password_modal from "../password_modal";
import PasswordModal from "../password_modal";
import Comment from "../comment";

export default function CommentBar({
  id,
  boardId,
  nickname, 
  content, 
  level, 
  password, 
  reply,
  isOption1}) {
  const [isReplyWrite, setIsReplyWrite] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [input, setInput] = useState("comment");

  const commentFixed = () => {
    setIsFixed(true);
  }

  const onPressReplyWrite = () => {
    setIsReplyWrite(true);
  }

  const onClickReplyClose = () => {
    setIsReplyWrite(false);
  }

  return (
    <>
      <Styled.CommentBar key={`${id}_commentBar`} level={level} isOption1={isOption1}>
        <Styled.HeaderView>
          <Styled.NicknameText>{nickname}</Styled.NicknameText>
          <Styled.FunctionView>
            <Styled.FunctionText onClick={onPressReplyWrite}>답글</Styled.FunctionText>
            <Font.CautionText> / </Font.CautionText>
            <Styled.FunctionText onClick={commentFixed}>수정</Styled.FunctionText>
            <Font.CautionText> / </Font.CautionText>
            <Styled.FunctionText>삭제</Styled.FunctionText>
          </Styled.FunctionView>
        </Styled.HeaderView>
        <Styled.CommentText color={colors.white}>{content}</Styled.CommentText>
      </Styled.CommentBar>
      { isReplyWrite &&
        <>
          <Styled.CloseButton onClick={onClickReplyClose}>댓글닫기</Styled.CloseButton>
          <Comment key={`${id}_replyBar`} boardId={boardId} parentId={id} level={level+1}/>
        </>
      }
      {reply &&
        reply.map((item) => {
          return <CommentBar 
          key={`${id}_commentBar`} 
          level={level+1} 
          nickname={item.nickname} 
          content={item.content}
          reply={item.children}
          />
        })
      }
      <PasswordModal isFixed={isFixed} />
    </>
  )
}

const calCommentSize = (level) => `calc(500px - ${level * 20}px)`;
const calMarginLeft = (level) => `${level * 20}px`;

const Styled = {
  CommentBar : styled.div`
    display: flex;
    width: ${(props) => calCommentSize(props.level)};
    margin-left: ${(props) => calMarginLeft(props.level)};
    padding : 10px;
    margin-top: 20px;
    background-color: ${(props) => props.isOption1 ? rgba(colors.red,0.7) : rgba(colors.blue,0.7)};
    border-radius: 4px;
    flex-direction: column;
    
  `,
  NicknameText : styled(Font.BodyText)`
    color : ${colors.white};
    font-weight : 700;
    margin-bottom: 5px;
  `,
  CommentText : styled(Font.CautionText)`
    font-weight: 600;
  `,
  HeaderView : styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  FunctionView : styled.div`
    
  `,
  FunctionText : styled(Font.CautionText)`
    color : ${colors.main};
  `,
  FixedInput : styled.input`
    width: 80%;
    height: 50px;
  `,
  FixedButton : styled.button`
    width: 15%;
    height: 56px;
  `,
  CloseButton : styled(Font.CautionText)`
    height: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    float: right;
  `

}