import { create } from 'zustand'

export const useUserStore = create((set) => ({
  id : 0,
  nickname : null,
  setNickname: (nickname) => set({nickname : nickname})
}))