import { useState } from 'react';
import './style.css'
const Modal17 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="div17"> 
            
                <p className="div17container__text"  onClick={openModal} >
                Integrated soil fertility management

                    </p>
            

            {modalOpen && (
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal">Integrated soil fertility management</p> 
                <img className='imgModalT' src="./webs/modal17.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://eia.cgiar.org/use-cases/USC003" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Modal17;