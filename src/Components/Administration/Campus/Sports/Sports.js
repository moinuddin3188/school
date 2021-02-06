import React from 'react';
import Footer from '../../../Home/Footer/Footer';
import Subheader from '../../../Subheader/Subheader';
import Categories from '../../Categories/Categories';

const Sports = () => {
    return (
        <>
            <Subheader title='SPORTS' />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2 style={{ fontWeight: '600' }}>Sports</h2>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi vel iusto expedita ipsa soluta similique illo laudantium incidunt odio quod quae rerum veniam fugiat optio tenetur eius nam, enim, recusandae, sint earum! Ducimus eveniet facere veniam laborum debitis, impedit voluptate, animi, ipsum nemo et nobis. Autem nisi recusandae quis, asperiores itaque ipsa quaerat facilis, odio rerum tenetur nobis blanditiis possimus harum iure, aliquid eveniet omnis ut adipisci officia voluptates!</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Sports;