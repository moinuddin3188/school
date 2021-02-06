import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../../Images/services1.png';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 110 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const history = useHistory();
    const goHome = () => {
        history.push('/')
    }

    return (
        <section className='container-fluid fixed-top'>
            <div className="row navbar-container" style={{backgroundColor: sticky && '#048278ef'}} >
                <div className="col-lg-1 col-md-2 col-auto pl-0 pt-2">
                    <img src={logo} alt="" />
                </div>
                <div className="col-lg-11 col-md-10 col pt-2 pl-0 pr-0">
                    <div className="d-flex">
                        <h1 className="m-0">Sultanpur Fazil Madrasha</h1>
                        <div className="ml-auto mt-lg-3 mt-md-2">
                            <p>
                                <small className="mr-3 d-none d-md-inline">01700000000</small> | 
                                <small className='ml-3'>Login</small>
                            </p>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg navbar-light pl-0">
                        <Link class="nav-link px-4" to="/">Home</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" data-hover="dropdown" data-close-others="false" href="#" data-toggle="dropdown" aria-haspopup="true">
                                            About us
                                        </a>
                                        <div class="dropdown-menu">
                                            <Link class="dropdown-item" to="/message">Message from Principal</Link>
                                            <Link class="dropdown-item" to="/history">History</Link>
                                            <Link class="dropdown-item" to="administration">Administration</Link>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Academic
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                                    <Link class="nav-link px-4" to="admission">Admission</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-4" to="/hostel">Hostel</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-4" to="contact">Contact</Link>
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