import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faInbox, faMapMarkerAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const ClassContact = () => {
    return (
        <>
            <Subheader title="CONTACT" />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className="menu-title mb-4">
                            <p>Contact</p>
                        </div>
                        <div className="row contact justify-content-center">
                            <div className="col-lg-4 col-md-6 col-10 mb-4 mb-lg-0 text-center">
                                <div className="p-4 contact-info rounded">
                                    <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                                    <p className='my-3'>Come to</p>
                                    <p>Sultanpur, Debidwar, Cumilla</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-10 mb-4 mb-lg-0 text-center">
                                <div className="p-4 contact-info rounded">
                                    <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                                    <p className='my-3'>Call to</p>
                                    <p>+88017000000</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-10 mb-4 mb-lg-0 text-center">
                                <div className="p-4 contact-info rounded">
                                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                                    <p className='my-3'>Connect</p>
                                    <p>Email: example@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ClassContact;