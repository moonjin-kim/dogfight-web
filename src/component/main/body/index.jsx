import styled from "styled-components"
import { colors } from "../../../assets/styles/colors"
import React from 'react';
import MainTopView from "../topCard";

export default function MainBody() {
  return (
    <Styled.body>
      <MainTopView />
    </Styled.body>
  )
}

const Styled = {
  body : styled.div`
    flex : 1;
    padding: 20px;
  `,
  Card : styled.div`
    width : 300px;
    height: 300px;
    background-color: ${colors.gray2};
  `
}