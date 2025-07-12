import Token from '@/common/components/Token';
import * as s from './style.css';
import { PRODUCT_TYPES_MAP } from '@/libs/types/item';
import type { ItemInfoInterface } from '@/features/detail/types';

interface Props {
  itemInfo: ItemInfoInterface;
}
const PostContent = ({ itemInfo }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.TextContainer}>
        <div className={s.Header}>
          <h1 className={s.Title}>{itemInfo.title}</h1>
          <div className={s.PriceContainer}>
            {/* TODO: 판매글인 경우 어캐 보일까 */}
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
        </div>
        {/* TODO: API 인터페이스 수정 필요 */}
        <div className={s.PostInfoContainer}>
          <p>3일 전</p>
          <span />
          <div className={s.InteractionContainer}>
            <span className={s.InteractionItem}>
              <span className="mgc_heart_fill" />
              <p>12</p>
            </span>
            <span className={s.InteractionItem}>
              <span className="mgc_chat_2_fill" />
              <p>4</p>
            </span>
          </div>
        </div>
        <div className={s.TextContent}>
          {itemInfo.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className={s.TokenContainer}>
        {itemInfo.productTypes.map(type => (
          <Token key={type}>{PRODUCT_TYPES_MAP[type]}</Token>
        ))}
      </div>
    </div>
  );
};
export default PostContent;
