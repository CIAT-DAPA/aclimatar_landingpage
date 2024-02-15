import { useState } from 'react';
import './style.css'
const Modal13 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    
    return (
        <div className="div13">
                <p className="div13container__text" onClick={openModal}>
                Community-led deforestation alert monitoring
                </p>
                {modalOpen && (
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal">Community-led deforestation alert monitoring</p>  
                <p className="text-modal">Community-led deforestation alert monitoring is an effective approach to halting deforestation.
                        Rewarding communities with outcome-based payments for ecosystem services incentivizes reporting
                        and intervention against illegitimate deforestation. In our approach, locally calibrated real-time
                        monitoring informs local forest guards.</p>
              
                </div>
            </div>
            )}
            </div>
    );
};

export default Modal13;