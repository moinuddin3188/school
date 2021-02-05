import React from 'react';
import { faSearch, faMapMarkerAlt, faCamera, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';

const Campus = () => {
    const a = [
        { title: 'Campus', icon: faMapMarkerAlt},
        { title: 'Sports', icon: faCamera},
        { title: 'Hostel', icon: faHotel}
    ]
    return (
        <>
            <Subheader />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-9 pr-0">
                        <h5 className="text-center mb-5">CAMPUS</h5>
                        <div className="row p-0">
                            {
                                a.map(a =>
                                    <div className="col-4 pl-0">
                                        <div className="campus-card d-flex align-items-center justify-content-center">
                                            <div className='text-center'>
                                                <FontAwesomeIcon className="icon"icon={a.icon} />
                                                <h6 className='mt-3'>{a.title}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Campus;