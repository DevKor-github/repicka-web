import * as s from './style.css';
import CustomAlert from '../../../../common/components/CustomAlert';
import { useState } from 'react';
import { useStep1Store } from '../../stores/Step1Store';
import { useNavigate } from 'react-router';
import { useStep2Store } from '../../stores/Step2Store';
import { useStep3Store } from '../../stores/Step3Store';
import { useStep4Store } from '../../stores/Step4Store';
import { resetAllStores } from '../../stores/StoreReset';
import type { ItemDetailInterface } from '@/features/detail/types';
import { isStoreEqualToState } from '../../stores/EditStore';

interface Props {
  postState?: ItemDetailInterface;
}

const Header = ({ postState }: Props) => {
  const [showAlert, setShowAlert] = useState(false);

  const isStep1Empty = useStep1Store(state => state.isEmpty());
  const isStep2Empty = useStep2Store(state => state.isEmpty());
  const isStep3Empty = useStep3Store(state => state.isEmpty());
  const isStep4Empty = useStep4Store(state => state.isEmpty());

  const shouldShow = postState
    ? !isStoreEqualToState(postState)
    : !(isStep1Empty && isStep2Empty && isStep3Empty && isStep4Empty);
  const title = postState ? '상품 수정' : '상품 등록';

  const navigator = useNavigate();

  const handleClose = () => {
    if (shouldShow) setShowAlert(true);
    else {
      resetAllStores();
      navigator(-1);
    }
  };

  const onUnshow = () => {
    setShowAlert(false);
  };

  const onReset = () => {
    resetAllStores();
    navigator(-1);
  };

  return (
    <>
      <header>
        <div className={s.Container}>
          <button className={`mgc_close_line ${s.closeBtn}`} onClick={handleClose}></button>
          <span className={s.headerText}>{title}</span>
        </div>
      </header>
      {showAlert && (
        <CustomAlert
          onNo={onUnshow}
          title="지금 그만두면 진행상황이 저장되지 않아요!"
          subTitle="정말 글 작성을 그만두실 건가요?"
          yesBtn="네, 다음에 다시 쓸게요"
          onYes={onReset}
        />
      )}
    </>
  );
};

export default Header;
