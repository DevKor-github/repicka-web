import type { HTMLAttributes, PropsWithChildren } from 'react';
import * as s from './style.css';

interface Props extends PropsWithChildren {
  color?: 'gray' | 'main' | 'softgray' | 'deemedgray';
  onClick?: () => void;
  style? : HTMLAttributes<HTMLDivElement>['style'];
}
const Btn = ({ children, color = 'softgray', onClick, style }: Props) => {
  return (
    <div className={s.Button({ color })} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
export default Btn;
