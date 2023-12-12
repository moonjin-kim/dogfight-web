import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useRef
} from 'react';
import styled from 'styled-components';
import ImageInput from '../../common/image_input';

export default function CreateBody() {
  
  return (
    <Styled.CreateBody>
      <ImageInput />
    </Styled.CreateBody>
  );
}

const Styled = {
  CreateBody : styled.div`
    width: 100vw;
    height: 100vh;
    border-width: 1px;
  `
}

