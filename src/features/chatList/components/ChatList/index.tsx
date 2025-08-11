import * as s from './style.css';
import { Link } from 'react-router';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import { toKST } from '@/common/utils/toKST';
import { getKoreanRelativeTime } from '@/common/utils/getKoreanRelativeTime';
import type { ChatRoomInterface } from '../../types';

export interface Props {
  data: ChatRoomInterface;
}

const ChatList = ({ data }: Props) => {
  const message = data.mostRecentChatIsPick
    ? 'PICK을 확인해 보세요!'
    : data.mostRecentChatContent
      ? data.mostRecentChatContent
      : '대화를 시작해 보세요!';

  return (
    <Link className={s.List} to={`/chatroom/${data.chatRoomId}`}>
      <UserProfileImage nickname={data.opponentNickname} profileImageUrl={data.opponentProfileImageUrl} />
      <div className={s.Contents}>
        <div className={s.TimeInfo}>
          <div className={s.UserInfo}>
            <h1>{data.opponentNickname}</h1>
            {data.isOpponentKorean && <SchoolVerifiedTag />}
          </div>
          {data.lastChatAt && <div className={s.Time}>{getKoreanRelativeTime(toKST(new Date(data.lastChatAt)))}</div>}
        </div>
        <div className={s.MessageInfo}>
          <p className={s.Message}>{message}</p>
          {data.unreadChatCount !== undefined && <div className={s.Count}>{data.unreadChatCount}</div>}
          {/* {data.unreadChatCount !== 0  && <div className={s.Count}>{data.unreadChatCount}</div>} */}
        </div>
      </div>
    </Link>
  );
};

export default ChatList;
