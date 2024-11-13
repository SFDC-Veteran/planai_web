import { create } from 'zustand';
interface StoreTextType {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
}

export const TextWriteStore = create<StoreTextType>((set) => ({
  title: '',
  description: '',
  setTitle: (title: string) => set(() => ({ title })),
  setDescription: (description: string) => set(() => ({ description })),
}));

export interface ChatRoomData {
  
}

interface ChatStore {
  chatId: string;
  setChatId: (chatId: string) => void;
}

export const chatStroe = create<ChatStore>((set) => ({
  chatId: '',
  setChatId: (chatId: string) => set(() => ({ chatId })),
}));
