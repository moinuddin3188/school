import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const Students = () => {
    const a = [1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <>
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className='menu-title'>
                            <p>Students</p>
                        </div>
                        <div className="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Picture</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Roll</th>
                                        <th scope="col">Previous</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        a.map((a, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img width='80px' src="https://duap.du.ac.bd/upload/img/arb_jmizandu.jpg" alt="" />
                                                </td>
                                                <td>Md. Moin uddin</td>
                                                <td>2</td>
                                                <td>2</td>
                                                <td>+088170000000</td>
                                                <td>Jagannathpur, Debidwar, Cumilla</td>
                                            </tr>
                                        )
                                    }
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

export default Students;