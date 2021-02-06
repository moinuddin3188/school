import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const Syllabus = () => {
    return (
        <>
            <Subheader title='SYLLABUS' />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className="menu-title">
                            <p>Syllabus</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Syllabus;