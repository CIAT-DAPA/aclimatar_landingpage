import { useState } from 'react';
import './style.css'
const Modal14 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="div14">
            <div className="container14__text">
                            <span className="div14container__text" onClick={openModal}>
                                SEASONAL ADAPTATION
                            </span>
                            <p className="div14container__text2" onClick={openModal}>
                          

                            </p>
                </div>
                {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal"> SEASONAL ADAPTATION</p>  
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

export default Modal14;