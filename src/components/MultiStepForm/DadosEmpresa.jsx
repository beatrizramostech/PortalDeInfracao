import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import './MultiStepForm.css';

const DadosEmpresa = () => {
  const { prevStep, nextStep } = useFormContext();

  const handleSubmit = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="formDados" onSubmit={handleSubmit}>
      <section>
        <div className="formEmpresa">
          <h2>Dados da Empresa</h2>
          <div className="input-group">
            <label>Razão Social:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Nome Fantasia:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>CNPJ:</label>
            <input type="text" />
          </div>
          <div className="formEndereco">
            <h2>Endereço</h2>
            <div className="row">
              <div className="input-group-2">
                <label>CEP:</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <label>Logradouro:</label>
                <input type="text" />
              </div>

              <div className="input-group-3">
                <label>Número:</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Bairro:</label>
                <input type="text" />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Município:</label>
                <input type="text" />
              </div>
              <div className="input-group-2">
                <label>UF:</label>
                <select>
                  <option value="SELECIONE">SELECIONE</option>
                  <option value="AC">Acre (AC)</option>
                  <option value="AL">Alagoas (AL)</option>
                  <option value="AP">Amapá (AP)</option>
                  <option value="AM">Amazonas (AM)</option>
                  <option value="BA">Bahia (BA)</option>
                  <option value="CE">Ceará (CE)</option>
                  <option value="DF">Distrito Federal (DF)</option>
                  <option value="ES">Espírito Santo (ES)</option>
                  <option value="GO">Goiás (GO)</option>
                  <option value="MA">Maranhão (MA)</option>
                  <option value="MT">Mato Grosso (MT)</option>
                  <option value="MS">Mato Grosso do Sul (MS)</option>
                  <option value="MG">Minas Gerais (MG)</option>
                  <option value="PA">Pará (PA)</option>
                  <option value="PB">Paraíba (PB)</option>
                  <option value="PR">Paraná (PR)</option>
                  <option value="PE">Pernambuco (PE)</option>
                  <option value="PI">Piauí (PI)</option>
                  <option value="RJ">Rio de Janeiro (RJ)</option>
                  <option value="RN">Rio Grande do Norte (RN)</option>
                  <option value="RS">Rio Grande do Sul (RS)</option>
                  <option value="RO">Rondônia (RO)</option>
                  <option value="RR">Roraima (RR)</option>
                  <option value="SC">Santa Catarina (SC)</option>
                  <option value="SP">São Paulo (SP)</option>
                  <option value="SE">Sergipe (SE)</option>
                  <option value="TO">Tocantins (TO)</option>
                </select>
              </div>

              <div className="input-group">
                <label>País:</label>
                <input type="text" />
              </div>
            </div>

            <div className="input-group">
              <label>Complemento (Opcional):</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Ponto de Referência (Opcional):</label>
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

export default DadosEmpresa;
