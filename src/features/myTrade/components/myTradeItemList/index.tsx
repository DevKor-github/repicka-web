import NoResult from '@/common/components/NoResult';
import ItemCard from '@/features/home/components/ItemCard';

import * as s from './style.css';
import { useGetUserItem } from '../../apis/useGetUserItem';
import { useNavigate } from 'react-router';
import NotFoundPage from '@/pages/NotFoundPage';
import Btn from '@/common/components/Button';

interface Props {
  userId: number;
}

const UserItemList = ({ userId }: Props) => {
  const { data: userItems, isSuccess, isLoading } = useGetUserItem(userId);
  const navigate = useNavigate();

  if (isLoading) return null;
  if (!userItems) return <NotFoundPage />;

  const isEmpty = isSuccess && userItems.length === 0;

  return (
    <div className={s.Content({ isEmpty })}>
      {isEmpty ? (
        <div className={s.NoResult}>
          <NoResult type="my-trade" />
          <Btn mode="main" className={s.Button} onClick={() => navigate('/')}>
            홈으로 돌아가기
          </Btn>
        </div>
      ) : (
        userItems.map(item => <ItemCard key={item.itemId} data={item} />)
      )}
    </div>
  );
};

export default UserItemList;
