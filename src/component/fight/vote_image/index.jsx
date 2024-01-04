import styled from "styled-components"
import { colors, rgba } from "../../../assets/styles/colors"
import { Font } from "../../../assets/styles/fonts"

export default function VoteOption({name, image, count, clickEvent, boardStatus}) {
  
  return (
    <Styled.ImageView onClick={clickEvent}>
      <Styled.TitleTextView>
        <Font.HeadLineText>{name}</Font.HeadLineText>
      </Styled.TitleTextView>
      <Styled.Image 
        src={`http://localhost:8080/api/v0/${image}`}
      />
      {boardStatus &&
      <Styled.ResultImage>
        <Styled.PercentText>{count}</Styled.PercentText>
      </Styled.ResultImage>
      }
      
    </Styled.ImageView>
  )
}

const Styled = {
  ImageView : styled.div`
    display: block;
    margin-top: 20px;
    width: 255px;
    height: 250px;
  `,
  TitleTextView : styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${rgba(colors.gray2,1)};
  `,
  Image : styled.img`
    position: fixed;
    width: 255px;
    height: 250px;
    margin-top: 5px;
    border-radius: 8px;
  `,
  ResultImage : styled.div`
    display: flex;
    position: absolute;
    width: 255px;
    height: 250px;
    margin-top: 5px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${rgba(colors.main,0.3)};
  `,
  PercentText : styled(Font.TitleText)`
    font-weight: 600;
  `
}