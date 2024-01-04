import { useBoardStore } from "../../../zustand/board"
import CommentBar from "../comment_bar";

export default function CommentList(){
  const comments = useBoardStore(state => state.comments);
  console.log(comments);

  if(comments){
    return (
      comments.map(() =>
        <CommentBar />
      )
    )
  }
  
  return (
    <div></div>
  )
}