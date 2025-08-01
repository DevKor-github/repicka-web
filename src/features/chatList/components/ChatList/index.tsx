import * as s from './style.css';
import { Link } from 'react-router';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';

// TODO: 나중에 수정하기~~~
interface Props {
  nickName: string;
  recentChat: string | null;
  count: number;
  chatRoomId: number;
  isVerified: boolean;
}

const ChatList = ({ nickName, recentChat, count, chatRoomId, isVerified }: Props) => {
  const message = recentChat ? recentChat : '대화를 시작해 보세요!';

  return (
    <Link className={s.List} to={`/chatroom/${chatRoomId}`}>
      <div className={s.ProfileCircle} />
      <div className={s.Contents}>
        <div className={s.UserInfo}>
          <h1>{nickName}</h1>
          {isVerified && <SchoolVerifiedTag />}
        </div>
        <div className={s.MessageInfo}>
          <p className={s.Message}>{message}</p>
          <div className={s.Count}>{count}</div>
        </div>
      </div>
    </Link>
  );
};

export default ChatList;
