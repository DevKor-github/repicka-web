import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';
import type { PickStatus } from '@/libs/types/pick';

export type SubChatRoomInterface =
  | {
      type: 'CHAT';
      message: ChatInterface;
    }
  | {
      type: 'ENTER';
      message: StateInterface;
    }
  | {
      type: 'EXIT';
      message: StateInterface;
    };

export interface ChatRoomInterface {
  chatRoomId: number;
  myUserId: number;
  opponentUserId: number;
  opponentNickname: string;
  opponentProfileImageUrl: string | null;
  isOpponentKorean: boolean;
  isOpponentOnline: boolean;
  opponentLastEnterAt: string;
  isFinished: boolean;
  mostRecentChat: string | null;
}

export interface ChatInterface {
  chatId: string;
  userId: number;
  content: string | null;
  isNotification: boolean;
  isPick: boolean;
  pickInfo: PickInfoInterface | null;
  createdAt: string;
}

export interface StateInterface {
  chatRoomId: number;
  requesterId: number;
  ownerId: number;
  isRequesterOnline: boolean;
  isOwnerOnline: boolean;
  requesterLastEnterAt: string;
  ownerLastEnterAt: string;
}

export interface PickInfoInterface {
  appointmentId: number;
  requesterId: number;
  ownerId: number;
  creatorId: number;
  type: TransactionType;
  state: PickStatus;
  rentalDate: string;
  returnDate: string;
  rentalLocation: string;
  returnLocation: string;
  price: number;
  deposit: number;
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
