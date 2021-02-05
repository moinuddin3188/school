import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';
import '../../../Style/Academic.scss';
import img from '../../../Images/class.png'

const ClassHome = () => {
    return (
        <>
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-9">
                        <img width='70%' src={img} alt=""/>
                        <p className='mt-5 description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iste voluptate sed. Harum quos unde nam error! Molestias, odio esse. Dicta tempore delectus natus excepturi quam reiciendis soluta ipsam assumenda voluptates dolor at error, quasi iure veritatis, provident blanditiis totam fugit! Odit quasi facere dolores ad accusantium odio perspiciatis nesciunt architecto expedita, cum enim dolor fugiat itaque molestias repellendus distinctio.</p>
                        <p className='mt-4 description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iste voluptate sed. Harum quos unde nam error! Molestias, odio esse. Dicta tempore delectus natus excepturi quam reiciendis soluta ipsam assumenda voluptates dolor at error, quasi iure veritatis, provident blanditiis totam fugit! Odit quasi facere dolores ad accusantium odio perspiciatis nesciunt architecto expedita, cum enim dolor fugiat itaque molestias repellendus distinctio.</p>
                        <h5 className='mt-5'>Contact</h5>
                        <p>+88017000000</p>
                        <p>Md. Someone</p>
                        <p>Class Teacher</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ClassHome;