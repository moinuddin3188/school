import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../Style/Admission.scss';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';


const AdmissionResult = () => {
    return (
        <>
            <Subheader title={'RESULT'} />
            <section className='container mt-5 admission-result'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-4 mt-md-0">
                        <div className="title mb-4">
                            <p>Admission Result</p>
                        </div>
                        <div className='admission-result-section d-flex'>
                            <div>
                                <h6 className='m-0'>Admission Result School Section</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                        <div className='admission-result-section d-flex'>
                            <div>
                                <h6 className='m-0'>HSC Admission Result Science</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                        <div className='admission-result-section d-flex'>
                            <div>
                                <h6 className='m-0'>HSC Admission Result Business</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                        <div className='admission-result-section d-flex'>
                            <div>
                                <h6 className='m-0'>HSC Admission Result Arts</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AdmissionResult;