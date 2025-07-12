import Btn from '@/common/components/Button';
import StepIndicator from '@/common/components/StepIndicator';
import * as s from './style.css';

import { useStep1Store } from '../../stores/Step1store';
import { useStep2Store } from '../../stores/Step2Store';
import { useStep3Store } from '../../stores/Step3Store';
import { useStep4Store } from '../../stores/Step4Store';
import { useStep5Store } from '../../stores/Step5Store';
import { useRentalStore, useSaleStore } from '../../stores/Step6Store';

interface NavigatorProps {
  totalSteps: number;
  currentStep: number;
  goNext: () => void;
  goPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  isRental: boolean;
  isSale: boolean;
}

const Navigator = ({ totalSteps, currentStep, goNext, goPrev, isFirst, isLast, isRental, isSale }: NavigatorProps) => {
  const isStep1Valid = useStep1Store(state => state.isBtnValid());
  const isStep2Valid = useStep2Store(state => state.isBtnValid());
  const isStep3Valid = useStep3Store(state => state.isBtnValid());
  const isStep4Valid = useStep4Store(state => state.isBtnValid());
  const isStep5Valid = useStep5Store(state => state.isBtnValid());
  const isRentalValid = useRentalStore(state => state.isBtnValid());
  const isSaleValid = useSaleStore(state => state.isBtnValid());

  const isBtnValids = [
    isStep1Valid,
    isStep2Valid,
    isStep3Valid,
    isStep4Valid,
    isStep5Valid,
    (!isRental || isRentalValid) && (!isSale || isSaleValid),
  ];

  const label = isLast ? '완료' : '다음';
  const isBtnValid = isBtnValids[currentStep - 1]; // 현재 스텝의 유효성

  const btnActive = isBtnValid ? 'main' : 'gray';
  const onClick = () => {
    if (isBtnValid) goNext();
  };

  return (
    <footer>
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <div className={s.stepBtn}>
        {!isFirst && (
          <div className={s.halfFlex}>
            <Btn onClick={goPrev} style={{ flex: '1 1 0' }}>
              이전
            </Btn>
          </div>
        )}
        <Btn onClick={onClick} color={btnActive} style={{ flex: '1 1 0' }}>
          {label}
        </Btn>
      </div>
    </footer>
  );
};

export default Navigator;
