import type { ReactNode } from 'react';
import * as s from './style.css';

interface Props {
  children: ReactNode;
  time?: string;
  marginTop: string;
  isRead?: boolean;
}

const OtherChat = ({ children, time, marginTop }: Props) => {
  return (
    <div className={s.Container} style={{ marginTop: marginTop }}>
      <div className={s.Message}>{children}</div>
      <div className={s.Info}>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default OtherChat;
