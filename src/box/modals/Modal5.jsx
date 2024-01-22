import { useState } from 'react';
import './style.css'
const Modal5 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    
    return (
        <div className="div5">
        <div className="container5__text" onClick={openModal} >
           
                    <span className="div5container__text">
                        REGENERATIVE AGRICULTURE
                    </span>
                    <p className="div5container__text2">
                    Regenerative agricultural practices can help farmers and their partners along the supply chain mitigate greenhouse gas emissions and cultivate more resilient coffee farms.
                    </p>
            
        </div>
        {modalOpen && (
            <div className="modalT-container">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal">REGENERATIVE AGRICULTURE</p>     
                <img className='imgModalT' src="./webs/modal5.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://alliancebioversityciat.org/stories/guide-regenerative-coffee-farming" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
     </div>
    
    );
};

export default Modal5;