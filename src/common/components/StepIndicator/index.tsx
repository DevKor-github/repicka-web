import * as s from './style.css';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className={s.Container}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNumber = i + 1;
        const isActive = stepNumber <= currentStep;
        const isCurrent = stepNumber === currentStep;

        return <div key={stepNumber} className={s.progressCircle({ isActive, isCurrent })} />;
      })}
    </div>
  );
};

export default StepIndicator;
