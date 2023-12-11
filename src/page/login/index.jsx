import Headers from "../../component/common/header";
import LoginBody from "../../component/login/body";
import { Styled } from "../common/styles";

export default function LoginPage() {
  return (
    <Styled.Wrapper>
      <Headers />
      <LoginBody />
    </Styled.Wrapper>
  )
}