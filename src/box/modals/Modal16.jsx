import { useState } from 'react';
import './style.css'
const Modal16 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="div16"> 
            
                <p className="div16container__text"  onClick={openModal} >
                Yield estimation for planning</p>
            
            {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <img className='imgModalT' src="./webs/modal16.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://croppie.org/" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Modal16;