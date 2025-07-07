import type { PropsWithChildren } from 'react';
import * as s from './style.css';

interface Props extends PropsWithChildren {
  isSelected?: boolean;
  onClick?: () => void;
}
const Chip = ({ children, isSelected = false, onClick }: Props) => {
  return (
    <div className={s.Container({ isSelected })} onClick={onClick}>
      {children}
    </div>
  );
};
export default Chip;
