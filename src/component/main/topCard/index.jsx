import styled from "styled-components";
import { Font } from "../../../assets/styles/fonts";
import Scrolls from "../scrolls";

export default function MainTopView() {
  return (
    <Styled.MainTopView>
      <Styled.HeaderText>Hot Topic</Styled.HeaderText>
      <Styled.Margin />
      <Scrolls />
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
