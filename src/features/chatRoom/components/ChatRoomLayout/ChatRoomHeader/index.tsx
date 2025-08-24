import { useNavigate } from 'react-router';
import * as s from './style.css';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import type { ChatRoomInterface } from '@/features/chatRoom/types';

export interface Props {
  data: ChatRoomInterface;
}

const ChatRoomHeader = ({ data }: Props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const nickname = data.opponentNickname;
  const isOpponentKorean = data.isOpponentKorean;

  return (
    <header>
      <div className={s.Container}>
        <button className={`mgc_left_fill ${s.BackBtn}`} onClick={goBack}></button>
        <div className={s.UserInfo}>
          <UserProfileImage nickname={data.opponentNickname} src={data.opponentProfileImageUrl} />
          <div className={s.Verifiy}>
            {isOpponentKorean && <SchoolVerifiedTag />}
            <span>{nickname}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatRoomHeader;
