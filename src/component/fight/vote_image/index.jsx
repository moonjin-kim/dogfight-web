import styled from "styled-components"
import { colors, rgba } from "../../../assets/styles/colors"
import { Font } from "../../../assets/styles/fonts"

export default function VoteImage() {
  return (
    <Styled.ImageView>
      <Styled.Image 
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7iVIil0gFoY_TblTwuZmRePi5YPHZXRMdhtxYQMTt_KEgo2gUs-SauwvOiujpVSPa94&usqp=CAU`}
      />
      <Styled.ResultImage>
        <Styled.PercentText>50%</Styled.PercentText>
      </Styled.ResultImage>
    </Styled.ImageView>
  )
}

const Styled = {
  ImageView : styled.div`
    display: block;
    width: 250px;
    height: 250px;
    background-color: ${colors.black};
  `,
  Image : styled.img`
    position: fixed;
    width: 250px;
    height: 250px;
  `,
  ResultImage : styled.div`
    position: fixed;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color: ${rgba(colors.main,0.3)};
  `,
  PercentText : styled(Font.HeadLine2Text)`
    position: fixed;
    transform: translate(-50%, 50%);
  `
}