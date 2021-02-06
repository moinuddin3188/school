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
            <Subheader title='ADMINISTRATION' />
            <section className="container mt-5 administration">
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
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
                                        <td>
                                            <button className="button py-1 px-2">Profile</button>
                                        </td>
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
                                        <td>
                                            <button className="button py-1 px-2">Profile</button>
                                        </td>
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
                                        <td>
                                            <button className="button py-1 px-2">Profile</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </table>
                        <p className="mt-4 title"><FontAwesomeIcon className='mr-3' icon={faAngleDoubleRight} /> Librarian</p>
                        <table>
                            <tr>
                                <td>Md. Moin uddin</td>
                                <td>Teacher</td>
                                <td>
                                    <button className="button py-1 px-2">Profile</button>
                                </td>
                            </tr>
                        </table>
                        <p className="mt-4 title"><FontAwesomeIcon className='mr-3' icon={faAngleDoubleRight} /> Register</p>
                        <table>
                            <tr>
                                <td>Md. Moin uddin</td>
                                <td>Teacher</td>
                                <td>
                                    <button className="button py-1 px-2">Profile</button>
                                </td>
                            </tr>
                        </table>
                        <p className="mt-4 title"><FontAwesomeIcon className='mr-3' icon={faAngleDoubleRight} /> Security</p>
                        <table>
                            <tr>
                                <td>Md. Moin uddin</td>
                                <td>Teacher</td>
                                <td>
                                    <button className="button py-1 px-2">Profile</button>
                                </td>
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