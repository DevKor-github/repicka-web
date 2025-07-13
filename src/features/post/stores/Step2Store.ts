import type { ProductType } from '@/libs/types/item';
import { create } from 'zustand';

interface Step2Store {
  productTypes: ProductType[];
  setProductTypes: (productTypes: ProductType[]) => void;
  isBtnValid: () => boolean;
  reset: () => void;
}

export const useStep2Store = create<Step2Store>((set, get) => ({
  productTypes: [],
  setProductTypes: productTypes => set({ productTypes }),
  isBtnValid: () => {
    const { productTypes } = get();
    return productTypes.length !== 0;
  },
  reset: () => {
    set({ productTypes: [] });
  },
}));
