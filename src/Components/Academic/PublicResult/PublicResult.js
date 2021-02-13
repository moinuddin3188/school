import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Category from '../Category/Category';

const PublicResult = () => {
    return (
        <>
            <Subheader title={'RESULT'} />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Category />
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className="menu-title mb-4">
                            <p>Public Result</p>
                        </div>
                        <div className="table-responsive">
                            <table class="table table-bordered table-striped">
                                <caption>HSC Result</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Year</th>
                                        <th scope="col">Students</th>
                                        <th scope="col">Pass</th>
                                        <th scope="col">A+</th>
                                        <th scope="col">A</th>
                                        <th scope="col">A-</th>
                                        <th scope="col">B</th>
                                        <th scope="col">C</th>
                                        <th scope="col">F</th>
                                        <th scope="col">Success rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">2015</th>
                                        <td>189</td>
                                        <td>189</td>
                                        <td>108</td>
                                        <td>81</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PublicResult;