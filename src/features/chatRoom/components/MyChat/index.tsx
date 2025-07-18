import type { ReactNode } from 'react';
import * as s from './style.css';

interface Props {
  children: ReactNode;
  time: string;
  marginTop: string;
}

export const MyChat = ({ children, time, marginTop }: Props) => {
  return (
    <div className={s.Container} style={{ marginTop: marginTop }}>
      <div className={s.Time}>{time}</div>
      <div className={s.Message}>{children}</div>
    </div>
  );
};

export default MyChat;
