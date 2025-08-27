import type { NotificationInterface } from '../../types';
import NotificationItemCard from '../NotificationItemCard';

interface Props {
  notifications: NotificationInterface[];
}

const NotificationList = ({ notifications }: Props) => {
  return (
    <>
      {notifications.map(item => (
        <NotificationItemCard data={item} />
      ))}
    </>
  );
};

export default NotificationList;
