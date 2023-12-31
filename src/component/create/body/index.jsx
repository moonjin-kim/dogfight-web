import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef
} from 'react';
import styled from 'styled-components';
import OptionItem from '../option';
import { colors, rgba } from '../../../assets/styles/colors';
import { Font } from '../../../assets/styles/fonts';
import { getTags, newBoard } from '../../../api/board';

export default function CreateBody() {
  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option1File, setOption1File] = useState(null);
  const [option1ImageFile, setOption1ImageFile] = useState(null);
  const [option2, setOption2] = useState("");
  const [option2File, setOption2File] = useState(null);
  const [option2ImageFile, setOption2ImageFile] = useState(null);
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    requestTags();
  },[])

  const requestTags = async () => {
    const response = await getTags();
    setTags(response.data);
    
  }

  const makeBoardData = async() => {
    const formData = new FormData()

    console.log(option1File);

    formData.append('title', title);
    formData.append('content', content);
    formData.append('tag', tag);
    formData.append('option1', option1);
    formData.append('option2', option2);
    formData.append('option1Image',option1ImageFile);
    formData.append('option2Image',option2ImageFile);

    return formData;
  }

  const makeBoard = async () => {
    try {
      const data = await makeBoardData();
      
      const result = await newBoard(data);
      console.log(result);
    } catch (e) {
      // console.log(e);
    }
    
  }

  const handleSelect = (e) => {
    setTag(e.target.value);
    setTagInput(e.target.value)
  }

  return (
    <Styled.CreateBody>
      <Styled.TitleInput 
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='제목(필수)'/>
      <Styled.Tag>
        <Styled.TagInput 
          value={tagInput}
          onChange={e => setTagInput(e.target.value)}
          disabled={tag === "" ? false : true}
          placeholder='태그(직접입력)' />
        <Styled.TagSelect onChange={handleSelect} name="pets" id="pet-select">
          <option value="" defaultValue={true}>직접 입력</option>
          {tags.map((item) => {
            return <option key={item.name} value={item.name}>{item.name}</option>
          })}
        </Styled.TagSelect>
      </Styled.Tag>
      <Styled.OptionItems>
        <OptionItem 
          optionName={option1}
          setOptionName={setOption1}
          imageFile={option1File}
          setImageFile={setOption1File}
          placeholder={"선택지 1"}
          setFile={setOption1ImageFile}
          color={rgba(colors.main,0.5)}/>
        <OptionItem 
          optionName={option2}
          setOptionName={setOption2}
          imageFile={option2File}
          setImageFile={setOption2File}
          placeholder={"선택지 2"}
          setFile={setOption2ImageFile}
          color={rgba(colors.main2,0.5)}/>
      </Styled.OptionItems>
      <Styled.ContentInput
        type='text'
        value={content}
        onChange={(e => setContent(e.target.value))}
        placeholder={"주제에 대한 설명을 해주세요"}/>
      <Styled.SubmitButton onClick={makeBoard}>
        <Font.TitleText color={colors.white}>게시판 등록하기</Font.TitleText>
      </Styled.SubmitButton>
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
  OptionItems : styled.div`
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
  Tag : styled.div`
    width: 610px;
    display: flex;
    margin-top: 10px;
    color: black;
    justify-content: space-between;
    align-items: center;
  `,
  TagInput : styled.input`
    width: 260px;
    height: 10px;
    padding: 20px;
    border-width: 0.1px;
    border-radius: 4px;
  `,
  TagSelect : styled.select`
    width: 300px;
    padding: 16px;
    border-radius: 4px;
  `,
  SelectBoxWrapper : styled.div`
    display: flex;
  `,
  SubmitButton : styled.div`
    width: 610px;
    height: 80px;
    margin-top: 5px;
    display: flex;
    background-color: ${colors.main};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  `,
  ContentInput : styled.textarea`
    width: 560px;
    height: 150px;
    border-width: 0px;
    border-radius: 4px;
    word-break:break-all;
    display: block;
    padding: 25px;
    margin-top : 75px;
    background-color: ${colors.gray2};
    font-size: 18px;
    font-family: 'PretendardVariable-Regular';
  `


}

