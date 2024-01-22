import styled from "styled-components"
import { Font } from "../../../assets/styles/fonts"
import { useEffect, useState } from "react";
import { getBoards, getBoardsByTag, getTags } from "../../../api/board";
import { useCategoryStore } from "../../../zustand/category";

export default function ListMenu() {
  const [selected, setSelected] = useState(0);
  const [tags, setTags] = useState([{id:0,name : "", count : 0}]);
  const {boards, requestTotalBoard, requestBoardByTags} = useCategoryStore(state => state);

  useEffect(() => {
    requestTags();
  },[])

  useEffect(() => {
    requestBoards();
  },[selected])


  const requestBoards = async () => {
    if(selected === 0) {
      console.log("selected")
      requestTotalBoard();
    } else {
      requestBoardByTags(tags[selected-1].name);
    }
  }

  const clickCategory = (id) => {
    setSelected(id);
  }

  const requestTags = async () => {
    try {
      const response = await getTags();
      console.log(response)
      setTags(response.data);
    } catch(e) {
      console.log(e);
    }
    
  }
  return (
    <Styled.MenuList>
      <Styled.Item>
        <Styled.ItemText onClick={()=>clickCategory(0)} selected={selected === 0}>{`전체(${tags.find(obj => obj.id === 0).count})`}</Styled.ItemText>
      </Styled.Item>
      {tags.map((item,idx) => {
        if(item.id !== 0) {
          return (
            <Styled.Item>
              <Styled.ItemText onClick={()=>clickCategory(idx + 1)} selected={selected === idx + 1}>{`${item.name}(${item.count})`}</Styled.ItemText>
            </Styled.Item>
          )
        }
      })}
    </Styled.MenuList>
  )
}

const Styled = {
  MenuList : styled.ul`
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    list-style: none;
  `,
  Item : styled.li`
    margin-right: 50px;
    margin-bottom : 20px;
  `,
  ItemText : styled(Font.BodyText)`
    text-decoration: ${prop => prop.selected && "underline"};
  `
}