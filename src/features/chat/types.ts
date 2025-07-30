export interface ChatRoom {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string;
  isOpponentKorean: boolean;
  isFinished: boolean;
  mostRecentChat: string | null;
}
