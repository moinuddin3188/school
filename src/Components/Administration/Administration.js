import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import '../../Style/Administration.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories/Categories';

const Administration = () => {
    const a = [1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <>
            <Subheader />
            <section className="container mt-5 administration">
                <div className="row">
                    <Categories />
                    <div className="col-9 pr-0">
                        <h2>
                            <span style={{ fontWeight: "300" }}>Administration and </span>
                            <span style={{ fontWeight: "600" }}>Authority</span>
                        </h2>
                        <p className='mt-5 title'>Principal:</p>
                        <p>Mr. Md. Kabir Ahmed</p>
                        <p>Email: example@gmail.com</p>
                        <p className='mt-4 title'>Vice-Principal</p>
                        <p>Md. Someone</p>
                        <p>Email: example@gmail.com</p>
                        <p className='mt-5 title'>Teachers</p>
                        <p className='mt-4 title'><FontAwesomeIcon className='mr-3' icon={faAngleDoubleRight} /> Alim</p>
                        <table>
                            {
                                a.map(() =>
                                    <tr>
                                        <td>Md. Moin uddin</td>
                                        <td>Assistant Professor</td>
                                    </tr>
                                )
                            }
                        </table>
                        <p className='mt-4 title'><FontAwesomeIcon className='mr-3' icon={faAngleDoubleRight} /> Dakhil</p>
                        <table>
                            {
                                a.map(() =>
                                    <tr>
                                        <td>Md. Moin uddin</td>
                                        <td>Assistant Teacher</td>
                                    </tr>
                                )
                            }
                        </table>
                        <p className='mt-4 title'><FontAwesomeIcon className='mr-3' icon={faAngleDoubleRight} /> Ibtedaye</p>
                        <table>
                            {
                                a.map(() =>
                                    <tr>
                                        <td>Md. Moin uddin</td>
                                        <td>Teacher</td>
                                    </tr>
                                )
                            }
                        </table>
                        <p className="mt-4 title">Librarian</p>
                        <table className='ml-0'>
                            <tr>
                                <td>Md. Moin uddin</td>
                                <td>Teacher</td>
                            </tr>
                        </table>
                        <p className="mt-4 title">Register</p>
                        <table className='ml-0'>
                            <tr>
                                <td>Md. Moin uddin</td>
                                <td>Teacher</td>
                            </tr>
                        </table>
                        <p className="mt-4 title">Security</p>
                        <table className='ml-0'>
                            <tr>
                                <td>Md. Moin uddin</td>
                                <td>Teacher</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Administration;