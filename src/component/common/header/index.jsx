import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../../assets/styles/colors";
import { Styled } from "./styles";
import { useEffect } from "react";
import { useUserStore } from "../../../zustand/user";
import { getUser } from "../../../api/user";

export default function Headers() {
  const navigate = useNavigate();
  const nickname = useUserStore((state) => state.nickname);
  const setNickname = useUserStore((state) => state.setNickname);

  const requestUser = async () => {
    try{
      const user = await getUser();
      setNickname(user.data.nickname)
    } catch(e) {
      console.log(e);
    }
    
  }

  useEffect(() => {
    requestUser();
  },[])

  const goToCreate = () => {
    if(nickname !== null) {
      navigate("/create");
    } else {
      alert("로그인 후 이용 가능합니다.")
    }
    
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
          <Styled.categoryItem onClick={goToCreate} color={colors.white}>만들기</Styled.categoryItem>
        </li>
      </Styled.leftUil>
      <Styled.rightUtil>
        <li>
          {nickname === null ? 
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Styled.categoryItem color={colors.white}>로그인</Styled.categoryItem>
            </Link>
          :
            <Styled.categoryItem color={colors.white}>{nickname}</Styled.categoryItem>
          }
          
        </li>
      </Styled.rightUtil>
    </Styled.Headers>
  )
}
