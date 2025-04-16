import React from 'react';
import './MultiStepForm.css';
import { useAlert } from '../../Contexts/AlertProvider';
import { useFormContext } from '../../Contexts/FormProvider';

const CPFCNHCondutorReal = () => {
  const { showAlert } = useAlert();
  const { nextStep, prevStep } = useFormContext();

  const handleSubmit = e => {
    e.preventDefault();
    let valid = true;
    const orgao = e.target[0].value;
    const ait = e.target[1].value;
    if (orgao === 'SELECIONE') {
      showAlert('dsfgsdfg', 'error');
      valid = false;
    }
    if (ait === '') {
      setTimeout(() => {
        showAlert('É necessário digitar número do AIT', 'error');
      }, 100);
      valid = false;
    }
    if (valid) {
      nextStep();
    }
  };

  return (
    <form className="formAIT" onSubmit={handleSubmit}>
      <h2>CPF e CNH do Real Condutor</h2>

      <label>CNH:</label>
      <input type="text" className="teste" />
      

      <label>CPF:</label>
      <input type="text" className="teste" />

      <div className="buttons-form">
        <button type="button" className="info" onClick={prevStep}>
          Voltar
        </button>
        <button type="submit" className="primario">
          Próximo
        </button>
      </div>
    </form>
  );
};

export default CPFCNHCondutorReal;
