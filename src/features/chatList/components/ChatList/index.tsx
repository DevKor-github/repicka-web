import * as s from './style.css';
import { Link } from 'react-router';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import { toKST } from '@/common/utils/toKST';
import { getKoreanRelativeTime } from '@/common/utils/getKoreanRelativeTime';

// TODO: 나중에 수정하기~~~
interface Props {
  nickName: string;
  profileImageUrl: string | undefined;
  recentChat: string | null;
  count: number;
  chatRoomId: number;
  isVerified: boolean;
  lastChatAt: string | null;
}

const ChatList = ({ nickName, profileImageUrl, recentChat, count, chatRoomId, isVerified, lastChatAt }: Props) => {
  const message = recentChat ? recentChat : '대화를 시작해 보세요!';

  return (
    <Link className={s.List} to={`/chatroom/${chatRoomId}`}>
      <UserProfileImage nickname={nickName} profileImageUrl={profileImageUrl} />
      <div className={s.Contents}>
        <div className={s.TimeInfo}>
          <div className={s.UserInfo}>
            <h1>{nickName}</h1>
            {isVerified && <SchoolVerifiedTag />}
          </div>
          {lastChatAt && <div className={s.Time}>{getKoreanRelativeTime(toKST(new Date(lastChatAt)))}</div>}
        </div>
        <div className={s.MessageInfo}>
          <p className={s.Message}>{message}</p>
          {count !== 0 && <div className={s.Count}>{count}</div>}{' '}
        </div>
      </div>
    </Link>
  );
};

export default ChatList;
