import { useNavigate } from 'react-router';
import * as s from './style.css';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import type { ChatRoomInterface, CurrentAppointmentInterface } from '@/features/chatRoom/types';
import RepickaLogo from '@/libs/assets/RepickaLogo';

export interface Props {
  chatRoomData: ChatRoomInterface;
  appointmentData: CurrentAppointmentInterface;
}

const ChatRoomHeader = ({ appointmentData, chatRoomData }: Props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const nickname = chatRoomData.opponentNickname;
  const isOpponentKorean = chatRoomData.isOpponentKorean;
  const profileImg = chatRoomData.opponentProfileImageUrl;
  const isPicked = appointmentData.isPresent;

  const onClick = () => {
    if (isPicked) navigate(`/pick-detail/${appointmentData.appointment.appointmentId}`);
  };

  return (
    <header className={s.Wrapper}>
      <div className={s.Container}>
        <button className={`mgc_left_line ${s.BackBtn}`} onClick={goBack}></button>
        <div className={s.UserInfo}>
          <UserProfileImage nickname={nickname} src={profileImg} />
          <div className={s.Verifiy}>
            {isOpponentKorean && <SchoolVerifiedTag />}
            <span>{nickname}</span>
          </div>
        </div>
      </div>
      <button className={s.Pick({ isPicked })} onClick={onClick}>
        <div className={s.Logo({ isPicked })}>
          <RepickaLogo />
        </div>
        PICK
      </button>
    </header>
  );
};

export default ChatRoomHeader;
