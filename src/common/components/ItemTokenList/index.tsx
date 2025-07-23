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
  showAll?: boolean;
}
const ItemTokenList = ({ itemInfo, showAll = true }: Props) => {
  const tags: TagType[] = [
    ...(itemInfo.transactionTypes || []),
    ...(itemInfo.productTypes || []),
    ...(itemInfo.size ? [itemInfo.size] : []),
    ...(itemInfo.quality ? [itemInfo.quality] : []),
    ...(itemInfo.color ? [itemInfo.color] : []),
    ...(itemInfo.tradeMethods || []),
  ];
  const showTags = showAll ? tags : tags.slice(0, 4);
  const noneShownCount = tags.length - showTags.length;

  return (
    <>
      {showTags.map(type => (
        <Token key={type}>{TAG_TYPES_MAP[type]}</Token>
      ))}
      {!showAll && noneShownCount > 0 && <Token>+{noneShownCount}</Token>}
    </>
  );
};
export default ItemTokenList;
