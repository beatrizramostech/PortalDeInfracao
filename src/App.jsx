import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Avisos from './components/MultiStepForm/Avisos';

function App() {
  console.log('App is rendering!');
  return (
    <>
      <Header />
      <Container>
        <Avisos />
      </Container>
    </>
  );
}

export default App;
