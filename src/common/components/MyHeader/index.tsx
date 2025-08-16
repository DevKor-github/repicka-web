import { cx } from '@styled-system/css';
import { useNavigate } from 'react-router';
import * as s from './style.css';

interface Props {
  title: string;
}

const MyHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className={s.Container}>
      <button className={cx('mgc_left_line', s.backBtn)} onClick={onClick}></button>
      <span className={s.headerText}> {title} </span>
    </div>
  );
};

export default MyHeader;
