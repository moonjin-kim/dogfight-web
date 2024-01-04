import styled from "styled-components"
import { Font } from "../../../assets/styles/fonts"
import VoteView from "../vote_view"
import Comment from "../comment"
import { useBoardStore } from "../../../zustand/board"
import { useEffect } from "react"
import CommentList from "../comment_list"
// import { Font } from "../../../assets/styles/fonts";
export default function FightBody() {
  const board = useBoardStore(state => state.board);
  const getEarlyBoard = useBoardStore(state => state.getEarlyBoard);

  useEffect(() => {
    requestBoard();
  },[])

  const requestBoard = () => {
    try {
      getEarlyBoard(1);
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <Styled.FightBody>
      <Font.TitleText>{board.title}</Font.TitleText>
      <VoteView vote={board.vote} boardId={board.id}/>
      <Comment boardId={board.id}/>
      <CommentList />
    </Styled.FightBody>
  )
}

const Styled = {
  FightBody : styled.div`
    flex : 1;
    height: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
}