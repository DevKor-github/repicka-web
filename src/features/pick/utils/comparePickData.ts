import type { TransactionType } from '@/libs/types/item';

interface PickDetailInterface {
  rentalDate: string;
  returnDate: string | null;
  rentalLocation: string;
  returnLocation: string | null;
  price: number;
  deposit: number;
  type: TransactionType;
}

/**
 * 초기 데이터와 새로운 데이터를 비교하여 변경된 부분이 있는지 확인
 * @param data
 * @param newData
 * @returns boolean
 *
 */
const comparePickData = (data: PickDetailInterface, newData: PickDetailInterface) => {
  if (data.type === 'RENTAL') {
    return (
      data.rentalDate === newData.rentalDate &&
      data.returnDate === newData.returnDate &&
      data.rentalLocation === newData.rentalLocation &&
      data.returnLocation === newData.returnLocation &&
      data.price === newData.price &&
      data.deposit === newData.deposit
    );
  }
  return (
    data.rentalDate === newData.rentalDate &&
    data.rentalLocation === newData.rentalLocation &&
    data.price === newData.price &&
    data.deposit === newData.deposit
  );
};

export default comparePickData;
