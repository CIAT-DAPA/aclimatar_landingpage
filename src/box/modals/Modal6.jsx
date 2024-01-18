import { useState } from 'react';
import './style.css'
const Modal6 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="div6">
             
                <span onClick={openModal}  className="div6container__text">
                    TREE-BASED RESTORATION AND AGROFORESTRY
                </span>
            

            {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <img className='imgModalT' src="./webs/modal6.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://www.diversityforrestoration.org/" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
        </div>
    
    );
};

export default Modal6;