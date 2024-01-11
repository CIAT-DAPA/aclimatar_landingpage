import { useState } from 'react';
import './style.css'
const Modal2 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <div className="div2"> 
        <div className="div2container2" onClick={openModal}  >
            <img className="div2container2__img" src="./logos/mitigation.svg" alt="" />
            <span className="div2container2__text">MITIGATION</span>
            
        </div>
        {modalOpen && (
                    
                    <div className="modal2-content">
                        <button className="close-button2" onClick={closeModal}>
                        X
                        </button>
                        <p>Mitigation in coffee and cocoa focuses on curbing greenhouse gas emissions. Adopting climatesmart practices helps diminish on-farm emissions, while agroforestry transforms production areas
                        into net carbon sinks. Halting deforestation requires community-led initiatives and enhanced
                        monitoring tools to ensure sustainable land management.
                        </p>
                    </div>
                    
                )}
    </div>

    
    );
};

export default Modal2;