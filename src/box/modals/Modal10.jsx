import { useState } from 'react';
import './style.css'
const Modal10 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="div10">
                <div className="container10__text" > 
                        <span className="div10container__text" onClick={openModal}>
                        FREE ONLINE LEARNING MODULE
                        </span>
                        <p className="div10container__text2" onClick={openModal}>
                        Climate Adaptation Strategies for Cocoa Farmers: Understanding Climate Hazards and Data Interpretation
                        </p>
                    
                    
                    {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <img className='imgModalT' src="./webs/default.png" alt="" />
                <button className="url-buttonT">
                    <a href="https://eiademo.irri.org/enrol/index.php?id=163" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
                </div>
            </div>
    
    );
};

export default Modal10;