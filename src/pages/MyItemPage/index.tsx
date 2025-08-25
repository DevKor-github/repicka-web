import CustomHeader from '@/common/components/CustomHeader';
import SafeArea from '@/common/components/SafeArea';
import { useGetUser } from '@/features/my/apis/useGetUser';
import UserItemList from '@/features/myTrade/components/myTradeItemList';
import { useNavigate } from 'react-router';
import NotFoundPage from '../NotFoundPage';
import * as s from './style.css';

const MyItemPage = () => {
  const navigate = useNavigate();
  const { data: getUser } = useGetUser();

  if (!getUser) return <NotFoundPage />;

  return (
    <SafeArea>
      <CustomHeader onClick={() => navigate(-1)} title="나의 판매 내역" />
      <div className={s.Wrapper}>
        <UserItemList userId={getUser?.id} />
      </div>
    </SafeArea>
  );
};

export default MyItemPage;
