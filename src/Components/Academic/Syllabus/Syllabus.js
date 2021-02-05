import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const Syllabus = () => {
    return (
        <>
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-9">
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