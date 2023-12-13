import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef
} from 'react';
import styled from 'styled-components';
import ImageInput from '../../common/image_input';
import OptionItem from '../option';
import { colors, rgba } from '../../../assets/styles/colors';

export default function CreateBody() {
  const [option1, setOption1] = useState("");
  const [option1File, setOption1File] = useState(null);
  const [option2, setOption2] = useState("");
  const [option2File, setOption2File] = useState(null);
  const [Tag, setTag] = useState("");

  return (
    <Styled.CreateBody>
      <Styled.TitleInput placeholder='제목(필수)'/>
      <Styled.OptionItem>
        <OptionItem 
          optionName={option1}
          setOptionName={setOption1}
          imageFile={option1File}
          setImageFile={setOption1File}
          placeholder={"선택지 1"}
          color={rgba(colors.main,0.5)}/>
        <OptionItem 
          optionName={option2}
          setOptionName={setOption2}
          imageFile={option2File}
          setImageFile={setOption2File}
          placeholder={"선택지 2"}
          color={rgba(colors.main2,0.5)}/>
      </Styled.OptionItem>
    </Styled.CreateBody>
  );
}

const Styled = {
  CreateBody : styled.div`
    width: 100vw;
    height: 100vh;
    border-width: 1px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  OptionItem : styled.div`
    width: 610px;
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
  `,
  TitleInput : styled.input`
    width: 570px;
    height: 10px;
    padding : 20px;
    border-width: 0.1px;
    border-radius: 4px;
  `,

}

