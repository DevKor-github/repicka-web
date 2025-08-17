import MyHeader from '@/common/components/MyHeader';
import * as s from './style.css';
import { useNavigate } from 'react-router';
import { useGetLike } from '@/features/likedList/apis/useGetLike';
import NoResult from '@/common/components/NoResult';
import Btn from '@/common/components/Button';
import NotFoundPage from '../NotFoundPage';
import LikedItemList from '@/features/likedList/components/itemList';

const LikedPage = () => {
  const { data: likes, isLoading } = useGetLike();
  const navigate = useNavigate();

  if (isLoading) return null;
  if (!likes) return <NotFoundPage />;

  const isEmpty = likes.length === 0;

  return (
    <div className={s.Wrapper}>
      <MyHeader title="관심 목록" />
      <div className={s.Content({ isEmpty })}>
        {isEmpty ? (
          <div className={s.NoResult}>
            <NoResult type="like" />
            <Btn mode="main" className={s.Button} onClick={() => navigate('/')}>
              홈으로 돌아가기
            </Btn>
          </div>
        ) : (
          <LikedItemList likes={likes} />
        )}
      </div>
    </div>
  );
};

export default LikedPage;
