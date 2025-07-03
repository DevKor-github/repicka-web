import { TagList, type PostInterface } from '@/libs/types/post';

import * as s from './style.css';

import Token from '@/common/components/Token';

interface Props {
  data: PostInterface;
}
const PostCard = ({ data }: Props) => {
  return (
    <div className={s.Container}>
      <img className={s.Image} src={data.thumbnail} />
      <div className={s.Info}>
        <div className={s.Header}>
          <h2 className={s.Title}>{data.title}</h2>
          <div className={s.Price}>
            <div className={s.PriceItem}>
              <label>대여료</label>
              <p>{data.price}원</p>
            </div>
            <div className={s.PriceItem}>
              <label>보증금</label>
              <p>{data.price}원</p>
            </div>
          </div>
        </div>
        <div className={s.Footer}>
          <div className={s.Tokens}>
            {data.productTypes.map((type, index) => (
              <Token key={`${type}-${index}`}>{TagList[type]}</Token>
            ))}
          </div>
          <div className={s.Interactions}>
            <div className={s.InteractionItem}>
              <span className="mgc_heart_fill" />
              <p>{data.likeCount}</p>
            </div>
            <div className={s.InteractionItem}>
              <span className="mgc_chat_2_fill" />
              <p>{data.chatRoomCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
