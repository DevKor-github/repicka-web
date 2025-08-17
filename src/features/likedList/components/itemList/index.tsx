import { Link } from 'react-router';
import type { LikeInterface } from '../../types';
import getImageUrl from '@/common/utils/getImageUrl';
import PriceToken from '@/features/home/components/ItemCard/PriceToken';
import { cx } from '@styled-system/css';
import * as s from './style.css';
import { usePostLike } from '@/features/detail/apis/usePostLike';
// import ItemTokenList from "@/common/components/ItemTokenList";

interface Props {
  likes: LikeInterface[];
}

const LikedItemList = ({ likes }: Props) => {
  const { mutate: likeItem } = usePostLike();

  return likes.map(item => {
    const isRental = item.transactionTypes?.includes('RENTAL') ?? false;
    const isSale = item.transactionTypes?.includes('SALE') ?? false;
    // const isLiked = item.isLiked;
    const isLiked = true;

    return (
      <div className={s.Heart}>
        <Link key={item.itemId} className={s.Container} to={`/detail/${item.itemId}`}>
          {item.thumbnail && <img className={s.Image} src={getImageUrl(item.thumbnail)} aria-hidden />}

          <div className={s.Info}>
            <div className={s.Header}>
              <h2 className={s.Title}>{item.title}</h2>
              <div className={s.Price}>
                {isRental && <PriceToken price={item.rentalFee} deposit={item.deposit} />}
                {isSale && <PriceToken price={item.salePrice} />}
              </div>
            </div>
          </div>

          {/* <div className={s.Footer}>
                            <div className={s.Tokens}>
                                <ItemTokenList
                                    showCount={3}
                                    itemInfo={{
                                        productTypes: item.productTypes,
                                        quality: item.quality,
                                        size: item.size,
                                        color: item.color,
                                        tradeMethods: item.tradeMethods,
                                    }}
                                />
                            </div>
                            <div className={s.Interactions}>
                                <div className={s.InteractionItem}>
                                    <span className="mgc_heart_fill" />
                                    <p>{item.likeCount}</p>
                                </div>
                                <div className={s.InteractionItem}>
                                    <span className="mgc_chat_2_fill" />
                                    <p>{item.chatRoomCount}</p>
                                </div>
                            </div>
                        </div> */}
        </Link>
        <button
          className={cx(s.LikeButton({ isLiked }), isLiked ? 'mgc_heart_fill' : 'mgc_heart_line')}
          onClick={() => likeItem(item.itemId)}
        />
      </div>
    );
  });
};

export default LikedItemList;
