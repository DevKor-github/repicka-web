import { cx } from '@styled-system/css';
import * as s from './style.css';

interface Props {
  onLeave: () => void;
  onReport: () => void;
  onRead: () => void;
}

const ChatDrawer = ({ onLeave, onRead, onReport }: Props) => {
  return (
    <div className={s.ButtonWrapper}>
      <div className={s.Button} onClick={onRead}>
        <div className={cx('mgc_task_fill', s.Icon)} />
        <button>읽음으로 표시하기</button>
      </div>
      <div className={s.Button} onClick={onLeave}>
        <div className={cx('mgc_entrance_fill', s.Icon, s.Reverse)} />
        <button>채팅방 퇴장하기</button>
      </div>
      <div className={s.Button} onClick={onReport}>
        <div className={cx('mgc_warning_fill', s.Icon)} />
        <button>신고하기</button>
      </div>
    </div>
  );
};

export default ChatDrawer;
