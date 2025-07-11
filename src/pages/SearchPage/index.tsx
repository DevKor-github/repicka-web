import SafeArea from '@/common/components/SafeArea';
import SearchBox from '@/features/home/components/SearchBox';
import { useGetItemList } from '@/features/home/hooks/apis/useGetItemList';
import type { ItemOrderType } from '@/features/home/types';
import type { ColorType, ProductType, SizeType, TradeType, TransactionType } from '@/libs/types/item';
import { useSearchParams } from 'react-router';

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
        <SearchBox />
      </SafeArea>
      {/* 필터 */}
    </>
  );
};
export default SearchPage;
