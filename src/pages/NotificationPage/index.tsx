import CustomHeader from '@/common/components/CustomHeader';
import SafeArea from '@/common/components/SafeArea';
import { useNavigate } from 'react-router';
import * as s from './style.css';
import { useGetNotification } from '@/features/notification/apis/useGetNotification';
import NotFoundPage from '../NotFoundPage';
import Btn from '@/common/components/Button';
import NoResult from '@/common/components/NoResult';
import NotificationList from '@/features/notification/components/NotificationList';

const NotigicationPage = () => {
  const navigate = useNavigate();
  const { data: notifications, isLoading } = useGetNotification();

  if (isLoading) return null;
  if (!notifications) return <NotFoundPage />;

  const isEmpty = notifications.length === 0;

  return (
    <SafeArea>
      <CustomHeader title="알림 내역" onClick={() => navigate(-1)} />
      <div className={s.Wrapper}>
        <div className={s.Content({ isEmpty })}>
          {isEmpty ? (
            <div className={s.NoResult}>
              <NoResult type="notification" />
              <Btn mode="main" className={s.Button} onClick={() => navigate('/')}>
                홈으로 돌아가기
              </Btn>
            </div>
          ) : (
            <NotificationList notifications={notifications} />
          )}
        </div>
      </div>
    </SafeArea>
  );
};

export default NotigicationPage;
