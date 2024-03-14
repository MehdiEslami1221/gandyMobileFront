import LogoGandiMobile from '../assets/images/logo-gandi.png';
import React from "react";


const Offcanvas = () => {

    return (
        <div className="d-sm-flex d-lg-none">
            <span type="button" data-bs-toggle="offcanvas"
                  className="fa fa-reorder px-3 py-2" style={{fontSize:'25px'}}
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"/>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <a className="navbar-brand" href="/">
                            <img src={LogoGandiMobile} width="80" alt=""/>
                        </a>
                    </h5>
                </div>
                <div className="offcanvas-body">
                    <div>


                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">عنوان یک</button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        این بخش در حال تکمیل می باشد
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">عنوان دو</button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        این بخش در حال تکمیل می باشد
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                            aria-expanded="false" aria-controls="flush-collapseThree">عنوان سه</button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        این بخش در حال تکمیل می باشد
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Offcanvas