import NoResult from '@/common/components/NoResult';
import ItemCard from '@/features/home/components/ItemCard';
import type { ItemInterface } from '@/features/home/types';

import * as s from './style.css';

interface Props {
  itemList: ItemInterface[];
  isSuccess: boolean;
}
const ItemList = ({ itemList, isSuccess }: Props) => {
  const isEmpty = isSuccess && itemList.length === 0;
  return (
    <div className={s.Container({ isEmpty })}>
      {isEmpty ? <NoResult type="search" /> : itemList.map(item => <ItemCard key={item.itemId} data={item} />)}
    </div>
  );
};
export default ItemList;
