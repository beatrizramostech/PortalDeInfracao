import React from 'react';

const Aviso = ({ titulo, mensagem, label, nameInput }) => {
  return (

      <div className="aviso">
        <h3 className="avisoTitulo">{titulo}</h3>
        <p className="avisoConteudo">{mensagem}</p>
        <div className="check">
          <input type="checkbox" name={nameInput} />
          <label>{label}</label>
        </div>
      </div>

  );
};

export default Aviso;
