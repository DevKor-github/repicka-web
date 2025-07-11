import { useSearchParams } from 'react-router';

import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';
import SearchBox from '@/features/home/components/SearchBox';
import SearchControls from '@/features/home/components/SearchControls';
import { useGetItemList } from '@/features/home/hooks/apis/useGetItemList';
import type { ItemOrderType } from '@/features/home/types';
import type { ColorType, ProductType, SizeType, TradeType, TransactionType } from '@/libs/types/item';
import ItemList from '@/features/home/components/ItemList';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { data: searchData } = useGetItemList({
    keyword: searchParams.get('keyword') || undefined,
    productTypes: searchParams.getAll('product-type') as ProductType[],
    colors: searchParams.getAll('color') as ColorType[],
    sizes: searchParams.getAll('size') as SizeType[],
    itemOrder: searchParams.get('item-order') as ItemOrderType,
    transactionTypes: searchParams.getAll('transaction-type') as TransactionType[],
    date: searchParams.get('date') || undefined,
    tradeMethods: searchParams.getAll('trade-method') as TradeType[],
  });

  return (
    <>
      <SafeArea>
        <div className={s.Container}>
          <div className={s.SearchControlsContainer}>
            <SearchBox />
            <SearchControls itemCounts={121} /> {/* TODO: 검색결과 개수 받아오기 */}
          </div>
          <div className={s.ItemListContainer}>
            <ItemList itemList={searchData || []} />
          </div>
        </div>
      </SafeArea>
      {/* TODO: 필터 */}
    </>
  );
};
export default SearchPage;
