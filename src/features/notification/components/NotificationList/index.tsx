import type { NotificationInterface } from '../../types';
import NotificationItemCard from '../NotificationItemCard';

interface Props {
  notification: NotificationInterface;
}

const NotificationList = ({ notification }: Props) => {
  return (
    <>
      {/* {notifications.map(item => ( */}
      <NotificationItemCard data={notification} />
      {/* ))} */}
    </>
  );
};

export default NotificationList;
