import type { PickInfoInterface } from '../chatRoom/types';

export interface ChatListInterface {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string | null;
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

export interface SubChatListInterface {
  chatId: string;
  userId: number;
  content: string | null;
  isNotification: boolean;
  isPick: boolean;
  pickInfo: PickInfoInterface | null;
  createdAt: string;
}
