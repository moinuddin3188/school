import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import '../../Style/AtaGlance.scss';

const AtaGlance = () => {
    return (
        <>
            <Subheader title={'ABOUT US'} />
            <section className="container mt-5 at-a-glance">
                <div className="row">
                    <div className="col-3 sub-menu pl-0">
                        <div className='sub-menu-title'>
                            <p>About us</p>
                        </div>
                        <div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <a href="#at-a-glance">At a glance</a>
                                </li>
                                <li class="list-group-item">
                                    <a href="#infrastructure">Infrastructure</a>
                                </li>
                                <li class="list-group-item">
                                    <a href="#teachers">Teachers & Staffs</a>
                                </li>
                                <li class="list-group-item">
                                    <a href="#students">Students</a>
                                </li>
                                <li class="list-group-item">
                                    <a href="#clubs">Clubs</a>
                                </li>
                                <li class="list-group-item">
                                    <a href="#co-curricular">Co-curricular</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9 pr-0">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="http://rcpsc.edu.bd/media/glanceImage/2.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="http://rcpsc.edu.bd/media/glanceImage/6.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="http://rcpsc.edu.bd/media/glanceImage/7.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="category-title my-4" id="at-a-glance">
                            <p>Lorem Ipsum School & Collage</p>
                        </div>
                        <div>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td><strong>Established</strong></td>
                                        <td>: &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident. Lorem ipsum dolor sit amet consectetur adipisicing</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total aria</strong></td>
                                        <td>: &nbsp; 8.56 acre</td>
                                    </tr>
                                    <tr id="infrastructure">
                                        <td><strong>Playground</strong></td>
                                        <td>: &nbsp; 2.5 acre</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="category-title my-4">
                            <p>Infrastructure</p>
                        </div>
                        <div>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td><strong>Number of Academic Building</strong></td>
                                        <td>: &nbsp; Four large multistoried buildings</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Number of Official Building</strong></td>
                                        <td>: &nbsp; A three storied and a one storied building</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Number of Residential Building</strong></td>
                                        <td>: &nbsp; Five multistoried buildings</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Number Canteen</strong></td>
                                        <td>: &nbsp; Two</td>
                                    </tr>
                                    <tr id="teachers">
                                        <td><strong>Others</strong></td>
                                        <td>: &nbsp; A well-organized auditorium, In-door sports complex, two Basketball Grounds, a Mosque and a park</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="category-title my-4">
                            <p>Teachers & Staffs</p>
                        </div>
                        <div>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td><strong>Teachers in School Section</strong></td>
                                        <td>: &nbsp; 65</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Teachers in College Section</strong></td>
                                        <td>: &nbsp; 28</td>
                                    </tr>
                                    <tr id="students">
                                        <td><strong>Number of Staffs</strong></td>
                                        <td>: &nbsp; 15</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="category-title my-4">
                            <p>Number of Students</p>
                        </div>
                        <div>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td><strong>School Section</strong></td>
                                        <td>: &nbsp; 3146</td>
                                    </tr>
                                    <tr id="clubs">
                                        <td><strong>College Section</strong></td>
                                        <td>: &nbsp; 150</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="category-title my-4">
                            <p>Clubs</p>
                        </div>
                        <div className='pl-2'>
                            <p>1. Language club.</p>
                            <p>2. Culture club.</p>
                            <p>3. Debating club.</p>
                            <p id="co-curricular">4. Science club.</p>
                        </div>
                        <div className="category-title my-4">
                            <p>Co-curricular</p>
                        </div>
                        <div className='pl-2'>
                            <p>1. Study tour.</p>
                            <p>2. Annul sports competition.</p>
                            <p>3. Annul cultural competition.</p>
                            <p>4. Club activities.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AtaGlance;