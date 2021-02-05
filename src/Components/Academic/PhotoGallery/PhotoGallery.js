import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';
import img from '../../../Images/2nd.png';
import img2 from '../../../Images/2nd2.png';

const PhotoGallery = () => {
    const a = [1, 1, 1];
    return (
        <>
            <Subheader />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-9 pr-0">
                        <h4 className="text-center mb-3">Gallery</h4>
                        <div className="row photo-gallery">
                            {
                                a.map(() =>
                                    <>
                                        <div className="col-4 p-0">
                                            <img width='100%' src={img} alt="" />
                                        </div>
                                        <div className="col-4 p-0">
                                            <img width='100%' src={img2} alt="" />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PhotoGallery;