import { Link } from 'react-router';
import type { LikeInterface } from '../../types';
import getImageUrl from '@/common/utils/getImageUrl';
import PriceToken from '@/features/home/components/ItemCard/PriceToken';
import { cx } from '@styled-system/css';
import * as s from './style.css';
import { usePostLike } from '@/features/detail/apis/usePostLike';
import ItemTokenList from '@/common/components/ItemTokenList';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  likes: LikeInterface[];
}

const LikedItemList = ({ likes }: Props) => {
  return (
    <>
      {likes.map(item => (
        <LikedItemRow key={item.itemId} item={item} />
      ))}
    </>
  );
};

const LikedItemRow = ({ item }: { item: LikeInterface }) => {
  const { mutate: likeItem } = usePostLike();
  const queryClient = useQueryClient();

  const [isLiked, setIsLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(item.likeCount);

  const isRental = item.transactionTypes?.includes('RENTAL') ?? false;
  const isSale = item.transactionTypes?.includes('SALE') ?? false;

  const toggle = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const next = !isLiked;
    setIsLiked(next);
    setLikeCount(c => (next ? c + 1 : Math.max(0, c - 1)));

    likeItem(item.itemId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['likes'], refetchType: 'active' });
        queryClient.invalidateQueries({ queryKey: ['item', item.itemId], refetchType: 'active' });
      },
      onError: () => {
        setIsLiked(prev => !prev);
        setLikeCount(c => (!next ? c + 1 : Math.max(0, c - 1)));
      },
    });
  };

  return (
    <Link className={s.Container} to={`/detail/${item.itemId}`}>
      {item.thumbnail && <img className={s.Image} src={getImageUrl(item.thumbnail)} aria-hidden />}

      <div className={s.Wrapper}>
        <div className={s.Heart}>
          <div className={s.Info}>
            <div className={s.Header}>
              <h2 className={s.Title}>{item.title}</h2>
              <div className={s.Price}>
                {isRental && <PriceToken price={item.rentalFee} deposit={item.deposit} />}
                {isSale && <PriceToken price={item.salePrice} />}
              </div>
            </div>
          </div>
          <button
            className={cx(s.LikeButton({ isLiked }), isLiked ? 'mgc_heart_fill' : 'mgc_heart_line')}
            onClick={toggle}
            onMouseDown={e => e.preventDefault()}
          />
        </div>

        <div className={s.Footer}>
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
              <p>{likeCount}</p>
            </div>
            <div className={s.InteractionItem}>
              <span className="mgc_chat_2_fill" />
              <p>{item.chatRoomCount}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LikedItemList;
