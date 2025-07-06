import * as s from './style.css';

interface Props {
  isSelected?: boolean;
  onClick?: () => void;
}

const CheckBtn = ({ isSelected = false, onClick }: Props) => {
  const rightIconClass = isSelected ? 'mgc_check_fill' : null;

  return (
    <div
      className={s.Container({ isSelected })} onClick={onClick}>
      <div className={`${rightIconClass}`} />
    </div>
  );
};

export default CheckBtn;
