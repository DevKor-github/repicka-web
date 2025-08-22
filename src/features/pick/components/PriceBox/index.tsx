import type { TransactionType } from '@/libs/types/item';
import * as s from './style.css';

import { MAX_PRICE } from '@/libs/constants';
import type { ItemInfoInterface } from '@/features/detail/types';

interface Props {
  itemInfo: ItemInfoInterface;
  transactionType: TransactionType;
  negotiationPrice: number;
  negotiationDeposit: number;
  setNegotiationPrice: (price: number) => void;
  setNegotiationDeposit: (deposit: number) => void;
}
const PriceBox = ({
  itemInfo,
  transactionType,
  negotiationPrice,
  negotiationDeposit,
  setNegotiationPrice,
  setNegotiationDeposit,
}: Props) => {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'price' | 'deposit') => {
    const handlePrice = type === 'price' ? setNegotiationPrice : setNegotiationDeposit;
    const value = e.target.value;
    // 빈 문자열이면 NaN으로 설정
    if (value === '') {
      handlePrice(NaN);
      return;
    }
    // 숫자가 아니거나 0으로 시작하는 경우 (단, '0' 자체는 허용) 무시
    if (!/^\d+$/.test(value) || (value.length > 1 && value.startsWith('0'))) {
      return;
    }
    const numValue = Number(value);
    if (numValue > MAX_PRICE) return;
    handlePrice(numValue);
  };

  return (
    <div className={s.Container}>
      <div className={s.PriceItem()}>
        <label>가격</label>
        <div>
          {transactionType === 'SALE'
            ? `${itemInfo.salePrice.toLocaleString()}원`
            : `대여료 ${itemInfo.rentalFee.toLocaleString()}원 + 보증금 ${itemInfo.deposit.toLocaleString()}원`}
        </div>
      </div>
      <div className={s.PriceItem({ label: 'canDeal' })}>
        <label>네고</label>
        <div>{itemInfo.canDeal ? '가능' : '불가'}</div>
      </div>
      {itemInfo.canDeal && (
        <div className={s.PriceItem()}>
          <label>네고 가격</label>
          <div>
            <input
              type="text"
              value={isNaN(negotiationPrice) ? '' : negotiationPrice.toString()}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder={transactionType === 'SALE' ? '구매가' : '대여료'}
              onChange={e => handlePriceChange(e, 'price')}
            />
            {transactionType === 'RENTAL' && (
              <input
                type="text"
                value={isNaN(negotiationDeposit) ? '' : negotiationDeposit.toString()}
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder={'보증금'}
                onChange={e => handlePriceChange(e, 'deposit')}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default PriceBox;
