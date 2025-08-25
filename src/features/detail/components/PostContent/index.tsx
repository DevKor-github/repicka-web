import * as s from './style.css';

import type { ItemInfoInterface } from '@/features/detail/types';
import { getKoreanRelativeTime } from '@/common/utils/getKoreanRelativeTime';
import ItemTokenList from '@/common/components/ItemTokenList';

interface Props {
  itemInfo: ItemInfoInterface;
}
const PostContent = ({ itemInfo }: Props) => {
  const isRental = itemInfo.transactionTypes.includes('RENTAL');
  const isSale = itemInfo.transactionTypes.includes('SALE');

  return (
    <div className={s.Container}>
      <div className={s.TextContainer}>
        <div className={s.Header}>
          <h1 className={s.Title}>{itemInfo.title}</h1>
          <div className={s.PriceContainer}>
            {isRental && (
              <div>
                <div className={s.PriceItem}>
                  <label>대여료</label>
                  <p>{itemInfo.rentalFee.toLocaleString()}원</p>
                </div>
                {itemInfo.deposit !== 0 && (
                  <div className={s.PriceItem}>
                    <label>보증금</label>
                    <p>{itemInfo.deposit.toLocaleString()}원</p>
                  </div>
                )}
              </div>
            )}
            {isSale && (
              <div className={s.PriceItem}>
                <label>판매가</label>
                <p>{itemInfo.salePrice.toLocaleString()}원</p>
              </div>
            )}
          </div>
        </div>
        <div className={s.PostInfoContainer}>
          <p>{getKoreanRelativeTime(new Date(itemInfo.repostDate))}</p>
          <span />
          <div className={s.InteractionContainer}>
            <span className={s.InteractionItem}>
              <span className="mgc_heart_fill" />
              <p>{itemInfo.likeCount}</p>
            </span>
            <span className={s.InteractionItem}>
              <span className="mgc_chat_2_fill" />
              <p>{itemInfo.chatRoomCount}</p>
            </span>
          </div>
        </div>
        <div className={s.TextContent}>{itemInfo.description}</div>
      </div>
      <div className={s.TokenContainer}>
        <ItemTokenList itemInfo={itemInfo} />
      </div>
    </div>
  );
};
export default PostContent;
