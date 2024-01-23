import styled from "styled-components"
import { useCategoryStore } from "../../../zustand/category"
import BoardCard from "../../main/card";
import { colors } from "../../../assets/styles/colors";
import SeeMoreView from "../seeMore";
import { useEffect, useRef } from "react";

export default function ItemList({boards, currentPage,totalPage ,clickSeeMore}) {
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY;
    };

    const handleResize = () => {
      window.scrollTo(0, scrollPositionRef.current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Styled.ListView>
        {boards.map(({id,title,writer,views,vote}) => (
            <BoardCard 
            id={id}
            title={title}
            writer={writer} 
            views={views}
            option1Image={vote.option1Image}
            option2Image={vote.option2Image}/>
          ))}
      </Styled.ListView>
      {
        currentPage < totalPage - 1 && 
        <SeeMoreView clickSeeMore={clickSeeMore}/>
      }
    </>
  )
}

const Styled = {
  ListView : styled.div`
    width: 1080px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: auto;
  `,
  SeeMoleButton : styled.div`
    width: 100px;
    height: 100px;
    background-color: ${colors.black};
  `
}