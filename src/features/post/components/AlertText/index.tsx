import type { ReactNode } from 'react';
import * as s from './style.css';

interface Props {
  children: ReactNode;
  isIcon: boolean;
}

const AlertText = ({ children, isIcon }: Props) => {
  return (
    <div className={s.AlertText}>
      {isIcon && (
        <div className={s.Container}>
          <div className={s.Ellipse} />
        </div>
      )}
      {children}
    </div>
  );
};

export default AlertText;
