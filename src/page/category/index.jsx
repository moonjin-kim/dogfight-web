import CategoryBody from "../../component/category/body";
import Headers from "../../component/common/header";
import { Styled } from "../common/styles";

export default function CategoryPage() {

  return (
    <Styled.Wrapper>
      <Headers />
      <CategoryBody />
    </Styled.Wrapper>
  )
}