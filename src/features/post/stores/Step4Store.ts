import type { Color, Quality, Size } from '@/libs/types/item';
import { create } from 'zustand';

interface Step4Store {
  size: Size;
  color: Color;
  quality: Quality;

  setSize: (size: Size) => void;
  setColor: (color: Color) => void;
  setQuality: (quality: Quality) => void;

  isBtnValid: () => void;
}

export const useStep4Store = create<Step4Store>((set, get) => ({
  size: '' as Size,
  color: '' as Color,
  quality: '' as Quality,

  setSize: size => set({ size }),
  setColor: color => set({ color }),
  setQuality: quality => set({ quality }),

  isBtnValid: () => {
    const { size, color, quality } = get();
    return size.trim() !== '' && color.trim() !== '' && quality.trim() !== '';
  },
}));
