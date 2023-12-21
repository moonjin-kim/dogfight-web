import styled from "styled-components"
import VoteImage from "../vote_image"

export default function VoteView() {

  

  return (
    <Styled.VoteView>
      <VoteImage />
      <VoteImage />
      {/* <Styled.VoteImage 
      src={`https://www.google.com/imgres?imgurl=https%3A%2F%2Ffile2.nocutnews.co.kr%2Fnewsroom%2Fimage%2F2023%2F06%2F21%2F202306210855316394_0.jpg&tbnid=g-wn5oBAONwdlM&vet=12ahUKEwjoiZuB36CDAxUeulYBHcBQAwcQMygBegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.nocutnews.co.kr%2Fnews%2F5963059&docid=byDUmv5Z70SrpM&w=710&h=473&q=%ED%98%B8%EB%82%A0%EB%91%90&hl=ko&ved=2ahUKEwjoiZuB36CDAxUeulYBHcBQAwcQMygBegQIARB1`}
      />
      <Styled.VoteImage 
      src={`https://www.google.com/imgres?imgurl=https%3A%2F%2Ffile2.nocutnews.co.kr%2Fnewsroom%2Fimage%2F2023%2F06%2F21%2F202306210855316394_0.jpg&tbnid=g-wn5oBAONwdlM&vet=12ahUKEwjoiZuB36CDAxUeulYBHcBQAwcQMygBegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.nocutnews.co.kr%2Fnews%2F5963059&docid=byDUmv5Z70SrpM&w=710&h=473&q=%ED%98%B8%EB%82%A0%EB%91%90&hl=ko&ved=2ahUKEwjoiZuB36CDAxUeulYBHcBQAwcQMygBegQIARB1`}
      /> */}
    </Styled.VoteView>
  )
}

const Styled = {
  VoteView : styled.div`
    width: 520px;
    height: 250px;
    display : flex;
    justify-content: space-between;
  `,
  // VoteImage : styled.img`
  //   width: 250px;
  //   height: 250px;
  // `
}