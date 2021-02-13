import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Category from '../Category/Category';

const AcademicResult = () => {
    return (
        <>
            <Subheader title={'RESULT'} />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Category />
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className="menu-title mb-4">
                            <p>Academic Result</p>
                        </div>
                        <div className='row'>
                            <div className="col-sm-6 col-12 mb-sm-0 mb-4">
                                <div className='academic-result-section'>
                                    <h5>Result School Section</h5>
                                    <p>Get result here</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12">
                                <div className='academic-result-section'>
                                    <h5>Result Collage Section</h5>
                                    <p>Get result here</p>
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

export default AcademicResult;