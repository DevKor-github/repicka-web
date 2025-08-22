import type { ItemDetailInterface } from '@/features/detail/types';
import type { ItemInterface } from '@/features/home/types';

const getItemInterfaceFromItemDetail = (itemDetail: ItemDetailInterface): ItemInterface => {
  return {
    itemId: itemDetail.itemId,
    productTypes: itemDetail.itemInfo.productTypes,
    transactionTypes: itemDetail.itemInfo.transactionTypes,
    thumbnail: itemDetail.itemInfo.images[0],
    title: itemDetail.itemInfo.title,
    rentalFee: itemDetail.itemInfo.rentalFee,
    salePrice: itemDetail.itemInfo.salePrice,
    deposit: itemDetail.itemInfo.deposit,
    likeCount: itemDetail.itemInfo.likeCount,
    chatRoomCount: itemDetail.itemInfo.chatRoomCount,
    available: true,
    quality: itemDetail.itemInfo.quality,
    size: itemDetail.itemInfo.size,
    color: itemDetail.itemInfo.color,
    tradeMethods: itemDetail.itemInfo.tradeMethods,
  };
};

export default getItemInterfaceFromItemDetail;
