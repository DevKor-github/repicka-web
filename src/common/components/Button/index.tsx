import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cx } from '@styled-system/css';

import * as s from './style.css';

interface Props extends PropsWithChildren {
  mode?: 'main' | 'default' | 'back' | 'disabled';
  onClick?: () => void;
  style?: HTMLAttributes<HTMLDivElement>['style'];
  className?: string;
}
const Btn = ({ children, mode = 'default', onClick, style, className }: Props) => {
  return (
    <div className={cx(s.Button({ mode }), className)} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
export default Btn;
