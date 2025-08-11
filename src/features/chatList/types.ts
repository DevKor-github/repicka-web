export interface ChatRoomInterface {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string | undefined;
  isOpponentKorean: boolean;
  isOpponentOnline: boolean | null;
  opponentLastEnterAt: string | null;
  isFinished: boolean;
  mostRecentChatContent: string | null;
  mostRecentChatNickname: string | null;
  mostRecentChatIsPick: boolean | null;
  lastChatAt: string | null;
  unreadChatCount: number;
}
