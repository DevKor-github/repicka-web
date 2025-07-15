import type { TradeMethods } from '@/libs/types/item';
import { create } from 'zustand';

interface Step3Store {
  tradeMethods: TradeMethods[];
  location: string;
  setTradeMethods: (tradeMethods: TradeMethods[]) => void;
  setLocation: (location: string) => void;
  isBtnValid: () => boolean;
  isEmpty: () => boolean;
  reset: () => void;
}

export const useStep3Store = create<Step3Store>((set, get) => ({
  tradeMethods: [],
  location: '',
  setTradeMethods: tradeMethods => set({ tradeMethods }),
  setLocation: location => set({ location }),

  isBtnValid: () => {
    const { tradeMethods, location } = get();
    const isDirect = tradeMethods.includes('DIRECT');

    if (tradeMethods.length === 0) return false;

    return isDirect ? location.trim() !== '' : true;
  },
  isEmpty: () => {
    const { tradeMethods } = get();
    return tradeMethods.length === 0;
  },
  reset: () => {
    set({ tradeMethods: [], location: '' });
  },
}));
