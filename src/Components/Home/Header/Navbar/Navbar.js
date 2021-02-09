import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../../Images/services1.png';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 105 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const history = useHistory();
    const goHome = () => {
        history.push('/')
    }

    return (
        <section className='navbar-container'>
            <div className="container">
                <div className="row collage-name-container">
                    <div className="col-auto pt-2">
                        <img src={logo} alt="" />
                    </div>
                    <div className='col'>
                        <h1>Lorem Ipsum School & Collage</h1>
                        <div className="d-flex">
                            <div>
                                <p>Knowledge is the backbone of a nation.</p>
                                <p>
                                    <span className='mr-2'>EIIN : 12345</span> |
                                    <span className='mx-2'>School code : 1234</span> |
                                    <span className='ml-2'>Collage code : 12345</span>
                                </p>
                            </div>
                            <div className='ml-auto'>
                                <p><small>Email: example@gmail.com</small></p>
                                <p><small>Phone: 01700000000</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={sticky ? 'navbar-container fixed-top' : 'navbar-container'}>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg navbar-light pl-0">
                        <Link class="nav-link px-4" to="/">
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon text-white"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" data-hover="dropdown" data-close-others="false" href="#" data-toggle="dropdown" aria-haspopup="true">
                                            About us
                                        </a>
                                        <div class="dropdown-menu p-3 p-lg-0">
                                            <Link class="dropdown-item" to="/at-a-glance">At a Glance</Link>
                                            <Link class="dropdown-item" to="/message">Message from Principal</Link>
                                            <Link class="dropdown-item" to="/history">History</Link>
                                            <Link class="dropdown-item" to="/administration">Administration</Link>
                                            <Link class="dropdown-item" to="/infrastructure">Infrastructure</Link>
                                            <Link class="dropdown-item" to="/achievements">Achievements</Link>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Academic
                                        </a>
                                        <div class="dropdown-menu p-3 p-lg-0" aria-labelledby="dropdownMenuButton">
                                            <Link class="dropdown-item" to="/class_home/fazil">Fazil</Link>
                                            <Link class="dropdown-item" to="/class_home/alim_2nd">Alim 1st Year</Link>
                                            <Link class="dropdown-item" to="/class_home/alim_1st">Alim 2nd Year</Link>
                                            <Link class="dropdown-item" to="/class_home/dakhil">Dakhil</Link>
                                            <Link class="dropdown-item" to="/class_home/class_9">Class 9</Link>
                                            <Link class="dropdown-item" to="/class_home/class_8">Class 8</Link>
                                            <Link class="dropdown-item" to="/class_home/class_7">Class 7</Link>
                                            <Link class="dropdown-item" to="/class_home/class_6">Class 6</Link>
                                            <Link class="dropdown-item" to="/class_home/class_5">Class 5</Link>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-4" to="/notice">Notice</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-4" to="/admission">Admission</Link>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" data-hover="dropdown" data-close-others="false" href="" data-toggle="dropdown" aria-haspopup="true">
                                            Co-curriculam
                                        </a>
                                        <div class="dropdown-menu p-3 p-lg-0">
                                            <Link class="dropdown-item" to="/sport">Sports</Link>
                                            <Link class="dropdown-item" to="/tour">Tours</Link>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" data-hover="dropdown" data-close-others="false" href="" data-toggle="dropdown" aria-haspopup="true">
                                            Facilities
                                        </a>
                                        <div class="dropdown-menu p-3 p-lg-0">
                                            <Link class="dropdown-item" to="/message">Hostel</Link>
                                            <Link class="dropdown-item" to="/debating-club">Debating club</Link>
                                            <Link class="dropdown-item" to="/science-club">Science club</Link>
                                            <Link class="dropdown-item" to="/cultural-club">Cultural club</Link>
                                            <Link class="dropdown-item" to="/canteen">Canteen</Link>
                                            <Link class="dropdown-item" to="/library">Library</Link>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-4" to="/contact">Contact</Link>
                                </li>
                                <li class="nav-item pl-auto">
                                    <Link class="nav-link login-btn-container px-4" to="/login"><small className='login-btn'>Login</small></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Navbar;