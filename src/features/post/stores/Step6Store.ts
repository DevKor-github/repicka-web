// 대여료, 보증금, 판매 금액, canDeal

import { create } from 'zustand';

interface RentalStore {
  rentalFee: number;
  deposit: number;

  setRentalFee: (rentalFee: number) => void;
  setDeposit: (deposit: number) => void;

  isBtnValid: () => boolean;
  reset: () => void;
}

export const useRentalStore = create<RentalStore>((set, get) => ({
  rentalFee: 0,
  deposit: 0,
  setRentalFee: rentalFee => set({ rentalFee }),
  setDeposit: deposit => set({ deposit }),

  isBtnValid: () => {
    const { rentalFee } = get();
    return rentalFee !== 0;
  },

  reset: () => {
    set({
      rentalFee: 0,
      deposit: 0,
    });
  },
}));

interface SaleStore {
  salePrice: number;
  canDeal: boolean;

  setSalePrice: (salePrice: number) => void;
  setCanDeal: (canDeal: boolean) => void;

  isBtnValid: () => void;
  reset: () => void;
}

export const useSaleStore = create<SaleStore>((set, get) => ({
  salePrice: 0,
  canDeal: false,
  setSalePrice: salePrice => set({ salePrice }),
  setCanDeal: canDeal => set({ canDeal }),

  isBtnValid: () => {
    const { salePrice } = get();
    return salePrice !== 0;
  },

  reset: () => {
    set({
      salePrice: 0,
      canDeal: false,
    });
  },
}));
