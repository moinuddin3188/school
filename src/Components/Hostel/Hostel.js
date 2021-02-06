import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';

const Hostel = () => {
    return (
        <>
            <Subheader title='HOSTEL' />
            <section className='container mt-5 hostel'>
                <div className="row">
                    <div className="col-md-4 col-12 pl-md-0">
                        <img width='100%' src="https://www.cuet.ac.bd/frontend/images/ataglance.jpg" alt=""/>
                    </div>
                    <div className="col-md-8 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2 className='mb-5'>Hostel</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam odit placeat fugiat officia assumenda minus non veritatis nisi. Quasi, labore quia natus eaque inventore, blanditiis odio quis sed vel reprehenderit delectus excepturi. Laboriosam alias eum qui provident sit dolores veniam.</p>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Hostel;