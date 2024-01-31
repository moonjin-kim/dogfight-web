import styled from "styled-components";
import { Font } from "../../../assets/styles/fonts";
import { useEffect, useState } from "react";
import { useCategoryStore } from "../../../zustand/category";

export default function MainTopView() {
  const selectTotalTag = useCategoryStore(state => state.selectTotalTag);
  
  useEffect(() => {
    selectTotalTag();
  },[])

  // const requestBaords = async () => {
  //   const response = await getBoards()
  //   setHotTopics(response.data);
  // }

  // console.log(hotTopics)


  return (
    <Styled.MainTopView>
      <Styled.HeaderLine>
      <Styled.HeaderText>Hot Topic</Styled.HeaderText>
      </Styled.HeaderLine>
      <Styled.Margin />
    </Styled.MainTopView>
  );
}

const Styled = {
  MainTopView : styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Margin : styled.div`
    margin-bottom: 20px;
  `,
  HeaderLine : styled.div`
    
    width: 1080px;
  `,
  HeaderText : styled(Font.TitleText)`
    width: 1080px;
    margin-bottom: 20px;
  `
}
