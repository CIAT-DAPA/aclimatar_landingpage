import React from 'react';
import './style.css';

const Modal11 = ({ showModal, closeModal }) => {
  return (
    <div className={`modal ${showModal ? 'display-block' : 'display-none'}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>Contenido del modal...</p>
      </div>
    </div>
  );
};

export default Modal11;

