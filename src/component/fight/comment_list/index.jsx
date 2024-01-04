import styled from "styled-components";
import { useBoardStore } from "../../../zustand/board"
import CommentBar from "../comment_bar";
import { useCallback } from "react";

export default function CommentList(){
  const comments = useBoardStore(useCallback(state => state.comments));

  if(comments){
    return (
      <Styled.CommentList>
        {comments.map((item) =>{
        return <CommentBar 
          id={item.id}
          level={0}
          nickname={item.nickname}
          content={item.content}
          reply={item.children}
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