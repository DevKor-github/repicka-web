import { cx } from '@styled-system/css';
import * as s from './style.css';

interface DrawerProps {
  onLeave: () => void;
  onReport: () => void;
  onRead: () => void;
}

interface BtnProps {
  onClick: () => void;
  icon: string;
  title: string;
}

const Button = ({ onClick, icon, title }: BtnProps) => {
  return (
    <button className={s.Button} onClick={onClick}>
      <div className={cx(icon, s.Icon)} />
      {title}
    </button>
  );
};

const ChatDrawer = ({ onLeave, onRead, onReport }: DrawerProps) => {
  return (
    <div className={s.ButtonWrapper}>
      <Button icon="mgc_task_fill" onClick={onRead} title="읽음으로 표시하기" />
      <Button icon="mgc_exit_fill" onClick={onLeave} title="채팅방 퇴장하기" />
      <Button icon="mgc_warning_fill" onClick={onReport} title="신고하기" />
    </div>
  );
};

export default ChatDrawer;
