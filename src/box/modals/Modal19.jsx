import { useState } from 'react';
import './style.css'
const Modal19 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="div19"> 
           
                <p className="div19container__text" onClick={openModal} >
                                CLIMATE SMART COFFEE BASICS
                </p>
            
            {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <img className='imgModalT' src="./webs/modal19.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://climatesmartcoffee.cgiar.org/" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
        </div>
    
    );
};

export default Modal19;