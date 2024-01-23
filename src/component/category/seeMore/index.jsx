import styled from "styled-components"
import { colors } from "../../../assets/styles/colors"

export default function SeeMoreView({clickSeeMore}) {

  return (
    <Styled.SeeMoreView>
      <Styled.SeeMoleButton onClick={clickSeeMore}>더보기</Styled.SeeMoleButton>
    </Styled.SeeMoreView>
  )
}

const Styled = {
  SeeMoreView : styled.div`
    width: 100%;
  `,
  SeeMoleButton : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    border-radius: 15px;
    border : 1px solid;
    margin: 0 auto;
  `
}