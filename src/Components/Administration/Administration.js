import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';

const Administration = () => {
    return (
        <>
            <Subheader />
            <section className="container mt-5 administration">
                <div className="row">
                    <div className="col-3 pl-0">
                        <img width='100%'src="https://www.cuet.ac.bd/frontend/images/administ.jpg" alt=""/>
                    </div>
                    <div className="col-9 pr-0">
                        <h2>
                            <span style={{fontWeight: "300"}}>Administration and </span>
                            <span style={{fontWeight: "600"}}>Authority</span>
                        </h2>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Administration;