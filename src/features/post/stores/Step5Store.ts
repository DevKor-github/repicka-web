import { MAX_FILE_LENGTH } from '@/libs/constants';
import { create } from 'zustand';

// 상품명, 상품설명, 사진
interface Step5Store {
  title: string;
  desc: string;
  serverFileKeys: string[]; // 서버에서 가져온 fileKey
  localFileKeys: string[]; // 로컬 업로드해서 새로 받은 fileKey
  file: File[];
  presignedUrl: string[];

  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setServerFileKeys: (keys: string[]) => void;
  setLocalFileKeys: (keys: string[]) => void;
  setFile: (file: File[]) => void;
  setPresignedUrl: (presignedUrl: string[]) => void;

  isBtnValid: () => boolean;
  reset: () => void;
}

export const useStep5Store = create<Step5Store>((set, get) => ({
  title: '',
  desc: '',
  serverFileKeys: [],
  localFileKeys: [],
  file: [],
  presignedUrl: [],

  setTitle: title => set({ title }),
  setDesc: desc => set({ desc }),
  setServerFileKeys: keys => set({ serverFileKeys: keys }),
  setLocalFileKeys: keys => set({ localFileKeys: keys }),
  setFile: file => set({ file }),
  setPresignedUrl: presignedUrl => set({ presignedUrl }),

  isBtnValid: () => {
    const { title, desc, serverFileKeys, localFileKeys, file } = get();
    return (
      title.trim() !== '' &&
      desc.trim() !== '' &&
      serverFileKeys.length + localFileKeys.length > 0 &&
      file.length <= MAX_FILE_LENGTH
    );
  },

  reset: () => {
    set({ title: '', desc: '', serverFileKeys: [], localFileKeys: [], file: [], presignedUrl: [] });
  },
}));
