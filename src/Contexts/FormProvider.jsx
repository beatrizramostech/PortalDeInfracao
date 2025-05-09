import React, { useState } from 'react';
import { createContext, useContext } from 'react';

const FormContext = createContext();
const FormProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [tipoSolicitante, setTipoSolicitante] = useState('SELECIONE');
  const [tipoUsuario, setTipoUsuario] = useState();
  const [tipoForm, setTipoForm] = useState();

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <FormContext.Provider
      value={{
        step,
        setStep,
        nextStep,
        prevStep,
        tipoSolicitante,
        setTipoSolicitante,
        tipoUsuario,
        setTipoUsuario,
        tipoForm,
        setTipoForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useFormContext deve ser usado dentro de FormProvider');
  return context;
};
