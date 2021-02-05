import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const ClassTeacher = () => {
    return (
        <>
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-9 pr-0">
                        <img width='200px' src="https://www.cuet.ac.bd/frontend/images/vcsir.jpg" alt=""/>
                        <h5>Md. Someone</h5>
                        <p>Assistant Teacher</p>
                        <p>+88017000000</p>
                        <p>Email: example@gmail.com</p>
                        <button className="button px-3 mt-3">View Profile</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ClassTeacher;