import './App.css';
import FormICO from './components/FormICO/FormICO';
import FormREC from './components/FormREC/FormREC';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import TipoSolicitante from './components/MultiStepForm/TipoSolicitante';
import { useFormContext } from './Contexts/FormProvider';

function App() {
  const { tipoForm, tipoSolicitante } = useFormContext();

  return (
    <>
      <Header />

      {!tipoForm && <MainPage />}
      {tipoForm && !tipoSolicitante && <TipoSolicitante tipoFormulario={tipoForm} />}
      {tipoForm === 'ICO' && tipoSolicitante && <FormICO />}
      {tipoForm === 'REC' && tipoSolicitante && <FormREC />}
    </>
  );
}

export default App;
