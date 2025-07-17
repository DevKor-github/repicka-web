import type { ReactNode } from 'react';
import * as s from './style.css';

interface Props {
  children: ReactNode;
  time: string;
}

export const MyChat = ({ children, time }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Time}>{time}</div>
      <div className={s.Message}>{children}</div>
    </div>
  );
};

export default MyChat;
