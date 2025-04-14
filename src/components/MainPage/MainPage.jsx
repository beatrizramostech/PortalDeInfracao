import React from 'react';
import { useFormContext } from '../../Contexts/FormProvider';

const MainPage = () => {
  const { setTipoForm, setTipoSolicitante } = useFormContext();

  const handleCLick = tipoForm => {
    setTipoForm(tipoForm);
    setTipoSolicitante(undefined);
  };
  return (
    <div>
      <button className="primario" type="button" onClick={() => handleCLick('ICO')}>
        ICO
      </button>
      <button className="primario" type="button" onClick={() => handleCLick('REC')}>
        REC
      </button>
    </div>
  );
};

export default MainPage;
