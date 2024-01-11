import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBoardListStore = create(
  persist(
    (set,get) => ({
      idx : 0,
      boardList : [],
      setBoardList: (data) => {
        set({
          boardList : data
        })
      },
      plusIdx : () => {
        set({idx : get().idx + 1})
      },
      minusIdx : () => {
        set({idx : get().idx - 1})
      },
      clear : () => {
        set({ idx : 0, boardList : []})
      }
    }),
    {
      name : `board-storage`,
    }
  )
)