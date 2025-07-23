import type { HTMLAttributes, PropsWithChildren } from 'react';
import * as s from './style.css';

interface Props extends PropsWithChildren {
  mode?: 'main' | 'default' | 'back' | 'disabled';
  onClick?: () => void;
  style?: HTMLAttributes<HTMLDivElement>['style'];
}
const Btn = ({ children, mode = 'default', onClick, style }: Props) => {
  return (
    <div className={s.Button({ mode })} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
export default Btn;
