import styled from "styled-components";
import { colors } from "./colors";

export const Font = {
  HederText : styled.a`
    font-size: 28px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,
  SubHederText : styled.a`
    font-size: 26px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,
  TitleText : styled.a`
    font-size: 23px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,
  HeadLineText : styled.a`
    font-size: 20px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,
  HeadLine2Text : styled.a`
    font-size: 18px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,
  BodyText : styled.a`
    font-size: 16px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,
  CautionText : styled.a`
    font-size: 13px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,
  DescriptionText : styled.a`
    font-size: 11px;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
    color : ${(props) => (props.color ? props.color : colors.black)};
    font-family: 'PretendardVariable-Regular';
  `,

}