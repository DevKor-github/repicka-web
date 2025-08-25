import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useNavigate } from 'react-router';

interface BtnProps {
  type: 'review' | 'chat';
  nickname?: string;
  chatRoomId?: number;
  appointmentId: number;
  isReviewed?: boolean;
}

const Btn = ({ type, isReviewed, chatRoomId, appointmentId, nickname }: BtnProps) => {
  const title = type === 'chat' ? '채팅창' : isReviewed ? '작성완료' : '리뷰작성';
  const iconColor = type === 'chat' ? '54' : isReviewed ? 'systemGray2' : '100';
  const icon = type === 'chat' ? 'mgc_chat_1_fill' : isReviewed ? 'mgc_choice_fill' : 'mgc_message_4_fill';

  const bg = type === 'chat' ? 'systemGray2' : isReviewed ? 'systemGray5' : 'main';
  const color = type === 'review' && isReviewed ? '54' : '100';

  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (type === 'chat') {
      navigate(`/chatroom/${chatRoomId}`);

      return;
    }
    if (type === 'review') {
      // 리뷰 작성 전일 때,
      if (!isReviewed) {
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
