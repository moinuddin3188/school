import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';
import '../../../Style/Facilities.scss';

const DebatingClub = () => {
    return (
        <>
            <Subheader title={'DEBATING CLUB'} />
            <section className='container mt-5 facilities'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <img width='100%' src="https://lekhapora.org/wp-content/uploads/2019/02/write-an-application-for-a-debating-club-1200x675.gif" alt="" />
                        <div className="title my-4">
                            <p>Debating club</p>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam sed velit saepe vitae ex quos corporis inventore, earum quaerat iure dicta adipisci laboriosam ea laborum magnam! Non cumque modi optio odit, quasi, voluptatibus ipsa quis perferendis ad similique voluptate fugit maiores omnis totam facilis cum alias dicta impedit id mollitia itaque delectus corporis perspiciatis quidem! Deserunt nam maiores, eos nulla ipsa eius excepturi impedit, optio incidunt numquam commodi harum.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default DebatingClub;