import Headers from "../../component/common/header";
import FightBody from "../../component/fight/body";
import { Styled } from "../common/styles";

export default function FightPage () {
  return (
    <Styled.Wrapper>
      <Headers />
      <FightBody />
    </Styled.Wrapper>
  )
}