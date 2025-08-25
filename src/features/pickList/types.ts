import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';

export interface AppointmentInterface {
  appointmentId: number;
  itemId: number;
  chatRoomId: number;
  requesterId: number;
  ownerId: number;
  isCreator: boolean;
  imageUrl: string;
  title: string;
  description: string;
  productTypes: ProductType[];
  quality: Quality;
  size: Size;
  color: Color;
  rentalDate: string;
  returnDate: string;
  rentalLocation: string;
  returnLocation: string;
  price: number;
  deposit: number;
  state: 'CONFIRMED' | 'IN_PROGRESS' | 'SUCCESS';
  type: TransactionType;
  tradeMethod: TradeMethods;
  opponentNickname: string;
  isReviewed: boolean;
}
