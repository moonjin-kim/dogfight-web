import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { Font } from "../../../assets/styles/fonts";
import { useNavigate } from "react-router-dom";

export default function BoardCard({
  id,
  title,
  writer,
  content,
  views,
  option1Image,
  option2Image
}) {
  const navigate = useNavigate();
  console.log(title)
  
  const goToFight = () => {
    navigate(`/fight/${id}`);
  }

  return (
    <Styled.Card onClick={goToFight}>
      <Styled.ImageView>
        <Styled.Image 
        src={`http://localhost:8080/api/v0/${option1Image}`} />
        <Styled.Image 
        src={`http://localhost:8080/api/v0/${option2Image}`}/>
      </Styled.ImageView>
      <Styled.BoardName>{title}</Styled.BoardName>
      <Styled.ContentText>{writer}</Styled.ContentText>
      <Styled.ViewsText>{`조회수 : ${views}`}</Styled.ViewsText>
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