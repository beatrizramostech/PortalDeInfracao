import React from 'react';
import { useAlert } from '../../Contexts/AlertProvider';
import './MultiStepForm.css';
import { useFormContext } from '../../Contexts/FormProvider';
import Aviso from '../Aviso/Aviso';

const Avisos = () => {
  const { showAlert } = useAlert();
  const { nextStep, setTipoSolicitante } = useFormContext();

  const handleSubmit = e => {
    e.preventDefault();

    if (!e.target.aviso1.checked || !e.target.aviso2.checked || !e.target.aviso3.checked) {
      showAlert('É necessário confirmar os avisos! ', 'error');
    } else {
      nextStep();
    }
  };

  return (
    <form className="formAviso" onSubmit={handleSubmit}>
      <h2>Avisos</h2>
      <Aviso
        titulo={'Aviso Legal'}
        label={
          'Estou ciente de que oferecer dados falsos é crime e pode resultar em pena de reclusão de 2 a 12 anos e multa.'
        }
        mensagem={
          'É crime inserir informações ou documentos falsos em sistemas públicos. De acordo com o artigo 313-A do Código Penal Brasileiro, fornecer dados falsos para sistemas da Administração Pública pode resultar em pena de reclusão de 2 a 12 anos e multa. Ao utilizar este sistema, você declara que todas as informações fornecidas são verdadeiras, estando ciente das responsabilidades legais aplicáveis.'
        }
        nameInput={'aviso1'}
      />
      <Aviso
        titulo={'Aviso sobre Documentos Digitalizados'}
        label={
          'Estou ciente de que os documentos digitalizados são considerados cópias simples e é minha responsabilidade apresentar o original quando necessário.'
        }
        mensagem={
          'Todos os documentos inseridos neste sistema serão considerados cópias simples digitalizadas. O usuário é responsável por manter os documentos originais, pois eles podem ser exigidos futuramente para comprovação. A apresentação do documento original poderá ser necessária em caso de auditoria, conferência ou solicitação por parte dos órgãos competentes.'
        }
        nameInput={'aviso2'}
      />
      <Aviso
        titulo={'Aviso sobre Documentos com Assinatura Digital'}
        label={'Estou ciente das condições para aceitação de documento digital como original.'}
        mensagem={
          'Apenas documentos assinados digitalmente com certificados ICP-Brasil serão considerados originais, desde que atendam aos seguintes requisitos: A assinatura digital deve estar dentro do prazo de validade. O documento não pode ter sido alterado após a assinatura, incluindo procedimentos como combinação de vários documentos em um único arquivo PDF. Caso o documento não atenda a esses critérios, será tratado como cópia simples digitalizada, sendo necessária a apresentação do original quando solicitado.'
        }
        nameInput={'aviso3'}
      />

      <div className="buttons-form">
        <button type="button" className="info" onClick={() => setTipoSolicitante(undefined)}>
          Voltar
        </button>
        <button type="submit" className="primario">
          Próximo
        </button>
      </div>
    </form>
  );
};

export default Avisos;
