import React from 'react';
import logo from '../../../Images/services1.png';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3 col-12 text-center">
                        <img width='40%' src={logo} alt=""/>
                    </div>
                    <div className="col-md-3 col-6 mt-5 mt-md-0">
                        <h6>Quick links</h6>
                        <p>Admission</p>
                        <p>Forms</p>
                        <p>Result</p>
                    </div>
                    <div className="col-md-3 col-6 mt-5 mt-md-0">
                        <h6>Academic</h6>
                        <p>Notice</p>
                    </div>
                    <div className="col-md-3 col-6 mt-5 mt-md-0">
                        <h6>Contact</h6>
                        <p>exampleemail@gmail.com</p>
                        <p>+88017000000</p>
                        <p>Your location, Here.</p>
                        <FontAwesomeIcon className="icon facebook mt-3" icon={faFacebookF}/>
                        <FontAwesomeIcon className="icon" icon={faTwitter} />
                        <FontAwesomeIcon className="icon" icon={faYoutube} />
                        <FontAwesomeIcon className="icon" icon={faGlobe} />
                    </div>
                </div>
            </div>
            <p className='text-center m-0 pb-3'><small>© Copyright reserved | 2021 | Sultanpur madrasha</small></p>
        </section>
    );
};

export default Footer;