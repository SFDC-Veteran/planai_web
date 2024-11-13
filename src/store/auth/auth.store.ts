import { create } from 'zustand';

interface SignupStore {
  email: string;
  setEmail: (email: string) => void;
  authCode: string;
  setAuthCode: (authCode: string) => void;
}
export const signupStore = create<SignupStore>((set) => ({
  email: '',
  setEmail: (email: string) => set(() => ({ email })),
  authCode: '',
  setAuthCode: (authCode: string) => set(() => ({ authCode })),
}));
