import MainTopBar from '@/common/components/MainTopBar';
import * as s from './style.css';
import Profile from '@/features/my/components/Profile';
import MyTrade from '@/features/my/components/MyTrade';
import { useGetUser } from '@/features/my/apis/useGetUser';

const MyPage = () => {
  const { data, isLoading } = useGetUser();

  return (
    <>
      <MainTopBar />
      <div className={s.Content}>
        {isLoading ? null : data && <Profile data={data} />}
        <MyTrade />
      </div>
    </>
  );
};

export default MyPage;
