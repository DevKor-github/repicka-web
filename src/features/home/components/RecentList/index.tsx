import * as s from './style.css';

import { useGetItemList } from '@/features/home/apis/useGetItemList';
import ItemList from '@/features/home/components/ItemList';
import { ITEM_PAGING_SIZE } from '@/libs/constants';

const RecentList = () => {
  const { data: itemList } = useGetItemList({ pageSize: ITEM_PAGING_SIZE });

  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>최신 상품</h2>
      <ItemList itemList={itemList?.items || []} />
    </div>
  );
};
export default RecentList;
