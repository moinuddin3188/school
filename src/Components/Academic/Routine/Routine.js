import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const Routine = () => {
    const a = [1, 1, 1, 1, 1, 1];
    return (
        <>
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-9">
                        <div className="menu-title mb-1">
                            <p>Class Routine</p>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">1st Period 10:00/10:45</th>
                                        <th scope="col">2nd Period 10:00/10:45</th>
                                        <th scope="col">3rd Period 10:00/10:45</th>
                                        <th scope="col">4th Period 10:00/10:45</th>
                                        <th scope="col">5th Period 10:00/10:45</th>
                                        <th scope="col"><span className='break'>B</span></th>
                                        <th scope="col">6th Period 10:00/10:45</th>
                                        <th scope="col">7th Period 10:00/10:45</th>
                                        <th scope="col">8th Period 10:00/10:45</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        a.map(() =>
                                            <tr>
                                                <th scope="row">Sa</th>
                                                <td>Quran Mazid</td>
                                                <td>Al-Hadic</td>
                                                <td>Math</td>
                                                <td>English</td>
                                                <td>Social Science</td>
                                                <td><span className='break'>B</span></td>
                                                <td>Mantik</td>
                                                <td>Fiqah</td>
                                                <td>Agricalture</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Routine;