import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AlertProvider } from './Contexts/AlertProvider.jsx';
import FormProvider from './Contexts/FormProvider.jsx';
import { UserProvider } from './Contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <FormProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </FormProvider>
    </AlertProvider>
  </StrictMode>
);
