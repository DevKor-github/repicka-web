import Btn from '@/common/components/Button';
import StepIndicator from '@/common/components/StepIndicator';
import * as s from './style.css';

import { useStep1Store } from '../../stores/Step1Store';
import { useStep2Store } from '../../stores/Step2Store';
import { useStep3Store } from '../../stores/Step3Store';
import { useStep4Store } from '../../stores/Step4Store';
import { useStep5Store } from '../../stores/Step5Store';
import { isStoreEqualToState } from '../../stores/EditStore';
import type { ItemDetailInterface } from '@/features/detail/types';

interface NavigatorProps {
  totalSteps: number;
  currentStep: number;
  goNext: () => void;
  goPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  postState?: ItemDetailInterface;
  isSubmitting?: boolean;
}

const Navigator = ({
  totalSteps,
  currentStep,
  goNext,
  goPrev,
  isFirst,
  isLast,
  postState,
  isSubmitting,
}: NavigatorProps) => {
  const isStep1Valid = useStep1Store(state => state.isBtnValid());
  const isStep2Valid = useStep2Store(state => state.isBtnValid());
  const isStep3Valid = useStep3Store(state => state.isBtnValid());
  const isStep4Valid = useStep4Store(state => state.isBtnValid());
  const isStep5Valid = useStep5Store(state => state.isBtnValid());

  const isBtnValids = [isStep1Valid, isStep2Valid, isStep3Valid, isStep4Valid, isStep5Valid, true];

  const label = !isLast ? '다음' : postState ? '수정' : '완료';

  let isBtnValid = isBtnValids[currentStep - 1];

  if (isLast && postState) {
    isBtnValid = !isStoreEqualToState(postState);
  }
  const isBtnAble = isBtnValid && !isSubmitting ? 'main' : 'disabled';

  const onClick = () => {
    if (!isBtnValid || isSubmitting) return;
    goNext();
  };

  return (
    <footer>
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <div className={s.stepBtn}>
        {!isFirst && (
          <div className={s.halfFlex}>
            <Btn mode="back" onClick={goPrev} style={{ flex: '1 1 0' }}>
              이전
            </Btn>
          </div>
        )}
        <Btn onClick={onClick} mode={isBtnAble} style={{ flex: '1 1 0' }}>
          {label}
        </Btn>
      </div>
    </footer>
  );
};

export default Navigator;
