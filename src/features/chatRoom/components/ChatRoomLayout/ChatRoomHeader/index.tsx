import { useNavigate } from 'react-router';
import * as s from './style.css';
import type { ChatRoomResponseData } from '@/features/chatRoom/types';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';

export interface Props {
  data: ChatRoomResponseData;
}

export const ChatRoomHeader = ({ data }: Props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const nickname = data.chatRoom.opponentNickname;
  const isOpponentKorean = data.chatRoom.isOpponentKorean;
  // TODO: profile image 불러오기
  // const profileImage = data.chatRoom.opponentProfileImageUrl;

  return (
    <header>
      <div className={s.Container}>
        <button className={`mgc_left_fill ${s.BackBtn}`} onClick={goBack}></button>
        <div className={s.UserInfo}>
          <div className={s.ProfileCircle} />
          <span>{nickname}</span>
          {isOpponentKorean && <SchoolVerifiedTag />}
        </div>
      </div>
    </header>
  );
};

export default ChatRoomHeader;
