import type { TradeMethods } from '@/libs/types/item';
import { create } from 'zustand';

interface Step3Store {
  tradeMethods: TradeMethods[];
  location: string;
  setTradeMethods: (tradeMethods: TradeMethods[]) => void;
  setLocation: (location: string) => void;
  isBtnValid: () => boolean;
}

export const useStep3Store = create<Step3Store>((set, get) => ({
  tradeMethods: [],
  location: '',
  setTradeMethods: tradeMethods => set({ tradeMethods }),
  setLocation: location => set({ location }),

  isBtnValid: () => {
    const { tradeMethods, location } = get();
    return tradeMethods.length !== 0 && location.trim() !== '';
  },
}));
