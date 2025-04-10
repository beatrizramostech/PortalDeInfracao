import React from 'react';
import './MultiStepForm.css';
import { useAlert } from '../../Contexts/AlertProvider';
import { useFormContext } from '../../Contexts/FormProvider';

const ValidarAIT = () => {
  const { showAlert } = useAlert();
  const { nextStep, prevStep } = useFormContext();

  const handleSubmit = e => {
    e.preventDefault();
    let valid = true;
    const orgao = e.target[0].value;
    const ait = e.target[1].value;
    if (orgao === 'SELECIONE') {
      showAlert(
        'dsfgsdfg',
        'error'
      );
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
      <h2>Validar AIT</h2>

      <label>Órgão Autuador:</label>
      <select>
        <option value="SELECIONE">SELECIONE</option>
        <option value="DETRAN-ES">DETRAN-ES</option>
        <option value="PRF">PRF</option>
        <option value="PREFEITURA">PREFEITURA</option>
        <option value="Polícia Militar">Polícia Militar</option>
      </select>

      <label>Nº do AIT:</label>
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

export default ValidarAIT;
