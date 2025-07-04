import { useParams } from 'react-router';

import * as s from './style.css';

import useGetPostDetail from '@/features/detail/hooks/apis/useGetPostDetail';
import DetailHeader from '@/features/detail/components/DetailHeader';

const DetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostDetail(Number(id));

  // TODO: 더 예쁜 보여주기
  if (isLoading) return <div>Loading...</div>;
  if (data === undefined) return <div>잘못된 접근입니다</div>;

  return (
    <div className={s.Container}>
      <DetailHeader />
      <img
        className={s.Image}
        src={'https://crimsonstore.co.kr/web/product/tiny/202411/215b536247ca28c1e97dd6a0d0d6d23a.jpg'}
        alt={data.itemInfo.title}
      />
    </div>
  );
};
export default DetailPage;
