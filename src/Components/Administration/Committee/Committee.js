import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import img from '../../../Images/committee.png';
import Categories from '../Categories/Categories';

const Committee = () => {
    const a = [1, 1, 1, 1]
    return (
        <>
            <Subheader />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-9 pr-0">
                        <h2 style={{ fontWeight: '600' }}>Committee</h2>
                        <p className='mt-5 title'>Chairman</p>
                        <p>Md. Someone</p>
                        <p>Some title</p>
                        <p>Email: example@gmail.com</p>
                        <p className='mt-4 title'>Secretary</p>
                        <p>Md. Someone</p>
                        <p>Some title</p>
                        <p>Email: example@gmail.com</p>
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