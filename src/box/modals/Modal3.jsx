import { useState } from 'react';
import './style.css'
const Modal3 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <div className="div3">
        <div className="div3container3" onClick={openModal} >
            <img className="div3container__img" src="./logos/adaptation.svg" alt="" />
            <span className="div3container__text">ADAPTATION</span>
            
        </div>
        {modalOpen && (
                    
                    <div className="modal3-content overlay">
                        <button className="close-button3" onClick={closeModal}>
                        X
                        </button>
                        <p>Adaptation builds resilience to climate change. Seasonal and decadal climate projections aid
                        forward-looking planning. Prioritizing climate-smart practices involves considering hazards and
                        projected impact severity.

                        </p>
                    </div>
                    
                )}
    </div>

    
    );
};

export default Modal3;