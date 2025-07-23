import { MAX_FILE_LENGTH } from '@/libs/constants';
import { create } from 'zustand';

// 상품명, 상품설명, 사진
interface Step5Store {
  title: string;
  desc: string;
  files: File[];

  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setFiles: (files: File[]) => void;

  isBtnValid: () => boolean;
  reset: () => void;
}

export const useStep5Store = create<Step5Store>((set, get) => ({
  title: '',
  desc: '',
  files: [],

  setTitle: title => set({ title }),
  setDesc: desc => set({ desc }),
  setFiles: files => set({ files }),

  isBtnValid: () => {
    const { title, desc, files } = get();
    return title.trim() !== '' && desc.trim() !== '' && files.length !== 0 && files.length <= MAX_FILE_LENGTH;
  },

  reset: () => {
    set({ title: '', desc: '', files: [] });
  },
}));
