import type { TransactionType } from '@/libs/types/item';
import { isBefore } from 'date-fns';

interface Props {
  transactionType: TransactionType;
  startDateTime: Date | null;
  endDateTime: Date | null;
}
const handleSubmitEdgeCase = ({ transactionType, startDateTime, endDateTime }: Props) => {
  if (transactionType === 'RENTAL' && isBefore(endDateTime as Date, startDateTime as Date)) {
    alert('대여 일시는 반납 일시보다 이전이어야 합니다.');
    return false;
  }

  if (isBefore(startDateTime as Date, new Date())) {
    alert('대여 일시는 현재 시간보다 이후여야 합니다.');
    return false;
  }

  return true;
};
export default handleSubmitEdgeCase;
