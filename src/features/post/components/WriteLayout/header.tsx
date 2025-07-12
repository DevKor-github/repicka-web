import * as s from './style.css';
import CustomAlertExample from '../Alert';
import { useState } from 'react';
import { useStep1Store } from '../../stores/Step1Store';
import { useNavigate } from 'react-router';

const Header = () => {
  const [showAlert, setShowAlert] = useState(false);
  const shouldShow = useStep1Store(state => state.isBtnValid)();
  const navigator = useNavigate();

  const handleClose = () => {
    if (shouldShow) setShowAlert(true);
    else navigator(-1);
  };

  const onUnshow = () => {
    setShowAlert(false);
  };

  return (
    <>
      <header>
        <div className={s.Container}>
          <button className={`mgc_close_line ${s.closeBtn}`} onClick={handleClose}></button>
          <span className={s.headerText}> 글쓰기 </span>
        </div>
      </header>
      {showAlert && <CustomAlertExample onUnshow={onUnshow} />}
    </>
  );
};

export default Header;
