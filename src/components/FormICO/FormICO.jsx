import React from 'react';
import Avisos from '../MultiStepForm/Avisos';
import ValidarAIT from '../MultiStepForm/ValidarAIT';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useFormContext } from '../../Contexts/FormProvider';
import Dados from '../MultiStepForm/Dados';

const steps = ['Avisos', 'Validar AIT', 'Dados'];

const FormREC = () => {
  const { step } = useFormContext();

  return (
    <div className='container-page' style={{ display: 'flex' }}>
      <ProgressBar steps={steps} disableFutureSteps={true} />

      <div className="container-form" style={{ flex: 1, padding: '2rem' }}>
        {step === 0 && <Avisos />}
        {step === 1 && <ValidarAIT />}
        {step === 2 && <Dados />}
      </div>
    </div>
  );
};

export default FormREC;
