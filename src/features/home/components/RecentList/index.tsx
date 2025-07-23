import * as s from './style.css';

import { useGetItemList } from '@/features/home/apis/useGetItemList';
import ItemCard from '@/features/home/components/ItemCard';

const RecentList = () => {
  const { data: itemList } = useGetItemList();

  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>최신 상품</h2>
      <div className={s.ItemList}>{itemList?.items.map(item => <ItemCard key={item.itemId} data={item} />)}</div>
    </div>
  );
};
export default RecentList;
