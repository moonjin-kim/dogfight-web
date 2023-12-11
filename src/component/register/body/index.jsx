import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { Font } from "../../../assets/styles/fonts";
import { useState } from "react";

export default function RegisterBody() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    passwordCofirm: "",
    nickname: "",
    email:"",
  });

  const { id, password, passwordConfirm, nickname, email} = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

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
        placeholder="비밀번호(영어, 숫자 포함 8자리)"/>
        <Styled.LoginInput 
        name="passwordConfirm"
        onChange={onChange}
        value={passwordConfirm}
        type="password"
        placeholder="비밀번호 확인"/>
        <Styled.LoginInput 
        name="email"
        onChange={onChange}
        value={email}
        type="email"
        placeholder="이메일"/>
        <Styled.LoginInput 
        name="nickname"
        onChange={onChange}
        value={nickname}
        placeholder="닉네임"/>
      <Styled.LoginButton style={{backgroundColor : colors.main2}}>
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