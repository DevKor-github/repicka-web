import type { PropsWithChildren } from 'react';

import * as s from './style.css';
import type { TagType } from '@/libs/types/item';
import { Symbol } from '@/common/components/TagOptionBtn';

interface Props extends PropsWithChildren {
  onClick?: () => void;
  selected?: TagType[];
}

const SelectButton = ({ children, onClick, selected }: Props) => {
  const isSelected = selected && selected.length > 0;
  // TODO: 자연스럽게 바뀌게 애니메이션 추가
  return (
    <button className={s.Container({ isSelected })} onClick={onClick}>
      {children}
      {isSelected ? (
        <div className={s.SelectedIconContainer}>
          {selected.map(type => (
            <Symbol key={type} type={type} className={s.SelectedIcon} />
          ))}
        </div>
      ) : (
        <span className={`mgc_down_line ${s.Icon}`} />
      )}
    </button>
  );
};
export default SelectButton;
