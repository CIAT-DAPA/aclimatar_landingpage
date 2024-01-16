import { useState } from 'react';
import './style.css'

const Modal9 = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <div className="div9">
            <a onClick={openModal} href="https://adaptation.aclimatar.org/" target="blank"> 
                <span className="div9container__text">
                Africa
                </span>
            </a>
       

            {modalOpen && (
            <div className="modal9-container">
                <div className="modal9-content">
                <p>Contenido del modal</p>
                {/* <img src="./webs/modal9.PNG" alt="" /> */}
                <button className="close-button9" onClick={closeModal}>
                    Cerrar Modal
                </button>
                </div>
            </div>
            )}
        </div>
    
    );
};

export default Modal9;