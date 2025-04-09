import React from 'react';
import logoDetran from '../../assets/logoDetran.png';
import './Header.css';

const Header = () => {
  return (
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
  );
};

export default Header;
