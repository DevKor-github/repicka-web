export interface ChatRoom {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string | undefined;
  isOpponentKorean: boolean;
  isFinished: boolean;
  mostRecentChat: string | null;
  lastChatAt: string | null;
}

export interface Message {
  chatId: string | null;
  userId: number;
  content: string;
  isPick: boolean;
  createdAt: string;
}

export interface Chat {
  messages: Message[];
  cursorId?: string | null;
  hasNext: boolean;
}

export interface ChatRoomResponseData {
  mostRecentChatIsPick: boolean;
  chatRoom: ChatRoom;
  chat: Chat;
}
