import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import Categories from './Categories/Categories';
import '../../Style/Admission.scss';

const Admission = () => {
    return (
        <>
            <Subheader title='ADMISSION' />
            <section className='container mt-5 admission-circular'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-4 mt-md-0">
                        <div className='title mb-4'>
                            <p>Admission circular 2020 (School section)</p>
                        </div>
                        <div className="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Class</th>
                                        <th scope="col">Collect Date - Submission Date</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Class 6 - 9</td>
                                        <td>01/12/20 - 15/12/2020</td>
                                        <td>09:AM - 03:30 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="button px-3 mt-3">Details</button>
                        <div className='title my-4'>
                            <p>HSC Admission circular 2020-2021</p>
                        </div>
                        <p className='description'>Admission circular 2020-2021. For online application visit this web site www.example.com and for SMS application use collage EIIN number (1234).</p>
                        <div className="title my-4 w-50">
                            <p>Seats</p>
                        </div>
                        <div>
                            <table className="table table-sm table-borderless">
                                <tbody>
                                    <tr>
                                        <th>Science</th>
                                        <th>: &nbsp; 220</th>
                                    </tr>
                                    <tr>
                                        <th>Business</th>
                                        <th>: &nbsp; 107</th>
                                    </tr>
                                    <tr>
                                        <th>Arts</th>
                                        <th>: &nbsp; 75</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className="button px-3 mt-3">Details</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Admission;