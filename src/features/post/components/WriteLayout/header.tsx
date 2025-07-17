import * as s from './style.css';
import CustomAlert from '../Alert';
import { useState } from 'react';
import { useStep1Store } from '../../stores/Step1Store';
import { useNavigate } from 'react-router';
import { useStep2Store } from '../../stores/Step2Store';
import { useStep3Store } from '../../stores/Step3Store';
import { useStep4Store } from '../../stores/Step4Store';

const Header = () => {
  const [showAlert, setShowAlert] = useState(false);

  const isStep1Empty = useStep1Store(state => state.isEmpty());
  const isStep2Empty = useStep2Store(state => state.isEmpty());
  const isStep3Empty = useStep3Store(state => state.isEmpty());
  const isStep4Empty = useStep4Store(state => state.isEmpty());

  // 모두 다 비워져 있으면 alert를 띄우지 말아야 한다
  const shouldShow = !(isStep1Empty
    && isStep2Empty
    && isStep3Empty
    && isStep4Empty);

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
      {showAlert && <CustomAlert onUnshow={onUnshow} />}
    </>
  );
};

export default Header;
