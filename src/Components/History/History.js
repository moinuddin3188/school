import React from 'react';
import '../../Style/History.scss';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';

const History = () => {
    const a = [1, 1, 1, 1];
    return (
        <>
            <Subheader />
            <section className='history container mt-5'>
                <div className="row">
                    <div className="col-4 pl-0">
                        <img width='100%' src="https://www.cuet.ac.bd/frontend/images/history_left.jpg" alt="" />
                    </div>
                    <div className="col-8 pr-0">
                        <h2>History</h2>
                        {
                            a.map(() =>
                                <p>To fulfill our central mission, we are inducing the brightest students in our undergraduate academic programs, through highly competitive admission test. Academic programs are complemented with the commitment to provide our students a global career by the frequently updated curricula. In addition to our dedicated faculty, the students are able to gather hands-on industry's experience as CUET is enjoying geographical advantages as the solitary engineering university at the south-east region of the country. Chittagong region holds its eminence for the country's premier sea-port, myriad of heavy and light industries.</p>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default History;