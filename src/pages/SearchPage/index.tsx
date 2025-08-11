import { useSearchParams } from 'react-router';

import * as s from './style.css';

import SafeArea from '@/common/components/SafeArea';
import SearchBox from '@/features/home/components/SearchBox';
import SearchControls from '@/features/home/components/SearchControls';
import type { Color, ProductType, Quality, Size, TradeMethods, TransactionType } from '@/libs/types/item';
import ItemList from '@/features/home/components/ItemList';
import { useGetItemCount, type ItemListRequest } from '@/features/home/apis/useGetItemCount';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchFilters: ItemListRequest = {
    keyword: searchParams.get('keyword') || undefined,
    productTypes: searchParams.getAll('product-type') as ProductType[],
    colors: searchParams.getAll('color') as Color[],
    sizes: searchParams.getAll('size') as Size[],
    transactionTypes: searchParams.getAll('transaction-type') as TransactionType[],
    tradeMethods: searchParams.getAll('trade-method') as TradeMethods[],
    qualities: searchParams.getAll('quality') as Quality[],
    startPrice: searchParams.get('start-price') ? Number(searchParams.get('start-price')) : undefined,
    endPrice: searchParams.get('end-price') ? Number(searchParams.get('end-price')) : undefined,
    // date: searchParams.get('date') || undefined,
  };
  const { data: totalCount } = useGetItemCount(searchFilters);

  return (
    <>
      <SafeArea>
        <div className={s.Container}>
          <div className={s.SearchControlsContainer}>
            <SearchBox />
            <SearchControls itemCounts={totalCount || 0} />
          </div>
          <div className={s.ItemListContainer}>
            <ItemList searchFilters={searchFilters} />
          </div>
        </div>
      </SafeArea>
    </>
  );
};
export default SearchPage;
