import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const EventCard = () => {
    const a = [1, 1, 1, 1]
    const history = useHistory()
    const events = () => {
        history.push('/event')
    }
    return (
        <div className='col-md-4 col-12 mb-md-0 mb-4'>
            <div className="event-card">
                <div className="cardHeader">
                    <p>
                        <FontAwesomeIcon className='mr-2' icon={faFileAlt} />
                        LATEST EVENT
                    </p>
                </div>
                <div className="cardBody">
                    {
                        a.map(() =>
                            <div className='p-2 sub-card'>
                                <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatem......</p>
                                <small>13 feb 2021</small>
                                <p className='text-danger'><span onClick={events} className='show-details'>Read more...</span></p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default EventCard;