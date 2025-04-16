import { createContext, useContext, useState } from 'react';
import { useFormContext } from './FormProvider';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const { setTipoUsuario } = useFormContext();
  const [user, setUser] = useState(null);
  const login = userData => {
    setUser(userData);
    setTipoUsuario(userData.tipoUsuario);
  };

  const logout = () => {
    setUser(null);
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser deve ser usado dentro do UserProvider');
  return context;
};
