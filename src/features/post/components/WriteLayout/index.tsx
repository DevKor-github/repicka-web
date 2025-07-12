import Header from './header';
import Navigator from './navigator';
import Step1 from '@/features/post/components/StepFunnel/Step1';
import Step2 from '@/features/post/components/StepFunnel/Step2';
import Step3 from '@/features/post/components/StepFunnel/Step3';
import Step4 from '@/features/post/components/StepFunnel/Step4';
import Step5 from '@/features/post/components/StepFunnel/Step5';
import Step6 from '@/features/post/components/StepFunnel/Step6';
import { useState } from 'react';

import * as s from './style.css';

const MAX_STEP = 6;

const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />, <Step6 />];

const WriteLayout = () => {
  const [step, setStep] = useState(1);

  const isFirst = step === 1;
  const isLast = step === MAX_STEP;

  const goPrev = () => {
    setStep(prev => Math.max(1, prev - 1)); // 이전 상태 고려 (prev), 최소 1
  };

  const goNext = () => {
    if (step < MAX_STEP) setStep(step + 1);
    else console.log('작성 완료');
  };

  return (
    <div className={s.entireLayout}>
      <Header />
      <div className={s.innerPage}>{steps[step - 1]}</div>
      <div className={s.Navigator}>
        <Navigator
          totalSteps={MAX_STEP}
          currentStep={step}
          goNext={goNext}
          goPrev={goPrev}
          isFirst={isFirst}
          isLast={isLast}
        />
      </div>
    </div>
  );
};

export default WriteLayout;
