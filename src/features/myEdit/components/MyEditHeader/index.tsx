import { cx } from '@styled-system/css';
import { useNavigate } from 'react-router';
import * as s from './style.css';

const MyEditHeader = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className={s.Container}>
      <button className={cx('mgc_left_line', s.backBtn)} onClick={onClick}></button>
      <span className={s.headerText}> 프로필 수정하기 </span>
    </div>
  );
};

export default MyEditHeader;
