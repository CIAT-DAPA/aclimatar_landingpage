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
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal"> SEASONAL ADAPTATION<br></br>Seasonal adaptation are tailored production practices based on regularly updated weather forecasts of several weeks or months ahead.</p>  
                <img className='imgModalT' src="./webs/modal14.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://cgspace.cgiar.org/items/45e50d7f-6ff9-4a4c-b757-211d166b1c2a" target="blank"> 
                    
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