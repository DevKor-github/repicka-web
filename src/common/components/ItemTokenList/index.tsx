import Token from '@/common/components/Token';
import {
  TAG_TYPES_MAP,
  type Color,
  type ProductType,
  type Quality,
  type Size,
  type TagType,
  type TradeMethods,
  type TransactionType,
} from '@/libs/types/item';

interface Props {
  itemInfo: {
    productTypes?: ProductType[];
    transactionTypes?: TransactionType[];
    color?: Color;
    tradeMethods?: TradeMethods[];
    quality?: Quality;
    size: Size;
  };
  showCount?: number;
}
const ItemTokenList = ({ itemInfo, showCount }: Props) => {
  const tags: TagType[] = [
    ...(itemInfo.transactionTypes || []),
    ...(itemInfo.productTypes || []),
    ...(itemInfo.size ? [itemInfo.size] : []),
    ...(itemInfo.quality ? [itemInfo.quality] : []),
    ...(itemInfo.color ? [itemInfo.color] : []),
    ...(itemInfo.tradeMethods || []),
  ];
  const showAll = showCount === undefined;
  const showTags = showAll ? tags : tags.slice(0, showCount);
  const noneShownCount = tags.length - showTags.length;

  return (
    <>
      {showTags.map(type => {
        // 기타는 표시 X
        if (type === 'COLOR_OTHER' || type === 'PRODUCT_OTHER') return null;

        return <Token key={type}>{TAG_TYPES_MAP[type]}</Token>;
      })}
      {!showAll && noneShownCount > 0 && <Token>+{noneShownCount}</Token>}
    </>
  );
};
export default ItemTokenList;
