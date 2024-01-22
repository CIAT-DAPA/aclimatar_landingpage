import { useState } from 'react';
import './style.css'
const Modal15 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    
    return (
        <div className="div15">
        <p className="div15container__text" onClick={openModal}>
                    SUSTAINABLE INTENSIFICATION

        </p>
        {modalOpen && (
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal">SUSTAINABLE INTENSIFICATION</p> 
                <img className='imgModalT' src="./webs/default.png" alt="" />
                <button className="url-buttonT">
                    <a href="##" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
</div>
    );
};

export default Modal15;