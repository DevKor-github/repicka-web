import Token from '@/common/components/Token';
import * as s from './style.css';
import {
  PRODUCT_TYPES_MAP,
  type ColorType,
  type ProductType,
  type QualityType,
  type SizeType,
  type TradeType,
} from '@/libs/types/post';

interface Props {
  itemInfo: {
    productTypes: ProductType[];
    title: string;
    description: string;
    size: SizeType;
    color: ColorType;
    quality: QualityType;
    location: string;
    tradeMethod: TradeType;
    canDeal: boolean;
    saleDate: null;
  };
  price: number;
  deposit: number;
}
const PostContent = ({ itemInfo, price, deposit }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.TextContainer}>
        <div className={s.Header}>
          <h1 className={s.Title}>{itemInfo.title}</h1>
          <div className={s.PriceContainer}>
            {/* TODO: 판매글인 경우 어캐 보일까 */}
            <div className={s.PriceItem}>
              <label>대여료</label>
              <p>{price.toLocaleString()}원</p>
            </div>
            {deposit !== 0 && (
              <div className={s.PriceItem}>
                <label>보증금</label>
                <p>{deposit.toLocaleString()}원</p>
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
