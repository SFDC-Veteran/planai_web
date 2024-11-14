// 고민중

import { create } from "zustand";

interface BottomStore {
  planId: number;
  setPlanId: (planId: number) => void;
}

const bottomStore = create<BottomStore>((set) => ({
  planId: 0,
  setPlanId: (planId: number) => set((state) => ({ ...state, planId })),
}));


export default bottomStore;