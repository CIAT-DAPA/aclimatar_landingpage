import { useState } from 'react';
import './style.css'
const Modal7 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="div7">
        <span className="div7container__text" onClick={openModal} >
            STRATEGIC LONG TERM ADAPTATION
        </span>
        {modalOpen && (
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal"> STRATEGIC LONG TERM ADAPTATION</p>  
                <p className="text-modal">Proactive adaptation and prioritization of climate smart practices to address climate change impacts, ensuring sustained resilience and viability of production over time. </p>
                </div>
            </div>
            )}
    </div>
    
    );
};

export default Modal7;