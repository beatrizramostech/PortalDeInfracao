import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import './MultiStepForm.css';

const TipoSolicitante = ({ tipoFormulario }) => {
  const { prevStep, nextStep, tipoSolicitante, setTipoSolicitante, setTipoForm } = useFormContext();

  const handleChange = e => {
    const valor = e.target.value;
    console.log('Valor selecionado:', valor);
    setTipoSolicitante(parseInt(valor));
  };

  const handleSubmit = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="formDados" onSubmit={handleSubmit}>
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
                <option value="Responsavel AIT">Responsável AIT</option>
                <option value="Terceiro Interessado">Terceiro Interessado</option>
              </>
            ) : (
              <option value="4">Condutor Real</option>
            )}
          </select>
        </div>
      </div>

      <div className="buttons-form">
        <button type="button" onClick={() => setTipoForm(null)} className="info">
          Voltar
        </button>
        <button type="submit" className="primario">
          Próximo
        </button>
      </div>
    </form>
  );
};

export default TipoSolicitante;
