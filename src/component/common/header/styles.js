import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { Font } from "../../../assets/styles/fonts";

export const Styled = {
 Headers : styled.div`
    max-width: 100%;
    height: 60px;
    padding: 20px;    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.main};
  `,
  leftUil : styled.ul`
    padding: 0px;
    display: flex;
    gap: 20px;
    list-style: none;
  `,
  rightUtil : styled.ul`
    display: flex;
    gap : 20px;
    list-style: none;
  `,
  categoryItem : styled(Font.HeadLineText)`
    font-weight: 700;
    color: ${colors.white};
  `
}