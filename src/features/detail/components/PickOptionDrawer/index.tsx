import type { TradeMethods, TransactionType } from '@/libs/types/item';

import * as s from './style.css';
import { useNavigate } from 'react-router';

interface Props {
  itemId: number;
  type: TransactionType;
  tradeMethods: TradeMethods[];
  location: string;
}
const PickOptionDrawer = ({ itemId, type, tradeMethods, location }: Props) => {
  const navigate = useNavigate();

  const canDirectTrade = tradeMethods.includes('DIRECT');
  const canParcelTrade = tradeMethods.includes('PARCEL');

  const handleClick = (tradeMethod: TradeMethods) => {
    navigate(`/post-pick/${itemId}/${type}/${tradeMethod}`);
  };

  return (
    <div className={s.DrawerContainer}>
      <button
        className={s.SelectButton({ isActive: canDirectTrade })}
        onClick={() => {
          if (!canDirectTrade) return;
          handleClick('DIRECT');
        }}
      >
        <span>직거래</span>
        <p>
          {canDirectTrade ? (
            <>
              <div className="mgc_location_fill" />
              {location}
            </>
          ) : (
            '직거래가 불가능한 상품이에요'
          )}
        </p>
      </button>
      <button
        className={s.SelectButton({ isActive: canParcelTrade })}
        onClick={() => {
          if (!canParcelTrade) return;
          handleClick('PARCEL');
        }}
      >
        <span>택배거래</span>
        <p>{canParcelTrade ? '내 주소로 판매자가 택배를 발송해 줘요' : '택배거래가 불가능한 상품이에요'}</p>
      </button>
    </div>
  );
};
export default PickOptionDrawer;
