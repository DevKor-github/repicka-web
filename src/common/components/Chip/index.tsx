import type { PropsWithChildren } from 'react';
import * as s from './style.css';

interface Props extends PropsWithChildren {
  color?: 'gray' | 'red';
  onClick?: () => void;
}
const Chip = ({ children, color = 'gray', onClick }: Props) => {
  return (
    <div className={s.Chip({ color })} onClick={onClick}>
      {children}
    </div>
  );
};
export default Chip;
