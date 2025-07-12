import Btn from '@/common/components/Button';
import StepIndicator from '@/common/components/StepIndicator';
import * as s from './style.css';
import { useRentalStore } from '../../stores/Step6Store';
import { useStep1Store } from '../../stores/Step1store';
import { useStep2Store } from '../../stores/Step2Store';
import { useStep3Store } from '../../stores/Step3Store';
import { useStep4Store } from '../../stores/Step4Store';
import { useStep5Store } from '../../stores/Step5Store';

interface NavigatorProps {
  totalSteps: number;
  currentStep: number;
  goNext: () => void;
  goPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Navigator = ({ totalSteps, currentStep, goNext, goPrev, isFirst, isLast }: NavigatorProps) => {
  const isBtnValids = [
    useStep1Store(state => state.isBtnValid()),
    useStep2Store(state => state.isBtnValid()),
    useStep3Store(state => state.isBtnValid()),
    useStep4Store(state => state.isBtnValid()),
    useStep5Store(state => state.isBtnValid()),
    // useStep6Store(state => state.isInitialState()),
    false,
  ];

  const label = isLast ? '완료' : '다음';
  const isBtnValid = isBtnValids[currentStep - 1];

  // TODO: 이거 boolean으로 바꾸고 싶다... 이름을 다르게 하든지
  const btnActive = isBtnValid ? 'main' : 'gray';
  const onClick = () => isBtnValid && goNext();

  return (
    <footer>
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <div className={s.stepBtn}>
        {!isFirst && (
          <div className={s.halfFlex}>
            <Btn onClick={goPrev}>이전</Btn>
          </div>
        )}
        <Btn onClick={onClick} color={btnActive} style={isFirst ? { width: '100%' } : { flex: '1 1 0' }}>
          {label}
        </Btn>
      </div>
    </footer>
  );
};

export default Navigator;
