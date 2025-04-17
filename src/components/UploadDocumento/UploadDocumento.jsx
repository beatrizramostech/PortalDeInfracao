import React, { useRef, useState } from 'react';
import './UploadDocumento.css';
import '../MultiStepForm/MultiStepForm.css';
import { useFormContext } from '../../Contexts/FormProvider';
import { useAlert } from '../../Contexts/AlertProvider';

const UploadDocumento = ({ onFileSelect }) => {
  const { prevStep } = useFormContext();
  const { showAlert } = useAlert();
  const [fileSelect, setFileSelect] = useState();
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = event => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      setFileSelect(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    showAlert('ENCERROU O FORM!! ', 'success');
  };

  return (
    <form className="formAIT" onSubmit={handleSubmit}>
      <h2>Inserir Documentos</h2>
      <div className="upload-container">
        <div className="upload-box" onClick={handleClick}>
          <span>UPLOAD</span>
          <input type="file" ref={inputRef} onChange={handleChange} style={{ display: 'none' }} />
        </div>
      </div>
      <div className="buttons-form">
        <button type="button" onClick={() => prevStep()} className="info">
          Voltar
        </button>
        <button type="submit" className="primario">
          Finalizar
        </button>
      </div>
    </form>
  );
};

export default UploadDocumento;
