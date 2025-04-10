import './App.css';
import Container from './components/Container/Container';
import FormREC from './components/FormREC/FormREC';
import Header from './components/Header/Header';
import Avisos from './components/MultiStepForm/Avisos';
import ValidarAIT from './components/MultiStepForm/ValidarAIT';
import FormProvider from './Contexts/FormProvider';

function App() {
  console.log('App is rendering!');
  return (
    <>
      <Header />
        <FormProvider>
          <FormREC />
        </FormProvider>
    </>
  );
}

export default App;
