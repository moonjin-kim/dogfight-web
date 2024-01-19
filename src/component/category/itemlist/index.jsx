import styled from "styled-components"
import { useCategoryStore } from "../../../zustand/category"
import BoardCard from "../../main/card";

export default function ItemList() {
  const boards = useCategoryStore(state => state.boards);
  return (
    <Styled.ListView>
      {boards.map(({id,title,writer,views,vote}) => (
          <BoardCard 
          id={id}
          title={title}
          writer={writer} 
          views={views}
          option1Image={vote.option1Image}
          option2Image={vote.option2Image}/>
        ))}
    </Styled.ListView>
  )
}

const Styled = {
  ListView : styled.div`
    width: 1200px;
    height: 930px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: auto;
  `
}