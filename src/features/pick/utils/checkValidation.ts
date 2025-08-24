import type { TradeMethods, TransactionType } from '@/libs/types/item';

interface Props {
  transactionType: TransactionType;
  tradeMethod: TradeMethods;
  startLocation: string;
  endLocation: string;
  startDateTime: Date | null;
  endDateTime: Date | null;
}
const checkValidation = ({
  transactionType,
  tradeMethod,
  startLocation,
  endLocation,
  startDateTime,
  endDateTime,
}: Props) => {
  if (transactionType === 'RENTAL') {
    if (tradeMethod === 'DIRECT') {
      return startLocation && endLocation && startDateTime && endDateTime ? true : false;
    }

    return startDateTime && endDateTime ? true : false;
  }

  if (tradeMethod === 'DIRECT') return startLocation && startDateTime ? true : false;

  return startDateTime ? true : false;
};

export default checkValidation;
