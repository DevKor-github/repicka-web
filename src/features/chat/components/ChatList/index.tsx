import VerifyIcon from '@/libs/assets/VerifyIcon';
import * as s from './style.css';
import { Link } from 'react-router';

const ChatList = () => {
  // TODO: 불러오기...
  return (
    <Link className={s.List} to={'/chatRoom/:chatRoomId'}>
      <div className={s.ProfileCircle} />
      <div className={s.Contents}>
        <div className={s.UserInfo}>
          <h1>며나</h1>
          <span className={s.VerifiedTag}>
            <p>학교인증</p>
            <VerifyIcon />
          </span>
        </div>
        <div className={s.Message}>
          <p>내일 직거래 가능할까요??</p>
          <div className={s.Count}>1</div>
        </div>
      </div>
    </Link>
  );
};

export default ChatList;
