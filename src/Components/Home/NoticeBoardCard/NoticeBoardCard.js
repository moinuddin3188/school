import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const NoticeBoardCard = () => {
    const a = [1,1,1,1]
    return (
        <div className='col-4'>
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
                                <p className='text-danger'>Read more...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default NoticeBoardCard;