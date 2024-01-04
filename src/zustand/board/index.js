import { create } from "zustand";
import client from "../../api/api";

export const useBoardStore = create((set,get) => ({
  board: {},
  comments : [],
  getEarlyBoard : async (id) => {
    const response = (await client.get(`/api/v0/board/${id}`)).data;
    const comments = (await client.get(`/api/v0/comment/${id}`)).data;
    console.log(comments);
    set({board : response.data})
    set({comments : comments.data})
  },
  getBoardComment : async () => {
    const boardId = get().board.id;
    console.log(boardId);
  }
}))