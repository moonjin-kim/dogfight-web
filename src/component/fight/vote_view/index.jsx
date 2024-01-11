import styled from "styled-components"
import VoteOption from "../vote_image"
import Comment from "../comment"
import { voteOption } from "../../../api/board"
import { useState } from "react"
import { useBoardListStore } from "../../../zustand/board_list"

export default function VoteView({vote, boardId, setSelectOption}) {
  const [voteStatus, setVoteStatus] = useState(false);
  const [idx,boardList,setBoardList] = useBoardListStore(state => [state.idx,state.boardList,state.setBoardList])

  const clickImage = async (optionId) => {
    try {
      await changeVoteOption(optionId)
      await voteOption(boardId,optionId);
      setVoteStatus(true)
      setSelectOption(optionId)
    } catch(e) {
      console.log(e);
    }
    
  }

  const changeVoteOption = async (option) => {
    let newData = [...boardList];
    newData[idx].option = option;
    setBoardList(newData);
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
            selectOption={boardList[idx].option}
            />
          <VoteOption 
            key={`vote_2`}
            name={vote.option2} 
            image={vote.option2Image} 
            count={vote.option2Count}
            clickEvent={() => clickImage(2)}
            selectOption={boardList[idx].option}
            />
        </>
      }
    </Styled.VoteView>
  )
}

const Styled = {
  VoteView : styled.div`
    width: 520px;
    height: 330px;
    display : flex;
    justify-content: space-between;
  `,
  VoteImage : styled.img`
    width: 250px;
    height: 250px;
  `
}