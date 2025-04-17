import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import './MultiStepForm.css';

const DadosBancarios = () => {
  const { prevStep, nextStep } = useFormContext();

  const handleSubmit = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="formDados" onSubmit={handleSubmit}>
      <section>
        <div className="formEmpresa">
          <h2>Dados Bancários</h2>
          <div className="input-group">
            <label>Banco:</label>
            <input type="text" />
          </div>
          <div className="row">
            <div className="input-group">
              <label>Agência:</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Conta:</label>
              <input type="text" />
            </div>
            <div className="input-group-3">
              <label>Dígito:</label>
              <input type="text" />
            </div>
            <div className="input-group-3">
              <label htmlFor="">OP:</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </section>

      <div className="buttons-form">
        <button type="button" onClick={() => prevStep()} className="info">
          Voltar
        </button>
        <button type="submit" className="primario">
          Próximo
        </button>
      </div>
    </form>
  );
};

export default DadosBancarios;
