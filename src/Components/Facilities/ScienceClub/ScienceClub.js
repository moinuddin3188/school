import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';
import img from '../../../Images/ScienceClub.png';

const ScienceClub = () => {
    return (
        <>
            <Subheader title={'SCIENCE CLUB'} />
            <section className='container mt-5 facilities'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 science-club pr-md-0">
                        <img width='100%' src={img} alt=""/>
                        <div className="title my-4">
                            <p>Science club</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate, voluptatibus quas ad veniam quaerat. Veritatis nihil eveniet facilis amet est quae, aspernatur at! Enim ipsum suscipit illum excepturi quia pariatur, nihil, laudantium sit adipisci mollitia error atque placeat veniam, cupiditate odio laboriosam eveniet dolores? Sint quas tempore ipsum eaque aspernatur, cumque pariatur laudantium illum, culpa illo animi, neque expedita quidem quae iste dignissimos incidunt veniam earum! Culpa, voluptas debitis.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ScienceClub;