import React, { useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useFormContext } from '../../Contexts/FormProvider';
import { formICOConfig } from '../MultiStepForm/formICOConfig';
import './FormICO.css';

const FormICO = () => {
  const { step, tipoSolicitante, tipoForm, tipoUsuario } = useFormContext();
  const [stepLabels, setStepLabels] = useState([]);
  const [formularioFiltrado, setFormularioFiltrado] = useState([]);

  useEffect(() => {
    const formularioAtual = formICOConfig?.[tipoSolicitante];
    const filtroForm = tipoUsuario === 'servidor' ? formularioAtual.slice(1) : formularioAtual;
    setFormularioFiltrado(filtroForm);
    if (filtroForm && Array.isArray(filtroForm)) {
      const labels = filtroForm.map(currentStep => currentStep.label);
      setStepLabels(labels);
    }
  }, [tipoForm, tipoSolicitante, tipoUsuario]);
  let currentStep = formularioFiltrado[step];
  console.log(tipoForm);
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
