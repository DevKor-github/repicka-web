import * as s from './style.css';

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps } : StepIndicatorProps ) => {
    return (
        <div className={s.Container}>
          {Array.from({ length: totalSteps }, (_, i) => {
            const stepNumber = i + 1;
            const isActive = stepNumber <= currentStep ? 'main' : 'gray';
            const isCurrent = stepNumber === currentStep ? '0.875rem' : '0.375rem';

            return (
              <div
                key={stepNumber}
                className={s.progressCircle({color: isActive})}
                style={{width: isCurrent}}
              />
            );
          })}
        </div>
      );};

export default StepIndicator;