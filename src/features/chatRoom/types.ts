export interface ChatRoom {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  isOpponentKorean: boolean;
  isFinished: boolean;
}

export interface ChatId {
  timestamp: number;
  date: string;
}

export interface CursorId {
  timestamp: number;
  date: string;
}

export interface Message {
  chatId: ChatId;
  userId: number;
  content: string;
}

export interface Chat {
  messages: Message[];
  cursorId?: CursorId | null;
  hasNext: boolean;
}

export interface ChatRoomResponse {
  chatRoom: ChatRoom;
  chat: Chat;
}
