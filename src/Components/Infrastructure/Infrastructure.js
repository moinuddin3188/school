import React from 'react';
import '../../Style/Infrastructure.scss';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';

const Infrastructure = () => {
    return (
        <>
            <Subheader title={'INFRASTRUCTURE'} />
            <section className="container mt-5 infrastructure">
                <img width='100%' src="http://rcpsc.edu.bd/media/glanceImage/2.jpg" alt="" />
                <div className="my-4 title">
                    <p>Infrastructure</p>
                </div>
                <div>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td><strong>Number of Academic Building</strong></td>
                                <td>: &nbsp; Four large multistoried buildings</td>
                            </tr>
                            <tr>
                                <td><strong>Number of Official Building</strong></td>
                                <td>: &nbsp; A three storied and a one storied building</td>
                            </tr>
                            <tr>
                                <td><strong>Number of Residential Building</strong></td>
                                <td>: &nbsp; Five multistoried buildings</td>
                            </tr>
                            <tr>
                                <td><strong>Number Canteen</strong></td>
                                <td>: &nbsp; Two</td>
                            </tr>
                            <tr>
                                <td><strong>Library</strong></td>
                                <td>: &nbsp; A rich library</td>
                            </tr>
                            <tr>
                                <td><strong>Others</strong></td>
                                <td>: &nbsp; A well-organized auditorium, In-door sports complex, two Basketball Grounds, a Mosque and a park</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Infrastructure;