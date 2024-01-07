import React,{ useState } from "react";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BoardCard from "../card";
import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

function Left({
  children,
  onClick,
}) {
  const [show, setShow] = useState(false);
  return show ? (
    <Button
      onClick={onClick}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {children}
    </Button>
  ) : (
    <Transparent
      onMouseEnter={() => {
        setShow(true);
      }}
    />
  );
}

function Right({
  children,
  onClick,
}) {
  const [show, setShow] = useState(false);
  return  show ? (
    <Button
      onClick={onClick}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {children}
    </Button>
  ) : (
    <Transparent
      onMouseEnter={() => {
        setShow(true);
      }}
    />
  );
}

export function LeftArrow() {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return <Left onClick={() => scrollPrev()}>←</Left>;
}

function RightArrow() {
  const { scrollNext } = React.useContext(VisibilityContext);
  return <Right onClick={() => scrollNext()}>→</Right>;
}

const getItem = () => Array(20).fill(0).map((_,ind) => ({id : `id-${ind}`}));

export default function Scrolls({items}) {

  console.log(items)
  return (
    
    <Container>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items && items.map(({id,title,writer,views,vote}) => (
          <BoardCard 
          id={id}
          title={title}
          writer={writer} 
          views={views}
          option1Image={vote.option1Image}
          option2Image={vote.option2Image}/>
        ))}
      </ScrollMenu>
    </Container>
  )
}



const Container = styled.div`
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;


const Transparent = styled.div`
  width: 10rem;
  position: absolute;
  z-index: 999;
  height: 50rem;
`;

const Button = styled.button`
  color: ${colors.white};
  z-index: 999;
  width: 5rem;
  height: 340px;
  border-width: 0px;
  background-color: ${colors.black};
  cursor: pointer;
`;