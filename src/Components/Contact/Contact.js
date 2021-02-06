import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';

const Contact = () => {
    return (
        <>
            <Subheader title='CONTACT' />
            <section className='container mt-5'>
                <div className="row contact">
                    <div className="col-md-4 col-sm-6 col-12 mb-4 mb-md-0 text-center">
                        <div className="p-4 contact-info rounded">
                            <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                            <p className='my-3'>Come to</p>
                            <p>Sultanpur, Debidwar, Cumilla</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4 mb-md-0 text-center">
                        <div className="p-4 contact-info rounded">
                            <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                            <p className='my-3'>Call to</p>
                            <p>+88017000000</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 mb-4 mb-md-0 text-center">
                        <div className="p-4 contact-info rounded">
                            <FontAwesomeIcon className='icon' icon={faEnvelope} />
                            <p className='my-3'>Connect</p>
                            <p>Email: example@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;