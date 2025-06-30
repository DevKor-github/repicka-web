import type { PropsWithChildren } from 'react';
import * as s from './style.css';

interface Props extends PropsWithChildren {
  color?: 'gray' | 'main';
  onClick?: () => void;
}
const Chip = ({ children, color = 'gray', onClick }: Props) => {
  return (
    <div className={s.Container({ color })} onClick={onClick}>
      {children}
    </div>
  );
};
export default Chip;
