import { useState } from 'react';
import './style.css'
const Modal1 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    
    return (
        <div className="div1">
        <section onClick={openModal} className="div1container1">
            <div className="div1container1__img">
                <img src="./logos/cacao.svg" alt="" />
                <img src="" alt="" />
            </div>
            <p className="div1container1__text">
                CLIMATE ACTION IN COFFEE AND COCOA
            </p>
            <div className="div1container1__img">
                <img src="" alt="" />
                <img src="./logos/coffee.svg" alt="" />
            </div>
        </section >
        <section  onClick={openModal} className="div1container2">
            <div className="div1container2__box">
            <span className="div1container2__text1">
                THE GLOBAL GOALS
            </span>
            <div className="text__box">
                <span className="div1container2__num">
                    13
                </span>
                <span className="div1container2__text2">
                    CLIMATE ACTION 
                </span>
            </div>
            </div>

        </section>
        {modalOpen && (
                    
                    <div className="modal1-content">
                        <p>Climate action in cocoa and coffee involves both adaptation and mitigation of climate change.
                        Climate action requires to strengthen the resilience of producers to climate hazards on short and
                        long time scales, reduce emissions on farm, stop deforestation, and build knowledge and capacity.  </p>
                        <button className="close-button1" onClick={closeModal}>
                        X
                        </button>
                    </div>
                    
                )}
    
    </div>
    );
};

export default Modal1;