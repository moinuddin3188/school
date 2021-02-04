import React from 'react';
import img from '../../../Images/Rihan.png';

const ChoseLink = () => {
    const a = [
        { title: 'About us' },
        { title: 'Result' },
        { title: 'Hostel' }
    ]
    return (
        <section className="container mt-5">
            <div className="row">
                {
                    a.map(a =>
                        <div className="col-4 px-4">
                            <div className="chose-link-card text-center">
                                <img src={img} alt="" />
                                <h5 className="mt-4"> {a.title} </h5>
                                <div className='chose-link-info'>
                                    <p>Lorem ipsum dolor sit amet consec adipis amet consec ipsum dolor sit amet consec.</p>
                                </div>
                                <div className='position'>
                                    <button className="button mt-3 px-3">CLICK HERE</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default ChoseLink;