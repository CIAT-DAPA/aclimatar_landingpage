import { useState } from 'react';
import './style.css'
const Modal11 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    
    return (
        <div className="div11" >
                <span onClick={openModal}  className="div11container__text">
                    DEFORESTATION-FREE PRODUCTION
                </span> 


                {modalOpen && (
                      <div className="modalT-container overlay">
                      <div className="modalT-content">
                      
                      <button className="close-buttonT" onClick={closeModal}>
                          X
                      </button>
                      <p className="title-modal">DEFORESTATION-FREE PRODUCTION</p>  
                      
                      <p className="text-modal">Comming soon</p>
                    
                      </div>
                  </div>
                   

                    
                )}
                            
        </div>
    );
};

export default Modal11;

