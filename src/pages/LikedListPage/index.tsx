import MyHeader from '@/common/components/MyHeader';
import * as s from './style.css';
import { Link } from 'react-router';
import PriceToken from '@/features/home/components/ItemCard/PriceToken';
import getImageUrl from '@/common/utils/getImageUrl';
import { useGetLike } from '@/features/likedList/apis/useGetLike';
import ItemTokenList from '@/common/components/ItemTokenList';
import { cx } from '@styled-system/css';

const LikedPage = () => {
  const { data, isLoading } = useGetLike();
  if (isLoading) return null;
  if (data === undefined) return <div>잘못된 접근입니다</div>;

  return (
    <div>
      <MyHeader title="관심 목록" />
      <div className={s.Content}>
        {data.map(data => {
          const isRental = data.transactionTypes.includes('RENTAL');
          const isSale = data.transactionTypes.includes('SALE');

          return (
            <Link className={s.Container} to={`/detail/${data.itemId}`}>
              <img className={s.Image} src={getImageUrl(data.thumbnail)} aria-hidden />
              <div className={s.Info}>
                <div className={s.Heart}>
                  <div className={s.Header}>
                    <h2 className={s.Title}>{data.title}</h2>
                    <div className={s.Price}>
                      {isRental && <PriceToken price={data.rentalFee} deposit={data.deposit} />}
                      {isSale && <PriceToken price={data.salePrice} />}
                    </div>
                  </div>
                  <div className={cx('mgc_heart_fill')} />
                </div>
                <div className={s.Footer}>
                  <div className={s.Tokens}>
                    {/* TODO: 디자이너 확인 후 백엔드 데이터 추가 요청 */}
                    {/* <ItemTokenList
                                            showCount={2}
                                            itemInfo={{
                                                productTypes: data.productTypes,
                                                quality: 'BEST',
                                                size: 'L',
                                                color: 'COLOR_OTHER',
                                                tradeMethods: ['PARCEL'],
                                            }}
                                        /> */}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LikedPage;
