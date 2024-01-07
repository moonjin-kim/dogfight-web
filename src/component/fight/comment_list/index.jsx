import styled from "styled-components";
import { useBoardStore } from "../../../zustand/board"
import CommentBar from "../comment_bar";
import { useCallback } from "react";

export default function CommentList({selectOption}){
  const comments = useBoardStore(useCallback(state => state.comments));

  if(comments){
    return (
      <Styled.CommentList>
        {comments.map((item) =>{
        return <CommentBar 
          level={0}
          id={item.id}
          boardId={item.boardId}
          nickname={item.nickname}
          content={item.content}
          option={item.select}
          reply={item.children}
          selectOption={selectOption}
        />
        })}
      </Styled.CommentList>
    )
  }
  
  return (
    <div></div>
  )
}

const Styled = {
  CommentList : styled.div`
    width: 520px;
  `
}