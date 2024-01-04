import styled from "styled-components"
import VoteOption from "../vote_image"
import Comment from "../comment"
import { voteOption } from "../../../api/board"
import { useState } from "react"

export default function VoteView({vote, boardId}) {
  const [voteStatus, setVoteStatus] = useState(false);

  const clickImage = async (optionId) => {
    try {
      console.log(`${boardId} click`)
      await voteOption(boardId,optionId);
      setVoteStatus(true)
    } catch(e) {
      console.log(e);
    }
    
  }
  
  return (
    <Styled.VoteView>
      {vote && 
      <>
        <VoteOption 
          key={`vote_1`}
          name={vote.option1} 
          image={vote.option1Image} 
          count={vote.option1Count}
          clickEvent={() => clickImage(1)}
          boardStatus={voteStatus}
          />
        <VoteOption 
          key={`vote_2`}
          name={vote.option2} 
          image={vote.option2Image} 
          count={vote.option2Count}
          clickEvent={() => clickImage(2)}
          boardStatus={voteStatus}
          />
      </>
      }
    </Styled.VoteView>
  )
}

const Styled = {
  VoteView : styled.div`
    width: 520px;
    height: 250px;
    display : flex;
    justify-content: space-between;
  `,
  VoteImage : styled.img`
    width: 250px;
    height: 250px;
  `
}