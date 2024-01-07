import styled from "styled-components";
import { Font } from "../../../assets/styles/fonts";
import Scrolls from "../scrolls";
import { useEffect, useState } from "react";
import { getBoards } from "../../../api/board";

export default function MainTopView() {
  const [hotTopics, setHotTopics] = useState([]);
  
  useEffect(() => {
    requestBaords();
  },[])

  const requestBaords = async () => {
    const response = await getBoards()
    setHotTopics(response.data);
  }

  console.log(hotTopics)


  return (
    <Styled.MainTopView>
      <Styled.HeaderText>Hot Topic</Styled.HeaderText>
      <Styled.Margin />
      <Scrolls items={hotTopics.content}/>
    </Styled.MainTopView>
  );
}

const Styled = {
  MainTopView : styled.div`
    width: 100%;
    height: 600px;
  `,
  Margin : styled.div`
    margin-bottom: 20px;
  `,
  HeaderText : styled(Font.TitleText)`
    margin-bottom: 20px;
  `
}
