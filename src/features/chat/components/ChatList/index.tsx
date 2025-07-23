import VerifyIcon from '@/libs/assets/VerifyIcon';
import * as s from './style.css';
import { Link } from 'react-router';

// TODO: 나중에 수정하기~~~
interface Props {
  nickName: string;
  message: string;
  count: number;
  chatRoomId: number;
  isVerified: boolean;
}

const ChatList = ({ nickName, message, count, chatRoomId, isVerified }: Props) => {
  return (
    <Link className={s.List} to={`/chatroom/${chatRoomId}`}>
      <div className={s.ProfileCircle} />
      <div className={s.Contents}>
        <div className={s.UserInfo}>
          <h1>{nickName}</h1>
          {isVerified && (
            <span className={s.VerifiedTag}>
              <p>학교인증</p>
              <VerifyIcon />
            </span>
          )}
        </div>
        <div className={s.Message}>
          <p>{message}</p>
          <div className={s.Count}>{count}</div>
        </div>
      </div>
    </Link>
  );
};

export default ChatList;
