import type { PropsWithChildren } from 'react';

import * as s from './style.css';
import Arrow from '@/assets/icons/Arrow';

interface Props extends PropsWithChildren {
  active: boolean;
  onClick?: () => void;
}

const SelectButton = ({ children, active, onClick }: Props) => {
  // TODO: 자연스럽게 바뀌게 애니메이션 추가
  return (
    <button className={s.Container({ color: active ? 'main' : 'gray' })} onClick={onClick}>
      {children}
      <div className={s.Icon({ direction: active ? 'up' : 'down' })}>
        <Arrow />
      </div>
    </button>
  );
};
export default SelectButton;
