import React, { useState } from 'react';
import Avisos from '../MultiStepForm/Avisos';
import ValidarAIT from '../MultiStepForm/ValidarAIT';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useFormContext } from '../../Contexts/FormProvider';
import TipoSolicitante from '../MultiStepForm/TipoSolicitante';
import DadosEmpresa from '../MultiStepForm/DadosEmpresa';
import DadosPessoais from '../MultiStepForm/DadosPessoais';
import './FormREC.css';

const FormREC = () => {
  const { step, tipoSolicitante, tipoUsuario } = useFormContext();
  const [solicitante, setSolicitante] = useState('');
  let steps = ['Avisos', 'Validar AIT', 'Tipo de Solicitante'];

  switch (tipoSolicitante) {
    case 'Responsável Pessoa Jurídica':
      steps.push('Dados da Empresa');
      steps.push('Dados Pessoais');
      break;
    case 'Procurador PF':
      steps.push('Dados Procurador PF');
      steps.push('Dados Pessoais');
      break;
  }

  return (
    <div className="container-page" style={{ display: 'flex' }}>
      <ProgressBar steps={steps} disableFutureSteps={true} />

      <div className="container-form" style={{ flex: 1, padding: '2rem' }}>
        {step === 0 && <TipoSolicitante tipoFormulario={'REC'} />}
        {step === 1 && <Avisos />}
        {step === 2 && <ValidarAIT />}
        {step == 3 && tipoSolicitante === 'Responsável Pessoa Jurídica' && <DadosEmpresa />}
        {step == 3 && tipoSolicitante != 'Responsável Pessoa Jurídica' && (
          <DadosPessoais titulo={tipoSolicitante} />
        )}
        {step == 4 && <DadosPessoais titulo={'Pessoais'} />}
      </div>
    </div>
  );
};

export default FormREC;
