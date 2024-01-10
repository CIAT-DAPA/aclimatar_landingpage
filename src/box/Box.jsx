import './style.css'
import React, { useState } from 'react';
import Modal11 from './modals/Modal11';

function Box() {
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
 

    return (
    <div className="parent">
            <div className="div1">
                <section className="div1container1">
                    <div className="div1container1__img">
                        <img src="./logos/coffeeSeed.svg" alt="" />
                        <img src="" alt="" />
                    </div>
                    <p className="div1container1__text">
                        CLIMATE ACTION IN COFFEE AND COCOA
                    </p>
                    <div className="div1container1__img">
                        <img src="" alt="" />
                        <img src="./logos/coffeeSeed.svg" alt="" />
                    </div>
                </section >
                <section className="div1container2">
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
            
            </div>
            <div className="div2"> 
                <div className="div2container2">
                    <img className="div2container2__img" src="./logos/coffeeSeed.svg" alt="" />
                    <span className="div2container2__text">MITIGATION</span>
                    
                </div>
            </div>
            <div className="div3">
                <div className="div3container3">
                    <img className="div3container__img" src="./logos/coffeeSeed.svg" alt="" />
                    <span className="div3container__text">ADAPTATION</span>
                    
                </div>
            </div>
            <div className="div4">
                <div className="div4container4">
                        <img className="div4container__img" src="./logos/coffeeSeed.svg" alt="" />
                        <span className="div4container__text">EDUCATION</span>
                        
                </div>
            </div>
            <div className="div5">
                <div className="container5__text">
                            <span className="div5container__text">
                                REGENERATIVE AGRICULTURE
                            </span>
                            <p className="div5container__text2">
                                Lorem, ipsum dolor sit amet consectetur adipidoloribus voip lorem imput dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, in incidunt quia a, illo nobis ipsa temporibus eaque, quo excepturi ve

                            </p>
                </div>
             </div>
            <div className="div6">
                <span className="div6container__text">
                    TREE-BASED RESTORATION AND AGROFORESTRY
                </span>
            </div>
            <div className="div7">
                <span className="div7container__text">
                    STRATEGICLONG TERM ADAPTATION
                </span>
            </div>
            <div className="div8">
                <span className="div8container__text">
                    Ssssjsj America
                </span>
            </div>
            <div className="div9">
                <span className="div9container__text">
                   Africa
                </span>
            </div>
            <div className="div10">
                <div className="container10__text">
                            <span className="div10container__text">
                                REGENERATIVE AGRICULTURE
                            </span>
                            <p className="div10container__text2">
                                Lorem, ipsum dolor sit amet consectetur adipidoloribus voip lorem imput dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, in incidunt quia a, illo nobis ipsa temporibus eaque, quo excepturi ve

                            </p>
                </div>
            </div>
            <div className="div11"  onClick={openModal}>
                <span className="div11container__text">
                    DEFORESTATION-FREE PRODUCTION
                </span>                
             <Modal11 showModal={showModal} closeModal={closeModal} />
            </div>
            <div className="div12">
                            <p className="div12container__text">
                                Lorem, ipsum dolor sit amet consectetur adipidoloribus voip lorem imput dolor
                                Lorem ipsum dolor

                            </p>
                
            </div>
            <div className="div13">
                <p className="div13container__text">
                                Lorem, ipsum dolor sit amet consectetur adipidoloribus voip lorem imput dolor
                                Lorem ipsum dolor

                </p>
            </div>
            <div className="div14">
            <div className="container14__text">
                            <span className="div14container__text">
                                REGENERATIVE AGRICULTURE
                            </span>
                            <p className="div14container__text2">
                                Lorem, ipsum dolor sit amet consectetur adipidoloribus 

                            </p>
                </div>
            </div>
            <div className="div15">
                    <p className="div15container__text">
                                Lorem, ipsum dol

                    </p>
            </div>
            <div className="div16"> 
            <p className="div16container__text">
                                Lorem, ipsum dolor sit amet consectetur adipidoloribus voip 

                </p>
            </div>
            <div className="div17">
            <p className="div17container__text">
                                Lorem, ipsum dolor sit amet consectetur adipidoloribus voip 

                </p>
            </div>
            <div className="div18">
            <p className="div18container__text">
                                Lorem, ipsum dol

                    </p>
            </div>
            <div className="div19">
            <p className="div19container__text">
                                Lorem, ipsum dol

                    </p> </div>
    </div>
    
    )
  }
  
  export default Box