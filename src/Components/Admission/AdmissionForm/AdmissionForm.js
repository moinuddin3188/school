import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';

const AdmissionForm = () => {
    return (
        <>
            <Subheader title={'FORM'} />
            <div className="section container mt-5 admission-form">
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-4 mt-md-0">
                        <div className="title mb-4">
                            <p>Admission Form</p>
                        </div>
                        <div className='admission-form-section d-flex'>
                            <div>
                                <h6 className='m-0'>Admission Form School Section</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                        <div className='admission-form-section d-flex'>
                            <div>
                                <h6 className='m-0'>HSC Admission Form Science</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                        <div className='admission-form-section d-flex'>
                            <div>
                                <h6 className='m-0'>HSC Admission Form Business</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                        <div className='admission-form-section d-flex'>
                            <div>
                                <h6 className='m-0'>HSC Admission Form Arts</h6>
                                <small>Date: 13 Fab 2021</small>
                            </div>
                            <div className='ml-auto d-flex align-items-center justify-content-center icon'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdmissionForm;