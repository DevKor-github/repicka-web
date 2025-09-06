import { create } from 'zustand';

interface UnreadChatStore {
  unreadChatCount: number;
  setUnreadChatCount: (unreadChatCount: number) => void;
}

export const useUnreadChatStore = create<UnreadChatStore>()(set => ({
  unreadChatCount: 0,
  setUnreadChatCount: unreadChatCount => set({ unreadChatCount }),
}));
