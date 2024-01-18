import { useState } from 'react';
import './style.css'
const Modal18 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    
    
    return (
        <div className="div18">
            <p className="div18container__text" onClick={openModal}>
                               CLIMATE SMART COCOA BASICS

                    </p>

                    {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
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

export default Modal18;