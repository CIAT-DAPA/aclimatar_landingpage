import { useState } from 'react';
import './style.css'
const Modal4 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <div className="div4">
                <div className="div4container4" onClick={openModal}>
                        <img className="div4container__img" src="./logos/education.svg" alt="" />
                        <span className="div4container__text">EDUCATION</span>
                        
                </div>
                {modalOpen && (
                    
                    <div className="modal4-content">
                        <button className="close-button4" onClick={closeModal}>
                        X
                        </button>
                        <p>Building knowledge and capacity in the coffee and cocoa sectors is vital for addressing climate
                        change. Our learning course and knowledge platforms provide background knowledge to raise
                        awareness strengthen human and institutional capabilities.


                        </p>
                    </div>
                    
                )}
            </div>
    
    );
};

export default Modal4;