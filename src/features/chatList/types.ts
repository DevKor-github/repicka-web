export interface ChatRoom {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProdileImageUrl: string | undefined;
  isOpponentKorean: boolean;
  isFinished: boolean;
  mostRecentChatContent: string | null;
  mostRecentChatIsPick: boolean | null;
  lastChatAt: string | null;
}

export interface ChatResponseData {
  ChatRooms: ChatRoom[];
  hasNext: boolean;
  cursorCreatedAt: string | null;
  cursorId: string | null;
}
