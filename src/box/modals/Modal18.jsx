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
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal">CLIMATE SMART COCOA BASICS</p> 
                <img className='imgModalT' src="./webs/modal18.png" alt="" />
                <button className="url-buttonT">
                    <a href="https://web.archive.org/web/20240530010313/https://climatesmartcocoa.guide/" target="blank"> 
                    
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