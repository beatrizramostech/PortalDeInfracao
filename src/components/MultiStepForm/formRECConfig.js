import Avisos from './Avisos';
import DadosPessoais from './DadosPessoais';
import DadosEmpresa from './DadosEmpresa';
import ValidarAIT from './ValidarAIT';

export const formRECConfig = {
  1: [
    {
      label: 'Avisos',
      component: Avisos,
    },
    {
      label: 'Validar AIT',
      component: ValidarAIT,
    },
    {
      label: 'Dados da Empresa',
      component: DadosEmpresa,
    },
    {
      label: 'Dados Pessoais',
      component: DadosPessoais,
    },
    {
      label: 'Dados Bancários',
      // component: DadosBancarios,
    },
    {
      label: 'Inserir Documentos',
      component: DadosPessoais,
    },
  ],
  2: [
    {
      label: 'Avisos',
      component: Avisos,
    },
    {
      label: 'Validar AIT',
      component: ValidarAIT,
    },
    {
      label: 'Dados Pessoais',
      component: DadosPessoais,
    },
    {
      label: 'Dados Pessoais',
      component: DadosPessoais,
    },
    {
      label: 'Dados Bancários',
      component: DadosPessoais,
    },
    {
      label: 'Inserir Documentos',
      component: DadosPessoais,
    },
  ],
  3: [
    {
      label: 'Avisos',
      component: Avisos,
    },
    {
      label: 'Validar AIT',
      component: ValidarAIT,
    },
    {
      label: 'Dados Pessoais',
      component: DadosPessoais,
    },
    {
      label: 'Dados Bancários',
      component: DadosPessoais,
    },
    {
      label: 'Inserir Documentos',
      component: DadosPessoais,
    }
  ],
  4: [
    {
      label: 'Avisos',
      component: Avisos,
    },
    {
      label: 'Validar AIT',
      component: ValidarAIT,
    },
    {
      label: 'Dados Bancários',
      component: DadosPessoais,
    },
    {
      label: 'Inserir Documentos',
      component: DadosPessoais,
    }
  ],
};
