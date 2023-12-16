import styled from "styled-components"
import ImageInput from "../../common/image_input"
import { colors } from "../../../assets/styles/colors"

export default function OptionItem({
  imageFile, 
  setImageFile,
  optionName, 
  setOptionName,
  placeholder,
  setFile,
  color}) {
  return (
    <Styled.OptionItem>
      <Styled.OptionName 
        value={optionName} 
        onChange={e => setOptionName(e.target.value)}
        placeholder={placeholder}
        color={color}
        />
      <ImageInput imgFile={imageFile} setImgFile={setImageFile} setFile={setFile}/>
    </Styled.OptionItem>
  )
}

const Styled = {
  OptionItem : styled.div`
    width : 300px;
    height: 300px;
    align-items : center;
  `,
  OptionName : styled.input`
    width: 280px;
    padding : 10px;
    height: 50px;
    border-width: 0px;
    border-radius: 8px;
    background-color: ${(prop) => prop.color};
    font-family: 'PretendardVariable-Regular';
    font-size: 17px;
  `
}