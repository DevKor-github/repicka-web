import * as s from './style.css';

interface StepIndicatorProps {
  currentIndex: number;
  totalLength: number;
}

const StepIndicator = ({ currentIndex, totalLength }: StepIndicatorProps) => {
  return (
    <div className={s.Container}>
      {Array.from({ length: totalLength }, (_, i) => {
        const isCurrent = i === currentIndex;
        return <div key={i} className={s.progressCircle({ isCurrent })} />;
      })}
    </div>
  );
};

export default StepIndicator;
