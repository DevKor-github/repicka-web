import type { PropsWithChildren } from 'react';

import * as s from './style.css';

interface Props extends PropsWithChildren {
  active: boolean;
  onClick?: () => void;
}

const SelectButton = ({ children, active, onClick }: Props) => {
  // TODO: 자연스럽게 바뀌게 애니메이션 추가
  return (
    <button className={s.Container({ active })} onClick={onClick}>
      {children}
      <span className={`mgc_down_line ${s.Icon({ direction: active ? 'up' : 'down' })}`} />
    </button>
  );
};
export default SelectButton;
