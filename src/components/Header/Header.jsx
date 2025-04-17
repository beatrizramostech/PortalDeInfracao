import React, { useState } from 'react';
import logoDetran from '../../assets/logoDetran.png';
import './Header.css';
import { useFormContext } from '../../Contexts/FormProvider';
import { useUser } from '../../Contexts/UserContext';

const Header = () => {
  const { tipoUsuario } = useFormContext();
  const { login, user, logout } = useUser();
  const [open, setOpen] = useState(false);
  const handleLogin = () => {
    const fakeUser = {
      id: 1,
      name: 'Maria',
      tipoUsuario: 'cidadao',
    };

    login(fakeUser);
  };

  const handleDropdown = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="header-container">
        <div className="banner">
          <div className="divLogoDetran">
            <img className="logoDetran" src={logoDetran} alt="Logo Detran" />
          </div>
          <div className="divTituloPortal">
            <h1 className="tituloPortal">Portal de Infrações</h1>
          </div>
          <div className="divLogoGoverno">
            <img
              className="logoGoverno"
              src="//cdn.es.gov.br/images/logo/governo/SECOM/Brasao_Governo_Secretaria_horizontal_white_right_small.png"
              alt="Brasão Governo do Estado Espírito Santo"
            />
            <span className="nomeSecretaria">Secretaria da Segurança Pública e Defesa Social</span>
          </div>
        </div>
      </header>
      <div className="subheader">
        <div className="tipo-usuario">{tipoUsuario === 'servidor' ? 'Servidor' : 'Cidadão'}</div>

        <ul className="dropdown">
          <li className="dropdown-titulo" onClick={handleDropdown}>
            {user ? (
              user.name
            ) : (
              <p className="login" onClick={handleLogin}>
                Login
              </p>
            )}
          </li>
          <div className={open ? 'dropdown-lista show' : 'dropdown-lista'}>
            <li className="dropdown-item">Informações</li>
            <li className="dropdown-item">Item 2</li>
            <li className="dropdown-item">Item 3</li>
            <li className="dropdown-divider" />
            <li className="dropdown-item" onClick={logout}>
              Sair
            </li>
          </div>
        </ul>

        {/* <button className="primario" onClick={handleLogin}>
          Login
        </button> */}
      </div>
    </>
  );
};

export default Header;
