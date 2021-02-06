import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import '../../Style/Notice.scss';
import { useHistory } from 'react-router-dom';

const Notice = () => {
    const a = [1,1,1,1,1,1,1,1]

    const history = useHistory();
    const notice = () => {
        history.push('/notice')
    }

    return (
        <>
            <Subheader title='NOTICE' />
            <section className='container mt-5 notice'>
                <div className="row">
                    <div className="col-md-4 col-12 pl-md-0">
                    <div className="noticeboard-card">
                <div className="cardHeader">
                    <p>
                        <FontAwesomeIcon className='mr-2' icon={faFileAlt} />
                        NOTICE BOARD
                    </p>
                </div>
                <div className="cardBody">
                    {
                        a.map(() =>
                            <div className='p-2 sub-card'>
                                <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatem......</p>
                                <small>13 feb 2021</small>
                                <p className='text-danger'><span className='show-details'>Read more...</span></p>
                            </div>
                        )
                    }
                </div>
            </div>
                    </div>
                    <div className="col-md-8 col-12 pr-md-0 mt-5 mt-md-0">
                        <img width='100%'src="https://www.cuet.ac.bd/notice/1611841206_IMG-20210127-WA0000.jpg" alt=""/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Notice;