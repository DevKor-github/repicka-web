import ItemCard from '@/features/home/components/ItemCard';
import type { ItemInterface } from '@/features/home/types';

import * as s from './style.css';

interface Props {
  itemList: ItemInterface[];
}
const ItemList = ({ itemList }: Props) => {
  return (
    <div className={s.Container}>
      {itemList.map(item => (
        <ItemCard key={item.itemId} data={item} />
      ))}
    </div>
  );
};
export default ItemList;
