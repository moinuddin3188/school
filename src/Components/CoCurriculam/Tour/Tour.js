import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import img from '../../../Images/tour.png';

const Tour = () => {
    return (
        <>
            <Subheader title={'TOUR'} />
            <section className='container mt-5 tour'>
                <img width='100%' src={img} alt="" />
                <div className='title my-4'>
                    <p>Tour</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae perspiciatis dolor laudantium sunt optio iure consequatur error dignissimos voluptate, suscipit voluptatem. Perspiciatis nulla eos tenetur soluta est error maiores ex minima. Quia rem non provident, magni eum illo sunt quo consequatur esse voluptate velit earum et iure tempore nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae perspiciatis dolor laudantium sunt optio iure consequatur error dignissimos voluptate, suscipit voluptatem. Perspiciatis nulla eos tenetur soluta est error maiores ex minima. Quia rem non provident, magni eum illo sunt quo consequatur esse voluptate velit earum et iure tempore nisi.</p>
            </section>
            <Footer />
        </>
    );
};

export default Tour;