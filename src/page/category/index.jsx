import styled from "styled-components";
import CategoryBody from "../../component/category/body";
import ItemList from "../../component/category/itemlist";
import Headers from "../../component/common/header";
import { useCategoryStore } from "../../zustand/category";
import { Styled } from "../common/styles";

export default function CategoryPage() {
  const boards = useCategoryStore(state => state.boards);
  const currentPage = useCategoryStore(state => state.currentPage);
  const totalPage = useCategoryStore(state => state.totalPage);
  const seeMore = useCategoryStore(state => state.seeMore);

  return (
    <Styled.Wrapper>
      <Headers />
      <CategoryStyled.Body>
        <CategoryBody />
        <ItemList boards={boards} currentPage={currentPage} totalPage={totalPage} clickSeeMore={seeMore}/>
      </CategoryStyled.Body>
    </Styled.Wrapper>
  )
}

const CategoryStyled = {
  Body : styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
}