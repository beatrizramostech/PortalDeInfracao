import React, { Component, useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useFormContext } from '../../Contexts/FormProvider';
import { formICOConfig } from '../MultiStepForm/formConfig';
import './FormICO.css';

const FormICO = () => {
  const { step, tipoSolicitante, tipoForm } = useFormContext();
  const [stepLabels, setStepLabels] = useState([]);

  useEffect(() => {
    const formularioAtual = formICOConfig?.[tipoSolicitante];

    if (formularioAtual && Array.isArray(formularioAtual)) {
      const labels = formularioAtual.map(currentStep => currentStep.label);
      console.log(labels);
      setStepLabels(labels);
    }

    console.log(stepLabels);
    console.log(formularioAtual);
  }, [tipoForm, tipoSolicitante]);

  const currentStep = formICOConfig?.[tipoSolicitante][step];
  return (
    <div className="container-page">
      <ProgressBar steps={stepLabels} disableFutureSteps={true} />

      <div className="container-form" style={{ flex: 1, padding: '2rem' }}>
        {currentStep && <currentStep.component />}
      </div>
    </div>
  );
};

export default FormICO;
