import type { ReactNode } from 'react';
import * as s from './style.css';

interface Props {
  children: ReactNode;
  time?: string;
  marginTop: string;
  isRead: boolean;
}

const MyChat = ({ children, time, marginTop, isRead }: Props) => {
  return (
    <div className={s.Container} style={{ marginTop: marginTop }}>
      <div className={s.Info}>
        {isRead || <p>1</p>}
        <span>{time}</span>
      </div>
      <div className={s.Message}>{children}</div>
    </div>
  );
};

export default MyChat;
