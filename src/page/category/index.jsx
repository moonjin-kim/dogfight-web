import CategoryBody from "../../component/category/body";
import ItemList from "../../component/category/itemlist";
import Headers from "../../component/common/header";
import { Styled } from "../common/styles";

export default function CategoryPage() {

  return (
    <Styled.Wrapper>
      <Headers />
      <CategoryBody />
      <ItemList />
    </Styled.Wrapper>
  )
}