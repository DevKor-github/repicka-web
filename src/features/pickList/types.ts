import type { ProductType, TradeMethods, TransactionType } from '@/libs/types/item';

export interface AppointmentInterface {
  appointmentId: number;
  itemId: number;
  requesterId: number;
  ownerId: number;
  isCreator: boolean;
  imageUrl: string;
  title: string;
  description: string;
  productTypes: ProductType[];
  rentalDate: string;
  returnDate: string;
  rentalLocation: string;
  returnLocation: string;
  price: number;
  deposit: number;
  state: 'CONFIRMED' | 'IN_PROGRESS' | 'SUCCESS';
  type: TransactionType;
  tradeMethod: TradeMethods;
}
