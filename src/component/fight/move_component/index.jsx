import styled from "styled-components"
import { colors } from "../../../assets/styles/colors"
import { Font } from "../../../assets/styles/fonts"
import { useBoardListStore } from "../../../zustand/board_list";
import { next } from "../../../api/board";
import { useNavigate } from "react-router-dom";

export default function MoveComponent() {
  const [idx,boardList,plusIdx,minusIdx,setBoardList] = useBoardListStore(state => [state.idx,
    state.boardList,
    state.plusIdx,
    state.minusIdx, 
    state.setBoardList])
  const navigate = useNavigate();


  const clickNext =async () => {
    console.log(`idx : ${idx}`);
    console.log(boardList)
    try{
      if(boardList.length == idx + 1) {
        const data = await next();
        const boardData = {id : data.data.id , option : 0}
        setBoardList([...boardList,boardData]);
        plusIdx();
        console.log(data.data.id);
        navigate(`/fight/${data.data.id}`);
      } else {
        plusIdx();
        navigate(`/fight/${boardList[idx + 1].id}`);
      }
    } catch (e) {
      console.log(e)
    }
    
  }

  const clickPre =async () => {
    try{
      console.log(boardList)
      if(idx == 0) {
        const data = await next();
        const boardData = {id : data.data.id , option : 0}
        setBoardList(
          [boardData,...boardList]
        )
        navigate(`/fight/${data.data.id}`);
      } else {
        minusIdx();
        navigate(`/fight/${boardList[idx - 1].id}`);
      }
    } catch (e) {
      console.log(e)
    }
    
  }
  
  return (
    <Styled.View>
      <Styled.Button>
        <Font.BodyText color={colors.main} onClick={clickPre}>이전</Font.BodyText>
      </Styled.Button>
      <Styled.Button>
        <Font.BodyText color={colors.main} onClick={clickNext}>다음</Font.BodyText>
        </Styled.Button>
    </Styled.View>
  )
}

const Styled = {
  View : styled.div`
    display: flex;
    width: 520px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
  `,
  Button : styled.div`
    width: 60px;
    height: 40px;
    border: 1px solid;
    border-width: 1px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${colors.main};
    text-align: center;
  `
}