// 고민중

import { create } from "zustand";

interface BottomStore {
  planId: number;
  chatId: number;
  setPlanId: (planId: number) => void;
  setChatId: (chatId: number) => void;
}

const bottomStore = create<BottomStore>((set) => ({
  planId: 0,
  chatId: 0,
  setPlanId: (planId: number) => set((state) => ({ ...state, planId })),
  setChatId: (chatId: number) => set((state) => ({ ...state, chatId })),
}));

export default bottomStore;
