import React from 'react';
import Footer from '../../../Home/Footer/Footer';
import Subheader from '../../../Subheader/Subheader';
import Categories from '../../Categories/Categories';

const CampusMain = () => {
    return (
        <>
            <Subheader title='CAMPUS' />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2 style={{ fontWeight: '600' }} >Campus</h2>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sed eligendi? Adipisci similique consequatur odit error eveniet hic beatae esse, corporis quis itaque minima autem quas vel pariatur eaque eum, aliquam quibusdam distinctio quasi nesciunt eos officiis. Facere debitis aperiam veritatis et optio! Incidunt a rem nesciunt non harum officia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, expedita labore! Quisquam dignissimos qui et ut ex, voluptas non labore accusantium, recusandae ipsam facilis eligendi repellat distinctio! Aspernatur, animi a?</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CampusMain;