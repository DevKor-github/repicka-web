import MainTopBar from '@/common/components/MainTopBar';
import * as s from './style.css';
import Profile from '@/features/my/components/Profile';
import MyTrade from '@/features/my/components/MyTrade';
import { useGetUser } from '@/features/my/apis/useGetUser';
import NotFoundPage from '../NotFoundPage';

const MyPage = () => {
  const { data, isLoading, isError } = useGetUser();

  if (isLoading) return null;

  return (
    <>
      <MainTopBar />
      {isError ? (
        <NotFoundPage />
      ) : (
        data && (
          <div className={s.Content}>
            <Profile data={data} />
            <MyTrade />
          </div>
        )
      )}
    </>
  );
};

export default MyPage;
