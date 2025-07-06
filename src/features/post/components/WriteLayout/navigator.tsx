import Btn from '@/common/components/Button';
import StepIndicator from '@/features/post/components/StepIndicator';
import * as s from './style.css';

interface NavigatorProps {
  totalSteps: number;
  currentStep: number;
  goNext: () => void;
  goPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Navigator = ({ totalSteps, currentStep, goNext, goPrev, isFirst, isLast }: NavigatorProps) => {
  const label = isLast ? '완료' : '다음';

  return (
    <footer>
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      <div className={s.stepBtn}>
        {!isFirst && (
          <div className={s.halfFlex}>
            <Btn onClick={goPrev}>이전</Btn>
          </div>
        )}
        <Btn onClick={goNext} color="main" style={isFirst ? { width: '100%' } : { flex: '1 1 0' }}>
          {label}
        </Btn>
      </div>
    </footer>
  );
};

export default Navigator;
