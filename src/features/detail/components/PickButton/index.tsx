import Drawer from '@/common/components/Drawer';
import useDrawer from '@/common/hooks/useDrawer';
import type { TransactionType } from '@/libs/types/item';
import PickOptionDrawer from '@/features/detail/components/PickOptionDrawer';

import * as s from './style.css';
import type { ItemInfoInterface } from '@/features/detail/types';

interface Props {
  itemId: number;
  type: TransactionType;
  index: number;
  itemInfo: ItemInfoInterface;
}
const PickButton = ({ itemId, type, index, itemInfo }: Props) => {
  const { open, drawerState } = useDrawer();
  const { rentalFee, salePrice, deposit, tradeMethods, location } = itemInfo;

  const color = index === 0 ? 'red' : 'blue';
  const label = type === 'RENTAL' ? '대여' : '구매';
  const priceText =
    type === 'RENTAL'
      ? `대여료+보증금 ${(deposit + rentalFee).toLocaleString()}원`
      : `판매가 ${salePrice.toLocaleString()}원`;

  const handlePickClick = () => {
    open();
  };

  return (
    <>
      <button className={s.Container({ color })} onClick={handlePickClick} aria-label={`${label}, ${priceText}`}>
        <span>{label}</span>
        <p>{priceText}</p>
      </button>
      <Drawer drawerState={drawerState} title="거래방법" description="원하는 거래 방식을 선택해주세요">
        <PickOptionDrawer itemId={itemId} type={type} tradeMethods={tradeMethods} location={location} />
      </Drawer>
    </>
  );
};

export default PickButton;
