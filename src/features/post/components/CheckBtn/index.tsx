import * as s from './style.css';

interface Props {
  isSelected: boolean;
}

const CheckBtn = ({ isSelected }: Props) => {
  const rightIconClass = isSelected ? 'mgc_check_fill' : null;

  return (
    <div className={s.Container({ isSelected })}>
      <div className={`${rightIconClass}`} />
    </div>
  );
};

export default CheckBtn;
