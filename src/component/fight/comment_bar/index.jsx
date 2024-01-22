import styled from "styled-components"
import { colors, rgba } from "../../../assets/styles/colors"
import { Font } from "../../../assets/styles/fonts"
import { useState } from "react"
import PasswordModal from "../password_modal";
import Comment from "../comment";
import { delComment } from "../../../api/board";

export default function CommentBar({
  id,
  boardId,
  nickname, 
  content, 
  level, 
  password, 
  selectOption,
  reply,
  option}) {
  const [isReplyWrite, setIsReplyWrite] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const commentFixed = async (commentId) => {
    try {
      const password = prompt("비밀번호를 입력해주세요");
      const req = await delComment(commentId,password);
      alert("댓글이 삭제되었습니다.");
      window.location.reload();
    } catch (e) {
      console.log("e")
      if(e.response.status = 400) {
        alert(e.response.data.message);
      }
    }
  }

  const onPressReplyWrite = () => {
    setIsReplyWrite(true);
  }

  const onClickReplyClose = () => {
    setIsReplyWrite(false);
  }

  return (
    <>
      <Styled.CommentBar key={`${id}_commentBar`} level={level} isOption1={option}>
        <Styled.HeaderView>
          <Styled.NicknameText>{nickname}</Styled.NicknameText>
          <Styled.FunctionView>
            {option !== 3 ?
              (
                <>
                  <Styled.FunctionText onClick={onPressReplyWrite}>답글</Styled.FunctionText>
                  <Font.CautionText> / </Font.CautionText>
                  <Styled.FunctionText onClick={()=>commentFixed(id)}>삭제</Styled.FunctionText>
                </>
              ) : (<Styled.FunctionText>삭제됨</Styled.FunctionText>)
            }
          </Styled.FunctionView>
        </Styled.HeaderView>
        <Styled.CommentText color={colors.white}>{content}</Styled.CommentText>
      </Styled.CommentBar>
      { isReplyWrite &&
        <>
          <Styled.CloseButton onClick={onClickReplyClose}>댓글닫기</Styled.CloseButton>
          <Comment key={`${id}_replyBar`} boardId={boardId} parentId={id} level={level+1} selectOption={selectOption}/>
        </>
      }
      {reply &&
        reply.map((item) => {
          return <CommentBar 
          key={`${id}_commentBar`} 
          level={level+1} 
          selectOption={selectOption}
          nickname={item.nickname} 
          content={item.content}
          option={item.select}
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
    background-color: ${(props) => props.isOption1 === 3 ? colors.gray2 : 
      props.isOption1 === 1 ? rgba(colors.red,0.7) : rgba(colors.blue,0.7)};
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