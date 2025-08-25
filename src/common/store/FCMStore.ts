import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FCMStore {
  fcmToken: string;
  setFcmToken: (fcmToken: string) => void;
}

export const useFCMStore = create<FCMStore>()(
  persist(
    set => ({
      fcmToken: '',
      setFcmToken: fcmToken => set({ fcmToken }),
    }),
    {
      name: 'fcm-token-storage', // name of the item in the storage (must be unique)
    },
  ),
);
