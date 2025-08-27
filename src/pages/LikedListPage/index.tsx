import CustomHeader from '@/common/components/CustomHeader';
import * as s from './style.css';
import { useNavigate } from 'react-router';
import { useGetLike } from '@/features/likedList/apis/useGetLike';
import NoResult from '@/common/components/NoResult';
import Btn from '@/common/components/Button';
import NotFoundPage from '../NotFoundPage';
import LikedItemList from '@/features/likedList/components/itemList';
import SafeArea from '@/common/components/SafeArea';

const LikedPage = () => {
  const { data: likes, isLoading } = useGetLike();
  const navigate = useNavigate();

  if (isLoading) return null;
  if (!likes) return <NotFoundPage />;

  const isEmpty = likes.length === 0;

  return (
    <SafeArea>
      <CustomHeader title="관심 목록" onClick={() => navigate(-1)} />
      <div className={s.Wrapper}>
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
    </SafeArea>
  );
};

export default LikedPage;
