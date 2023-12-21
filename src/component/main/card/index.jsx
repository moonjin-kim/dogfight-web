import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { Font } from "../../../assets/styles/fonts";
import { useNavigate } from "react-router-dom";

export default function BoardCard({
  title,
  content
}) {
  const navigate = useNavigate();
  
  const goToFight = () => {
    navigate("/fight");
  }

  return (
    <Styled.Card onClick={goToFight}>
      <Styled.ImageView>
        <Styled.Image 
        src="http://localhost:8080/api/v0/images/20231220/252618519010041.jpg"/>
        <Styled.Image 
        src="http://localhost:8080/api/v0/images/20231220/252618519010041.jpg"/>
      </Styled.ImageView>
      <Styled.BoardName>{title}</Styled.BoardName>
      <Styled.ContentText>호날두</Styled.ContentText>
      <Styled.ViewsText>{`조회수 : 100`}</Styled.ViewsText>
    </Styled.Card>
  )
}

const Styled = {
  Card : styled.div`
    width : 300px;
    height: 300px;
    padding : 20px;
    margin-right: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: ${colors.gray2};
  `,
  ImageView: styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
  `,
  Image : styled.img`
    width: 150px;
    height: 150px;
  `,
  BoardName : styled(Font.HeadLineText)`
    margin-top: 20px;
    font-weight: 600;
  `,
  ContentText : styled(Font.CautionText)`
    margin-top: 10px;
  `,
  ViewsText : styled(Font.CautionText)`
    position: absolute;
    bottom: 20px;

  `

}