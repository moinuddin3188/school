import React from 'react';
import Subheader from '../Subheader/Subheader';
import '../../Style/Message.scss';
import Footer from '../Home/Footer/Footer';
import img from '../../Images/Ali Ashraf2.jpg';

const Message = () => {
    const a = [1,1,1,1];
    return (
        <>
            <Subheader title='MESSAGE' />
            <section className="message container mt-5">
                <div className="row">
                    <div className="col-md-3 col-12 pl-md-0">
                        <img src="https://www.cuet.ac.bd/frontend/images/vcsir.jpg" alt=""/>
                        <h6>Md. Kabir Ahmed</h6>
                        <h5>Principal</h5>
                    </div>
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2>
                            <span style={{fontWeight: "300"}}>Message from </span>
                            <span style={{fontWeight: "600"}}>Principal</span>
                        </h2>
                        <p>Your interest and enthusiasm to visit our website is highly appreciated.</p>
                        {
                            a.map(() => 
                                <p>To fulfill our central mission, we are inducing the brightest students in our undergraduate academic programs, through highly competitive admission test. Academic programs are complemented with the commitment to provide our students a global career by the frequently updated curricula. In addition to our dedicated faculty, the students are able to gather hands-on industry's experience as CUET is enjoying geographical advantages as the solitary engineering university at the south-east region of the country. Chittagong region holds its eminence for the country's premier sea-port, myriad of heavy and light industries.</p>
                            )
                        }
                        <p>Finally, I look forward to warm welcoming you at naturally pristine CUET campus.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Message;