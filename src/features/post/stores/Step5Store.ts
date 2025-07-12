import { create } from 'zustand';

// 상품명, 상품설명, 사진
interface Step5Store {
  title: string;
  desc: string;
  images: string[];

  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setImages: (images: string[]) => void;

  isBtnValid: () => void;
  reset: () => void;
}

export const useStep5Store = create<Step5Store>((set, get) => ({
  title: '',
  desc: '',
  images: [],

  setTitle: title => set({ title }),
  setDesc: desc => set({ desc }),
  setImages: images => set({ images }),

  isBtnValid: () => {
    const { title, desc, images } = get();
    return title.trim() !== '' && desc.trim() !== '' && images.length !== 0;
  },

  reset: () => {
    set({ title: '', desc: '', images: [] });
  },
}));
