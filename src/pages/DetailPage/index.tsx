import { useParams } from 'react-router';

import * as s from './style.css';

import useGetPostDetail from '@/features/detail/hooks/apis/useGetPostDetail';
import DetailHeader from '@/features/detail/components/DetailHeader';
import ImageContainer from '@/features/detail/components/ImageContainer';
import UserInfo from '@/features/detail/components/UserInfo';

const DetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostDetail(Number(id));

  // TODO: 더 예쁜 보여주기
  if (isLoading) return <div>Loading...</div>;
  if (data === undefined) return <div>잘못된 접근입니다</div>;

  return (
    <div className={s.Container}>
      <DetailHeader />
      <ImageContainer title={data.itemInfo.title} images={data.images} />
      <UserInfo userData={data.writer} />
    </div>
  );
};
export default DetailPage;
