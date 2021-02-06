import React from 'react';
import { faSearch, faMapMarkerAlt, faCamera, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';
import { useHistory } from 'react-router-dom';

const Campus = () => {
    const a = [
        { title: 'Campus', icon: faMapMarkerAlt, path: '/campus_details'},
        { title: 'Sports', icon: faCamera, path: '/sports'},
        { title: 'Hostel', icon: faHotel, path: '/hostel'}
    ]

    const history = useHistory();
    const getPath = path => {
        history.push(path)
    }

    return (
        <>
            <Subheader title='CAMPUS' />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h5 className="text-center mb-5">CAMPUS</h5>
                        <div className="row p-0">
                            {
                                a.map(a =>
                                    <div className="col-lg-4 col-6 mb-4 mb-lg-0 pl-lg-0">
                                        <div onClick={() => getPath(a.path)} className="campus-card d-flex align-items-center justify-content-center">
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