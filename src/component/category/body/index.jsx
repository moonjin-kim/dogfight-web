import styled from "styled-components";
import { Font } from "../../../assets/styles/fonts";
import ListMenu from "../listmenu";

export default function CategoryBody() {
  

  return (
    <Styled.body>
      <Styled.HeaderText>카테고리</Styled.HeaderText>
      <ListMenu/>
    </Styled.body>
  );
}

const Styled = {
  body : styled.div`
    flex : 1;
    padding: 20px;
  `,
  HeaderText : styled(Font.TitleText)`
    margin-bottom: 20px;
  `
}