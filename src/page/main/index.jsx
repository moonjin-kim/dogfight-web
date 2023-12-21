import Headers from "../../component/common/header";
import MainBody from "../../component/main/body";
import { Styled } from "../common/styles";

export default function MainPage () {
  return (
    <Styled.Wrapper>
      <Headers />
      <MainBody />
    </Styled.Wrapper>
  )
}