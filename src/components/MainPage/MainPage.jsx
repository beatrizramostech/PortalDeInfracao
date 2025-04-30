import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import Container from '../Container/Container';
import './MainPage.css';
import IconICO from '../../assets/IconICO.png';
import IconREC from '../../assets/IconREC.png';

const MainPage = () => {
  const { setTipoForm, setTipoSolicitante } = useFormContext();

  const handleCLick = tipoForm => {
    setTipoForm(tipoForm);
    setTipoSolicitante(undefined);
  };
  return (
    <Container>
      <div className="main-page">
        <div className="button-forms">
          <div className="clickform" onClick={() => handleCLick('ICO')}>
            <img src={IconICO} alt="Indicação de Condutor" className="icone-img" />
            ICO - Indicação de Condutor
          </div>
          <div className="clickform" onClick={() => handleCLick('REC')}>
            <img src={IconREC} alt="Recurso de Infração" className="icone-img" />
            REC - Recurso de Infração
          </div>
          <div className="clickform" onClick={() => handleCLick('SCCNH')}>
            <img src={IconREC} alt="Suspensão de CNH" className="icone-img" />
            Cancelamento/Suspensão/Cassação de CNH
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
