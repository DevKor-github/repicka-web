export interface ChatListInterface {
  chatRoomId: number;
  itemId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string | null;
  isOpponentKorean: boolean;
  mostRecentChatContent: string | null;
  mostRecentChatNickname: string | null;
  mostRecentChatIsPick: boolean | null;
  lastChatAt: string | null;
  unreadChatCount: number;
  itemThumbnailUrl: string;
}

export interface SubChatListInterface {
  type: 'CHAT';
  message: ChatListInterface;
}
