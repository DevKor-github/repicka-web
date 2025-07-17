import type { ReactNode } from 'react';
import * as s from './style.css';

interface Props {
  children: ReactNode;
}

export const MyChat = ({ children }: Props) => {
  return <div className={s.Container}>{children}</div>;
};

export default MyChat;
