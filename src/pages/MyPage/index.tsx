import MainTopBar from '@/common/components/MainTopBar';
import * as s from './style.css';
import Profile from '@/features/my/components/Profile';
import MyTrade from '@/features/my/components/MyTrade';
import { useGetUser } from '@/features/my/apis/useGetUser';
import NotFoundPage from '../NotFoundPage';
import SafeArea from '@/common/components/SafeArea';

const MyPage = () => {
  const { data, isLoading, isError } = useGetUser();

  if (isLoading) return null;

  return (
    <SafeArea>
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
    </SafeArea>
  );
};

export default MyPage;
