import Headers from "../../component/common/header";
import LoginBody from "../../component/login/body";
import RegisterBody from "../../component/register/body";
import { Styled } from "../common/styles";

export default function RegisterPage() {
  return (
    <Styled.Wrapper>
      <Headers />
      <RegisterBody />
    </Styled.Wrapper>
  )
}