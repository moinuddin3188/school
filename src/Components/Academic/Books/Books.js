import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const Books = () => {
    return (
        <>
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-9 pr-0">
                        <div className="table-responsive book">
                            <div className="menu-title">
                                <p>Books</p>
                            </div>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Sir. No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Math</td>
                                        <td><button className="button">Download</button></td>
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

export default Books;