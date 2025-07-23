import * as s from './style.css';

import { useGetItemList } from '@/features/home/apis/useGetItemList';
import ItemList from '@/features/home/components/ItemList';

const RecentList = () => {
  const { data: itemList } = useGetItemList();

  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>최신 상품</h2>
      <ItemList itemList={itemList?.items || []} />
    </div>
  );
};
export default RecentList;
