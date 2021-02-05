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
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-9 pr-0">
                        <div className="menu-title mb-4">
                            <p>Contact</p>
                        </div>
                        <div className="row contact">
                            <div className="col-4 text-center">
                                <div className="p-4 contact-info rounded">
                                    <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                                    <p className='my-3'>Come to</p>
                                    <p>Sultanpur, Debidwar, Cumilla</p>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="p-4 contact-info rounded">
                                    <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                                    <p className='my-3'>Call to</p>
                                    <p>+88017000000</p>
                                </div>
                            </div>
                            <div className="col-4 text-center">
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