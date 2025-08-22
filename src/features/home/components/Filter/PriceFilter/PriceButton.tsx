import * as s from './style.css';

interface Props {
  isSelected: boolean;
  onClick: () => void;
  label: string;
}
const PriceButton = ({ isSelected, onClick, label }: Props) => {
  return (
    <button className={s.PriceTagButton({ isSelected })} onClick={onClick}>
      {label}
      <div className={s.RightIcon({ isSelected })}>
        <div />
      </div>
    </button>
  );
};

export default PriceButton;
