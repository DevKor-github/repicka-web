import { useNavigate } from 'react-router';
import * as s from './style.css';
import type { ChatRoomResponse } from '@/features/chatRoom/types';

export interface Props {
  data: ChatRoomResponse;
}

export const ChatRoomHeader = ({ data }: Props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const nickname = data.chatRoom.opponentNickname;

  return (
    <header>
      <div className={s.Container}>
        <button className={`mgc_left_fill ${s.BackBtn}`} onClick={goBack}></button>
        <div className={s.UserInfo}>
          <div className={s.ProfileCircle} />
          <span>{nickname}</span>
        </div>
      </div>
    </header>
  );
};

export default ChatRoomHeader;
