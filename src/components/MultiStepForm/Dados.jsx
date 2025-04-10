import React, { useState } from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import './MultiStepForm.css';

const Dados = ({formName}) => {
  const { prevStep, nextStep } = useFormContext();
  const [selected, setSelected] = useState('SELECIONE');

  const handleChange = e => {
    const valor = e.target.value;
    console.log('Valor selecionado:', valor);
    setSelected(valor);
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
          <select onChange={handleChange} value={selected}>
            <option value="SELECIONE">SELECIONE</option>
            <option value="Responsável Pessoa Jurídica">Responsável Pessoa Jurídica</option>
            <option value="Procurador">Procurador</option>
            <option value="Proprietário Atual">Proprietário Atual</option>
            <option value="Responsável AIT">Responsável AIT</option>
            <option value="Terceiro Interessado">Terceiro Interessado</option>
          </select>
        </div>
      </div>

      <section>
        {selected === 'Responsável Pessoa Jurídica' && (
          <>
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
          </>
        )}

        {selected === 'Procurador' && <p>Procurador</p>}
      </section>

      {selected != 'SELECIONE' && (
        <section>
          <h2>Dados Pessoais</h2>
          <div>
            <div className="row">
              <div className="input-group">
                <label>Nome Completo:</label>
                <input type="text" className="medInfo" />
              </div>
            </div>
            <div>
              <div className="row">
                <div className="input-group">
                  <label>Email:</label>
                  <input type="email" className="medInfo" />
                </div>
                <div className="input-group">
                  <label>CNH:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-group-2">
                <label>CPF:</label>
                <input type="text" />
              </div>
              <div className="input-group-2">
                <label>Celular:</label>
                <input type="tel" />
              </div>
            </div>
          </div>
          <div>
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
        </section>
      )}
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

export default Dados;
