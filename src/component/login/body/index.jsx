import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { Font } from "../../../assets/styles/fonts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginBody() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const goToRegister = () => {
    navigate("/register");
  }

  return (
    <Styled.LoginBody>
      <Styled.LoginInput 
        name="id"
        onChange={onChange}
        value={id}
        placeholder="아이디"/>
      <Styled.LoginInput 
        name="password"
        onChange={onChange}
        value={password}
        type="password"
        placeholder="비밀번호"/>
      <Styled.LoginButton>
        <Font.BodyText color={colors.white}>로그인</Font.BodyText>
      </Styled.LoginButton>
      <Styled.LoginButton onClick={goToRegister} style={{backgroundColor : colors.main2}}>
        <Font.BodyText color={colors.white}>회원가입</Font.BodyText>
      </Styled.LoginButton>
    </Styled.LoginBody>
  )
}

const Styled = {
  LoginBody : styled.div`
    flex : 1;
    height: 100vh;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  LoginInput : styled.input`
    width: 300px;
    height: 30px;
    padding: 5px;
    border-radius: 4px;
    margin-top: 10px;
  `,
  LoginButton : styled.div`
    display: flex;
    width: 300px;
    height: 30px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 4px;
    border-width: 5px;
    border-color: ${colors.main};
    background-color: ${colors.main};
    justify-content: center;
    align-items: center;
  `

}