import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import '../../../Style/Achievements.scss';

const AchievementDetails = () => {
    const a = [1, 1, 1, 1, 1, 1]
    return (
        <>
            <Subheader title={'ACHIEVEMENTS'} />
            <section className="container mt-5 achievement-details">
                <div className="row">
                    <div className="col-4 pl-0">
                        <div className="achievement-details-card">
                            <div className="cardHeader">
                                <p>
                                    <FontAwesomeIcon className='mr-2' icon={faFileAlt} />
                                ACHIEVEMENTS
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
                    <div className="col-8 pr-0">
                        <img className='w-75' src="http://rcpsc.edu.bd/media/imgAll/23-03-2020-1584952115.jpg" alt="" />
                        <div className="mt-4 mb-2 title">
                            <p>SSC scholarship 2019</p>
                        </div>
                        <small>Date: 13 feb 2021</small>
                        <div className="description">
                            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta nihil, quidem expedita cumque harum tenetur minus quis ratione molestias? Omnis neque adipisci et enim perspiciatis nulla illum voluptatem libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta nihil, quidem expedita cumque harum tenetur minus quis ratione molestias? Omnis neque adipisci et enim perspiciatis nulla illum voluptatem libero.</p>
                            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta nihil, quidem expedita cumque harum tenetur minus quis ratione molestias? Omnis neque adipisci et enim perspiciatis nulla illum voluptatem libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta nihil, quidem expedita cumque harum tenetur minus quis ratione molestias? Omnis neque adipisci et enim perspiciatis nulla illum voluptatem libero.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AchievementDetails;