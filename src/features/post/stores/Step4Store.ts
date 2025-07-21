import type { Color, Quality, Size } from '@/libs/types/item';
import { create } from 'zustand';

interface Step4Store {
  size: Size | null;
  color: Color | null;
  quality: Quality | null;

  setSize: (size: Size) => void;
  setColor: (color: Color) => void;
  setQuality: (quality: Quality) => void;

  isBtnValid: () => boolean;
  isEmpty: () => boolean;
  reset: () => void;
}

export const useStep4Store = create<Step4Store>((set, get) => ({
  size: null,
  color: null,
  quality: null,

  setSize: size => set({ size }),
  setColor: color => set({ color }),
  setQuality: quality => set({ quality }),

  isBtnValid: () => {
    const { size, color, quality } = get();
    return size !== null && color !== null && quality !== null;
  },
  isEmpty: () => {
    const { size, color, quality } = get();
    return size === null && color === null && quality === null;
  },
  reset: () => {
    set({
      size: null,
      color: null,
      quality: null,
    });
  },
}));
