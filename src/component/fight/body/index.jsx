import styled from "styled-components"
import { Font } from "../../../assets/styles/fonts"
import VoteView from "../vote_view"
import Comment from "../comment"
import { useBoardStore } from "../../../zustand/board"
import { useEffect, useState } from "react"
import CommentList from "../comment_list"
import { useParams } from "react-router-dom"
import { useBoardListStore } from "../../../zustand/board_list"

export default function FightBody() {
  const board = useBoardStore(state => state.board);
  const [idx,boardList] = useBoardListStore(state => [state.idx,state.boardList])
  const getEarlyBoard = useBoardStore(state => state.getEarlyBoard);
  const {id} = useParams();

  const [selectOption, setSelectOption] = useState(0);

  useEffect(() => {
    setSelectOption(boardList[idx].option)
    requestBoard();
  },[])

  const requestBoard = () => {
    try {
      getEarlyBoard(id);
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <Styled.FightBody>
      <Font.TitleText>{board.title}</Font.TitleText>
      <VoteView vote={board.vote} boardId={board.id} setSelectOption={setSelectOption}/>
      <Comment boardId={board.id} level={0} selectOption={selectOption}/>
      <CommentList selectOption={selectOption}/>
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