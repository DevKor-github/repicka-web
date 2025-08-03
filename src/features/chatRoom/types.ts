import type { ChatRoom } from '@/features/chatList/types';

export interface Message {
  chatId: string | null;
  userId: number;
  content: string;
  isPick: boolean;
  isRead: boolean;
  createdAt: string;
}

export interface Chat {
  messages: Message[];
  cursorId?: string | null;
  hasNext: boolean;
}

export interface ChatRoomResponseData {
  chatRoom: ChatRoom;
  chat: Chat;
}
