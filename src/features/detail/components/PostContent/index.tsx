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
        <div></div>
        <div></div>
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
