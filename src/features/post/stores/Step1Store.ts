import type { TransactionType } from '@/libs/types/item';
import { create } from 'zustand';

interface Setp1Store {
  transactionTypes: TransactionType[];
  setTransactionTypes: (transactionTypes: TransactionType[]) => void;
  isBtnValid: () => boolean;
  reset: () => void;
}

export const useStep1Store = create<Setp1Store>((set, get) => ({
  transactionTypes: [],
  setTransactionTypes: transactionTypes => set({ transactionTypes }),
  isBtnValid: () => {
    const { transactionTypes } = get();
    return transactionTypes.length !== 0;
  },
  reset: () => {
    set({ transactionTypes: [] });
  },
}));
