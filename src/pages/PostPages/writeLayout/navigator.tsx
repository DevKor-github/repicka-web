import Btn from '@/common/components/Button';
import * as s from './style.css';

const MAX_STEP = 6;

const Navigator = ({
  step,
  setStep,
}: {
  step: number;
  setStep: (next: number) => void;
}) => {
  const goPrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const goNext = () => {
    if (step < MAX_STEP) setStep(step + 1);
    else console.log('작성 완료');
  };

  const isFirst = step === 1;
  const isLast = step === MAX_STEP;

  const label = isLast ? '완료' : '다음';
  const btnWidth = isFirst ? '22.375rem' : '10.875rem';

  return (
    <footer>
      <div className={s.stepBtn}>
        {!isFirst && (
          <Btn onClick = {goPrev} style = {{ width: '10.875rem' }}>
            이전
          </Btn>
        )}
        <Btn
          onClick = {goNext}
          color = "main"
          style = {{ width: btnWidth }}
        >
          {label}
        </Btn>
      </div>
    </footer>
  );
};

export default Navigator;
