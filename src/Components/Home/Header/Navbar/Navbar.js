import React, { useEffect, useState } from 'react';
import logo from '../../../../Images/services1.png';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 110 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <section className='container-fluid fixed-top'>
            <div className="row navbar-container" style={{backgroundColor: sticky && '#048278ef'}} >
                <div className="col-1 pr-0 pt-3 pb-2">
                    <img width="100%" src={logo} alt="" />
                </div>
                <div className="col-11 pt-2 pl-4">
                    <div className="d-flex">
                        <h1 className="m-0">Sultanpur Fazil Madrasha</h1>
                        <div className="ml-auto pt-3">
                            <p>
                                <small className="mr-3">01700000000</small> | 
                                <small className='ml-3'>Log In</small>
                            </p>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg navbar-light pl-0">
                        <a class="nav-link px-4" href="#">Home</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <div class="dropdown about-us-dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" data-hover="dropdown" data-close-others="false" href="#" data-toggle="dropdown" aria-haspopup="true">
                                            About us
                                        </a>
                                        <div class="dropdown-menu about-us-dropdown-menu">
                                            <a class="dropdown-item" href="#">Message from Principal</a>
                                            <a class="dropdown-item" href="#">History</a>
                                            <a class="dropdown-item" href="#">Administration</a>
                                            <a class="dropdown-item" href="#">Comity</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown academic-dropdown">
                                        <a class="nav-link px-4 dropdown-toggle" type="button" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Academic
                                        </a>
                                        <div class="dropdown-menu academic-dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Fazil</a>
                                            <a class="dropdown-item" href="#">Alim 1st Year</a>
                                            <a class="dropdown-item" href="#">Alim 2nd Year</a>
                                            <div class="dropdown dropright dakhil-dropdown">
                                                <a class="dropdown-toggle dropdown-item" type="button" id="dropdownDakhil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dakhil
                                                </a>
                                                <div class="dropdown-menu dakhil-dropdown-menu" aria-labelledby="dropdownDakhil">
                                                    <a class="dropdown-item" href="#">Section A</a>
                                                    <a class="dropdown-item" href="#">Section B</a>
                                                </div>
                                            </div>
                                            <div class="dropdown dropright class9-dropdown">
                                                <a class="dropdown-toggle dropdown-item" type="button" id="dropdownDakhil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Class 9
                                                </a>
                                                <div class="dropdown-menu class9-dropdown-menu" aria-labelledby="dropdownDakhil">
                                                    <a class="dropdown-item" href="#">Section A</a>
                                                    <a class="dropdown-item" href="#">Section B</a>
                                                </div>
                                            </div>
                                            <div class="dropdown dropright class8-dropdown">
                                                <a class="dropdown-toggle dropdown-item" type="button" id="dropdownDakhil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Class 8
                                                </a>
                                                <div class="dropdown-menu class8-dropdown-menu" aria-labelledby="dropdownDakhil">
                                                    <a class="dropdown-item" href="#">Section A</a>
                                                    <a class="dropdown-item" href="#">Section B</a>
                                                </div>
                                            </div>
                                            <a class="dropdown-item" href="#">Class 7</a>
                                            <a class="dropdown-item" href="#">Class 6</a>
                                            <a class="dropdown-item" href="#">Class 5</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-4" href="#">Notice</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-4" href="#">Admission</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-4" href="#">Hostel</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-4" href="#">Contact</a>
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