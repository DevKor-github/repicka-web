import type { ItemInfoInterface } from '@/features/detail/types';
import Token from '@/common/components/Token';
import { TAG_TYPES_MAP, type TagType } from '@/libs/types/item';

interface Props {
  itemInfo: ItemInfoInterface;
}
const ItemTokenList = ({ itemInfo }: Props) => {
  const tags: TagType[] = [
    ...itemInfo.transactionTypes,
    ...itemInfo.productTypes,
    itemInfo.color,
    ...itemInfo.tradeMethods,
    itemInfo.quality,
    itemInfo.size,
  ];

  return (
    <>
      {tags.map(type => (
        <Token key={type}>{TAG_TYPES_MAP[type]}</Token>
      ))}
    </>
  );
};
export default ItemTokenList;
