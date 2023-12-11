import { useNavigate } from "react-router-dom";
import { colors } from "../../../assets/styles/colors";
import { Font } from "../../../assets/styles/fonts";
import { Styled } from "./styles";

export default function Headers() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("login");
  }

  return (
    <Styled.Headers>
      <Styled.leftUil>
        <li>
          <Styled.categoryItem color={colors.white}>랜덤</Styled.categoryItem>
        </li>
        <li>
          <Styled.categoryItem color={colors.white}>카테고리</Styled.categoryItem>
        </li>
        <li>
          <Styled.categoryItem color={colors.white}>만들기</Styled.categoryItem>
        </li>
      </Styled.leftUil>
      <Styled.rightUtil>
        <li>
          <Styled.categoryItem onClick={goToLogin} color={colors.white}>로그인</Styled.categoryItem>
        </li>
      </Styled.rightUtil>
    </Styled.Headers>
  )
}
