import styled from "styled-components"
import { Font } from "../../../assets/styles/fonts"
import VoteView from "../vote_view"
// import { Font } from "../../../assets/styles/fonts";
export default function FightBody() {
  return (
    <Styled.FightBody>
      <Font.TitleText>이세계에 환생한다면 되고 싶은 직업은?</Font.TitleText>
      <VoteView />
    </Styled.FightBody>
  )
}

const Styled = {
  FightBody : styled.div`
    flex : 1;
    height: 100vh;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
}