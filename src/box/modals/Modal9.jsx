import { useState } from 'react';
import './style.css'

const Modal9 = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="div9">
           
                <span  onClick={openModal} className="div9container__text">
                Africa
                </span>
            

            {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <img className='imgModalT' src="./webs/modal9.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://adaptation.aclimatar.org/" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
        </div>
    
    );
};

export default Modal9;