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
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal">Community-led deforestation alert monitoring</p>  
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

export default Modal13;