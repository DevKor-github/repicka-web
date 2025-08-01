import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';

export interface ChatRoom {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string | null;
  isOpponentKorean: boolean;
  isFinished: boolean;
  mostRecentChat: string | null;
}

export interface Message {
  chatId: string;
  userId: number;
  content: string;
  isPick: boolean;
  createdAt: string;
}

export interface Chat {
  messages: Message[];
  cursorId: string | null;
  hasNext: boolean;
}

export interface Item {
  itemId: number;
  productTypes: ProductType[];
  transactionTypes: TransactionType[];
  thumbnail: string;
  title: string;
  rentalFee: number;
  salePrice: number;
  deposit: number;
  size: Size;
  color: Color;
  quality: Quality;
  tradeMethods: TradeMethods;
  likeCount: number;
  chatRoomCount: number;
  repostDate: string;
}

export interface ChatRoomResponse {
  chatRoom: ChatRoom;
  chat: Chat;
  item: Item;
}

export interface GetChatRoomResponse {
  message: string;
  data: ChatRoomResponse;
}
