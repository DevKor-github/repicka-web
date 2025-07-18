import { useParams } from 'react-router';

import * as s from './style.css';

import DetailHeader from '@/features/detail/components/DetailHeader';
import ImageContainer from '@/features/detail/components/ImageContainer';
import UserInfo from '@/features/detail/components/UserInfo';
import PostContent from '@/features/detail/components/PostContent';
import useGetItemDetail from '@/features/detail/apis/useGetItemDetail';
import BottomActions from '@/features/detail/components/BottomActions';

const DetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetItemDetail(Number(id));

  // TODO: 더 예쁜 보여주기
  if (isLoading) return <div>Loading...</div>;
  if (data === undefined) return <div>잘못된 접근입니다</div>;

  return (
    <div className={s.Container}>
      <DetailHeader itemId={data.itemId} isMine={data.itemInfo.mine} />
      <div className={s.ScrollContainer}>
        <ImageContainer images={data.itemInfo.images} />
        <div className={s.ContentContainer}>
          <UserInfo userData={data.owner} itemId={data.itemId} isLiked={data.itemInfo.liked} />
          <PostContent itemInfo={data.itemInfo} />
        </div>
      </div>
      <BottomActions itemInfo={data.itemInfo} />
    </div>
  );
};
export default DetailPage;
