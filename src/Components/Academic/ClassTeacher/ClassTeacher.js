import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';
import img from '../../../Images/Ali Ashraf2.jpg';

const ClassTeacher = () => {
    return (
        <>
            <Subheader title="CLASS TEACHER" />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0 class-teacher">
                        <img width='200px' src={img} alt=""/>
                        <h5>Md. Ali Ashraf</h5>
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