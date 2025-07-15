// 대여료, 보증금, 판매 금액, canDeal

import { create } from 'zustand';

interface Step6Store {
  rentalFee: number;
  deposit: number;
  salePrice: number;
  canDeal: boolean;

  setRentalFee: (rentalFee: number) => void;
  setDeposit: (deposit: number) => void;
  setSalePrice: (salePrice: number) => void;
  setCanDeal: (canDeal: boolean) => void;

  reset: () => void;
}

export const useStep6Store = create<Step6Store>(set => ({
  rentalFee: 0,
  deposit: 0,
  salePrice: 0,
  canDeal: false,

  setRentalFee: rentalFee => set({ rentalFee }),
  setDeposit: deposit => set({ deposit }),
  setSalePrice: salePrice => set({ salePrice }),
  setCanDeal: canDeal => set({ canDeal }),

  reset: () => {
    set({
      rentalFee: 0,
      deposit: 0,
      salePrice: 0,
      canDeal: false,
    });
  },
}));
