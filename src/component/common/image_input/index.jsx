import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef
} from 'react';
import styled, {css} from 'styled-components';
import { colors } from '../../../assets/styles/colors';
import Gallery from '../../../assets/image/gallery.svg'



export default function ImageInput({imgFile, setImgFile}) {
  const [isActive, setActive] = useState(false);
  const imgRef = useRef();

  const handleDragStart = (event) => {
    event.preventDefault();
    setActive(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnd = () => {
    setActive(false);
  };

  const setFileInfo = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImgFile(reader.result);
   	};
  };

  const uploadImage = () => {
    const file = imgRef.current.files[0];
    setFileInfo(file);
  }

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);
    const file = event.dataTransfer.files[0];
    setFileInfo(file);
  };
  
  return (
    <Styled.Lable
      className={`preview${isActive ? ' active' : ''}`}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <Styled.Input 
      onChange={uploadImage}
      ref={imgRef}
      type="file" className="file" />
      {imgFile && <Styled.Thumnail
                        src={imgFile}
                        alt="이미지 미리보기"
                        />}
      {!imgFile && (
        <>
          <img src={Gallery} width={100} alt="Gallery" />
          <p className="preview_msg">클릭 혹은 파일을 이곳에 드롭하세요.</p>
          <p className="preview_desc">파일당 최대 3MB</p>
        </>
      )}
    </Styled.Lable>
  );
  
}

const Styled = {
  Lable : styled.label`
    width: 150px;
    height: 150px;
    background-color: #fff;
    border-radius: 5px;
    border: 3px dashed #eee;
    padding: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;

    &:hover {
      border-color: #111;
      background-color: ${colors.gray2};
    }

    .preview_msg {
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      margin: 20px 0 10px;
    }

    .preview_desc {
      margin: 0;
      font-size: 14px;
    }
  `,
  Input : styled.input`
    display: none;

    &::file-selector-button {
      font-size: 14px;
      background: #fff;
      border: 1px solid #111;
      border-radius: 12px;
      padding: 4px 32px;
      cursor: pointer;
    }
  `,
  InfoList : styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    gap: 16px;
    display: flex;
    flex-direction: column;

    .info_key {
      display: block;
      font-weight: 500;
      font-size: 12px;
      margin-bottom: 4px;
    }

    .info_value {
      font-size: 14px;
    }
  `,
  Thumnail : styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
}