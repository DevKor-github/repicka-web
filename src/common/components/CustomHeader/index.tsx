import { cx } from '@styled-system/css';
import * as s from './style.css';

interface Props {
  title: string;
  onClick: () => void;
}

const CustomHeader = ({ title, onClick }: Props) => {
  return (
    <div className={s.Container}>
      <button className={cx('mgc_left_line', s.backBtn)} onClick={onClick} />
      <span className={s.headerText}> {title} </span>
    </div>
  );
};

export default CustomHeader;
