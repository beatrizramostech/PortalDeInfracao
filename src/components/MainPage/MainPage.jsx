import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';
import Container from '../Container/Container';
import './MainPage.css';

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
            ICO
          </div>
          <div className="clickform" onClick={() => handleCLick('ICO')}>
            REC
          </div>
        </div>
        {/* <button className="primario" type="button" onClick={() => handleCLick('ICO')}>
          ICO
        </button>
        <button className="primario" type="button" onClick={() => handleCLick('REC')}>
          REC
        </button> */}
      </div>
    </Container>
  );
};

export default MainPage;
