import NoResult from '@/common/components/NoResult';
import ItemCard from '@/features/home/components/ItemCard';

import * as s from './style.css';
import Pagination from '@/common/components/Pagination';
import { useGetItemList } from '@/features/home/apis/useGetItemList';
import { ITEM_PAGING_SIZE } from '@/libs/constants';
import type { ItemListRequest } from '@/features/home/apis/useGetItemCount';
import { useSearchParams } from 'react-router';
import type { ItemOrderType } from '@/features/home/types';

interface Props {
  searchFilters?: ItemListRequest;
}
const ItemList = ({ searchFilters = {} }: Props) => {
  const [searchParams] = useSearchParams();
  const {
    data: items = [],
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetItemList({
    ...searchFilters,
    pageSize: ITEM_PAGING_SIZE,
    itemOrder: (searchParams.get('sort') as ItemOrderType) || undefined,
  });

  const isEmpty = isSuccess && items.length === 0;

  return (
    <div className={s.Container({ isEmpty })}>
      {isEmpty ? (
        <NoResult type="search" />
      ) : (
        <Pagination
          items={items}
          render={item => <ItemCard key={item.itemId} data={item} />}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
        />
      )}
    </div>
  );
};
export default ItemList;
