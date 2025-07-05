import { useParams } from 'react-router';

import * as s from './style.css';

import useGetPostDetail from '@/features/detail/hooks/apis/useGetPostDetail';
import DetailHeader from '@/features/detail/components/DetailHeader';
import ImageContainer from '@/features/detail/components/ImageContainer';
import UserInfo from '@/features/detail/components/UserInfo';
import PostContent from '@/features/detail/components/PostContent';
import { DETAIL_PAGE_NAVIGATOR_HEIGHT_REM } from '@/libs/constants/sizes';

const DetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostDetail(Number(id));

  // TODO: 더 예쁜 보여주기
  if (isLoading) return <div>Loading...</div>;
  if (data === undefined) return <div>잘못된 접근입니다</div>;

  return (
    <div className={s.Container}>
      <DetailHeader />
      <div className={s.ScrollContainer} style={{ paddingBottom: `${DETAIL_PAGE_NAVIGATOR_HEIGHT_REM}rem` }}>
        <ImageContainer title={data.itemInfo.title} images={data.images} />
        <div className={s.ContentContainer}>
          <UserInfo userData={data.writer} />
          <PostContent itemInfo={data.itemInfo} price={data.price} deposit={data.deposit} />
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
