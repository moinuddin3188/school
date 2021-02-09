import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';
import img from '../../../Images/cafe-2.jpg';

const Canteen = () => {
    return (
        <>
            <Subheader title={'CANTEEN'} />
            <section className='container mt-5 facilities'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 cultural-club pr-md-0 mt-5 mt-md-0">
                        <img width='100%' src={img} alt=""/>
                        <div className="title my-4">
                            <p>Culture club</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos numquam placeat minima eaque aspernatur mollitia. Dolorum quos delectus, dolorem repellendus unde illum explicabo non quidem voluptas. Dignissimos aperiam quia obcaecati assumenda illum velit, repudiandae voluptas vero excepturi corrupti mollitia eveniet perspiciatis ullam ut nam doloremque vel non itaque ab tenetur iure. Voluptatum excepturi mollitia nesciunt laudantium dignissimos quis cumque laboriosam reprehenderit dolorem sed? Error cupiditate consequuntur sapiente, dolore vel quis incidunt eaque. Inventore illum eum nostrum et voluptatum aspernatur.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Canteen;