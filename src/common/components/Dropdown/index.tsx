import type { PropsWithChildren } from 'react';

import * as s from './style.css';
import Arrow from '@/assets/icons/Arrow';

interface Props extends PropsWithChildren {
  color?: 'main' | 'gray';
  onClick?: () => void;
}
const Dropdown = ({ children, color = 'gray', onClick }: Props) => {
  return (
    <button className={s.Dropdown({ color })} onClick={onClick}>
      {children}
      <div className={s.Icon}>
        <Arrow />
      </div>
    </button>
  );
};
export default Dropdown;
