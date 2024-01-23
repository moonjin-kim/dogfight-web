import { create } from "zustand";
import { getBoards, getBoardsByTag } from "../../api/board";

export const useCategoryStore = create((set,get) => ({
  boards: [],
  tag : "",
  currentPage : 0,
  totalPage : 0,
  selectTotalTag : async () => {
    const response = await getBoards();
    set({boards : response.data.content,
    tag : "", 
    currentPage : 0, 
    totalPage : response.data.totalPages})
  },
  selectTags : async (tag) => {
    const response = await getBoardsByTag(tag);
    set({tag : tag, 
      boards : response.data.content,
      currentPage : 0, 
      totalPage : response.data.totalPages})
  },
  seeMore : async () => {
    try {
      const currentPage = get().currentPage;
      const tag = get().tag;
      if(tag == "") {
        const response = await getBoards(currentPage + 1);
        set((prev) => ({currentPage : currentPage + 1,boards : prev.boards.concat(response.data.content)}))
      } else {
        const response = await getBoardsByTag(tag,currentPage + 1);
        set((prev) => ({currentPage : currentPage + 1,boards : prev.boards.concat(response.data.content)}))
      }
    } catch(e) {
      console.log("seeMoreError" + e);
    }
    
  }
}))