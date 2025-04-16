import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import './ProgressBar.css';

const ProgressBar = ({ steps, disableFutureSteps = true }) => {
  const { step: currentStep, setStep,  } = useFormContext();

  return (
    <aside className="progress-sidebar">
      <ul className="step-list">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isDisabled = disableFutureSteps && index > currentStep;

          let statusClass = '';
          if (isDisabled) statusClass = 'disabled';
          else if (isCompleted) statusClass = 'completed';
          else if (isCurrent) statusClass = 'current';
       
          return (
            <li
              key={index}
              className={`step-item ${statusClass}`}
              onClick={() => {
                if (!isDisabled) {
                  setStep(index);
                }
              }}
            >
              <span className="step-circle" />
              <span className="step-label">{step}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProgressBar;
