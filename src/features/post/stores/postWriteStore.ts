import { create } from 'zustand';
import type { PostPayload } from '../types/post';
import type { ColorType, TransactionType, ProductType, QualityType, SizeType, TradeType } from '@/libs/types/item';

interface PostWriteStore extends PostPayload {
  setProductTypes: (productTypes: ProductType[]) => void;
  setSizeType: (size: SizeType) => void;
  setColorType: (color: ColorType) => void;
  setQuality: (quality: QualityType) => void;
  setTitle: (title: string) => void;
  setDescription: (desc: string) => void;
  setLocation: (location: string) => void;
  setTradeMethod: (tradeMethod: TradeType) => void;
  setCanDeal: (canDeal: boolean) => void;
  setTransactionTypes: (transactionTypes: TransactionType[]) => void;
  setRentalFee: (rentalFee: number) => void;
  setSalePrice: (salePrice: number) => void;
  setDeposit: (deposit: number) => void;
  setImages: (images: string[]) => void;

  getPostPayload: () => PostPayload;
  reset: () => void;
}

export const usePostWriteStore = create<PostWriteStore>((set, get) => ({
  item: {
    productTypes: [],
    size: '' as SizeType,
    color: '' as ColorType,
    quality: '' as QualityType,
    title: '',
    description: '',
    location: '',
    tradeMethod: '' as TradeType,
    canDeal: false,
  },
  transactionTypes: [],
  rentalFee: 0,
  salePrice: 0,
  deposit: 0,
  images: [],

  setProductTypes: productTypes =>
    set(state => ({
      item: { ...state.item, productTypes },
    })),
  setSizeType: size =>
    set(state => ({
      item: { ...state.item, size },
    })),
  setColorType: color =>
    set(state => ({
      item: { ...state.item, color },
    })),
  setQuality: quality =>
    set(state => ({
      item: { ...state.item, quality },
    })),
  setTitle: title =>
    set(state => ({
      item: { ...state.item, title },
    })),
  setDescription: desc =>
    set(state => ({
      item: { ...state.item, description: desc },
    })),
  setLocation: location =>
    set(state => ({
      item: { ...state.item, location },
    })),
  setTradeMethod: tradeMethod =>
    set(state => ({
      item: { ...state.item, tradeMethod },
    })),
  setCanDeal: canDeal =>
    set(state => ({
      item: { ...state.item, canDeal },
    })),
  setTransactionTypes: transactionTypes => set({ transactionTypes }),
  setRentalFee: rentalFee => set({ rentalFee }),
  setSalePrice: salePrice => set({ salePrice }),
  setDeposit: deposit => set({ deposit }),
  setImages: images => set({ images }),

  getPostPayload: () => {
    const { item, transactionTypes, rentalFee, salePrice, deposit, images } = get();
    return { item, transactionTypes, rentalFee, salePrice, deposit, images };
  },

  reset: () =>
    set({
      item: {
        productTypes: [],
        size: '' as SizeType,
        color: '' as ColorType,
        quality: '' as QualityType,
        title: '',
        description: '',
        location: '',
        tradeMethod: '' as TradeType,
        canDeal: false,
      },
      transactionTypes: [],
      rentalFee: 0,
      salePrice: 0,
      deposit: 0,
      images: [],
    }),
}));
