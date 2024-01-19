import { create } from "zustand";
import { getBoards, getBoardsByTag } from "../../api/board";

export const useCategoryStore = create((set,get) => ({
  boards: [],
  requestTotalBoard : async () => {
    const response = await getBoards();
    set({boards : response.data.content})
  },
  requestBoardByTags : async (tag) => {
    const response = await getBoardsByTag(tag);
    set({boards : response.data.content})
  }
}))