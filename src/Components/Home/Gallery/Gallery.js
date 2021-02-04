import React from 'react';
import img from '../../../Images/1st.png';
import img2 from '../../../Images/2nd.png';
import img2nd from '../../../Images/2nd2.png';
import img3 from '../../../Images/3rd.png';
import last from '../../../Images/last.png';

const Gallery = () => {
    return (
        <section className='container-fluid mt-5 gallery'>
            <h2>PICTURES AND GALLERY</h2>
            <div className="row">
                <div className="col-6 p-0">
                    <img width='100%' src={img} alt="" />
                </div>
                <div className="col-3 p-0 d-flex flex-column">
                    <div>
                        <img width='100%' src={img2} alt="" />
                    </div>
                    <div>
                        <img width='100%' src={img2nd} alt="" />
                    </div>
                </div>
                <div className="col-3 p-0">
                    <img width='100%' src={img3} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-0">
                    <img width='100%' src={img2} alt="" />
                </div>
                <div className="col-3 p-0">
                    <img width='100%' src={img2nd} alt="" />
                </div>
                <div className="col-3 p-0">
                    <img width='100%' src={img2} alt="" />
                </div>
                <div className="col-3 p-0">
                    <img width='100%' src={img2nd} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-0">
                    <img width='100%' src={img2nd} alt="" />
                </div>
                <div className="col-3 p-0">
                    <img width='100%' src={img2} alt="" />
                </div>
                <div className="col-6 p-0">
                    <img width='100%' src={last} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;