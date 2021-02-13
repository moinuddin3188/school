import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import img from '../../../Images/AliAshraf.jpg';
import Categories from '../Categories/Categories';

const Committee = () => {
    const a = [1, 1, 1, 1]
    return (
        <>
            <Subheader title='COMMITTEE' />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2 style={{ fontWeight: '600' }}>Committee</h2>
                        <div className="row mt-5">
                            <div className='col-6'>
                                <img width='150px' src={img} alt="" />
                                <p className='mt-2 title'>Chairman</p>
                                <p>Mr. Md. Kabir Ahmed</p>
                                <p>Phone: 0170000000</p>
                                <p>Email: example@gmail.com</p>
                            </div>
                            <div className='col-6'>
                                <img width='150px' src={img} alt="" />
                                <p className='mt-2 title'>Vice-Precedent</p>
                                <p>Md. Someone</p>
                                <p>Phone: 0170000000</p>
                                <p>Email: example@gmail.com</p>
                            </div>
                        </div>
                        <p className='mt-4 title'>Members</p>
                        <table className="ml-0">
                            {
                                a.map(() =>
                                    <tr>
                                        <td>Md. Moin uddin</td>
                                        <td>Assistant Professor</td>
                                    </tr>
                                )
                            }
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Committee;