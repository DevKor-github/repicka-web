import Btn from '@/common/components/Button';
<<<<<<< HEAD:src/pages/PostPages/WriteLayout/navigator.tsx
import StepIndicator from '@/pages/PostPages/StepIndicator';
import * as s from './style.css';

interface NavigatorProps {
  totalSteps: number,
  currentStep: number,
=======
import StepIndicator from '@/common/components/StepIndicator';
import * as s from './style.css';

interface NavigatorProps {
  totalSteps: number;
  currentStep: number;
>>>>>>> 659a5cba7b1128b4903a364677b07e4ec33085b6:src/features/post/components/WriteLayout/navigator.tsx
  goNext: () => void;
  goPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Navigator = ({ totalSteps, currentStep, goNext, goPrev, isFirst, isLast }: NavigatorProps) => {
<<<<<<< HEAD:src/pages/PostPages/WriteLayout/navigator.tsx

=======
>>>>>>> 659a5cba7b1128b4903a364677b07e4ec33085b6:src/features/post/components/WriteLayout/navigator.tsx
  const label = isLast ? '완료' : '다음';

  return (
    <footer>
<<<<<<< HEAD:src/pages/PostPages/WriteLayout/navigator.tsx
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps}/>
=======
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
>>>>>>> 659a5cba7b1128b4903a364677b07e4ec33085b6:src/features/post/components/WriteLayout/navigator.tsx
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
