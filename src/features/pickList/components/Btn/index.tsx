import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useNavigate } from 'react-router';

interface BtnProps {
  type: 'review' | 'chat';
  nickname?: string;
  chatRoomId?: number;
  appointmentId: number;
  isComplete?: boolean;
}

const Btn = ({ type, isComplete, chatRoomId, appointmentId, nickname }: BtnProps) => {
  const title = type === 'chat' ? '채팅창' : isComplete ? '작성완료' : '리뷰작성';
  const iconColor = type === 'chat' ? '54' : isComplete ? 'systemGray2' : '100';
  const icon = type === 'chat' ? 'mgc_chat_1_fill' : isComplete ? 'mgc_choice_fill' : 'mgc_message_4_fill';

  const bg = type === 'chat' ? 'systemGray2' : isComplete ? 'systemGray5' : 'main';
  const color = type === 'review' && isComplete ? '54' : '100';

  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (type === 'chat') {
      alert('채팅창으로 연결');
      navigate(`/chatroom/${chatRoomId}`);

      return;
    }
    if (type === 'review') {
      // 리뷰 작성 전일 때,
      if (!isComplete) {
        alert('리뷰 작성 페이지로 연결');
        navigate(`/review/${appointmentId}`, {
          state: {
            nickname: nickname,
          },
        });
        return;
      }
      // 리뷰 작성 완료 동작
      alert('리뷰 작성 완료');
    }
  };

  return (
    <button className={s.Container({ bg, color })} onClick={onClick}>
      <div className={cx(icon, s.Icon({ iconColor }))} />
      {title}
    </button>
  );
};

export default Btn;
