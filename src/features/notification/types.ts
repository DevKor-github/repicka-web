import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';

export const NOTIFICATION_TYPE_ARRAY = [
  'APPOINTMENT_PROPOSAL',
  'APPOINTMENT_CANCEL',
  'APPOINTMENT_REJECT',
  'APPOINTMENT_EXPIRE',
  'APPOINTMENT_RENTAL_REMIND',
  'APPOINTMENT_RETURN_REMIND',
  'APPOINTMENT_CONFIRM',
  'APPOINTMENT_SUCCESS',
] as const;
export type NotificationType = (typeof NOTIFICATION_TYPE_ARRAY)[number];

export interface ItemInfoInterface {
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
  tradeMethods: TradeMethods[];
  likeCount: number;
  chatRoomCount: number;
  repostDate: string;
  isDeleted: boolean;
}

export interface notificationInfoInterface {
  id: number;
  type: NotificationType;
  createdAt: string;
}

export interface appointmentInfoInterface {
  id: number;
  rentalDate: string;
  returnDate: string;
}

export interface NotificationInterface {
  notificationInfo: notificationInfoInterface;
  appointmentInfo: appointmentInfoInterface;
  itemInfo: ItemInfoInterface;
}
