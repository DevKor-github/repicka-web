import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';

export interface ChatRoomInterface {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string | undefined;
  isOpponentKorean: boolean;
  isFinished: boolean;
  mostRecentChat: string | null;
}

export interface MessageInterface {
  chatId: string;
  userId: number;
  content: string;
  isPick: boolean;
  isRead: boolean;
  createdAt: string;
}

export interface ItemInterface {
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

export interface CurrentAppointmentInterface {
  isPresent: boolean;
  chatRoomId: null; // 무조건 null
  appointment: {
    appointmentId: number;
    itemId: null; // 무조건 null
    ownerId: null; // 무조건 null
    borrowerId: null; // 무조건 null
    type: TransactionType | null;
    rentalDate: string;
    returnDate: string;
    rentalLocation: string;
    returnLocation: string;
    price: number;
    deposit: number;
  };
}
