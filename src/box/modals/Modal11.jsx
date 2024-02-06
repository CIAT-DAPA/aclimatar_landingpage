import { useState } from 'react';
import './style.css'
const Modal11 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    
    return (
        <div className="div11" >
                <span onClick={openModal}  className="div11container__text">
                    DEFORESTATION-FREE PRODUCTION
                </span> 


                {modalOpen && (
                      <div className="modalT-container overlay">
                      <div className="modalT-content">
                      
                      <button className="close-buttonT" onClick={closeModal}>
                          X
                      </button>
                      <p className="title-modal">FREE ONLINE LEARNING MODULE</p>  
                      
                      <p className="text-modal">Community-led deforestation alert monitoring is an effective approach to halting deforestation.
                        Rewarding communities with outcome-based payments for ecosystem services incentivizes reporting
                        and intervention against illegitimate deforestation. In our approach, locally calibrated real-time
                        monitoring informs local forest guards.</p>
                    
                      </div>
                  </div>
                   

                    
                )}
                            
        </div>
    );
};

export default Modal11;

