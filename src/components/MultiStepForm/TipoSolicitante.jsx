import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import './MultiStepForm.css';

const TipoSolicitante = ({ tipoFormulario }) => {
  const { nextStep, tipoSolicitante, setTipoSolicitante, setTipoForm } = useFormContext();

  const handleChange = e => {
    const valor = e.target.value;
    setTipoSolicitante(parseInt(valor));
  };

  const handleSubmit = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="formsolicitante-container">
      <form className="formsolicitante" onSubmit={handleSubmit}>
        <h2>Tipo de Solicitante</h2>
        <div className="row">
          <div className="input-group">
            <label>Escolha a opção:</label>
            <select onChange={handleChange} value={tipoSolicitante}>
              <option value="SELECIONE">SELECIONE</option>
              <option value="1">Responsável Pessoa Jurídica</option>
              <option value="2">Procurador</option>
              <option value="3">Proprietário do veículo</option>
              {tipoFormulario === 'REC' ? (
                <>
                  <option value="4">Responsável AIT</option>
                  <option value="5">Terceiro Interessado</option>
                </>
              ) : (
                <option value="4">Real Condutor</option>
              )}
            </select>
          </div>
        </div>

        <div className="buttons-form">
          <button type="button" onClick={() => setTipoForm(undefined)} className="info">
            Voltar
          </button>
          <button type="submit" className="primario">
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TipoSolicitante;
