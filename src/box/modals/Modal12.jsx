import { useState } from 'react';
import './style.css'
const Modal12 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="div12">
           <p className="div12container__text" onClick={openModal}  >
        Satellite based solution for Agroforestry Supply Chain Sustainability
        </p>
        {modalOpen && (
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal"> Satellite based solution for Agroforestry Supply Chain Sustainability</p>                
                <img className='imgModalT' src="./webs/modal12.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://www.terra-iplus.org/" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
       

</div>
    );
};

export default Modal12;