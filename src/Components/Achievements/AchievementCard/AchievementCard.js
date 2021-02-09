import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Style/Achievements.scss';

const AchievementCard = () => {
    return (
        <div className='col-lg-3 col-md-4 col-6 px-1 mb-2'>
            <div class="card">
                <img src="http://rcpsc.edu.bd/media/imgAll/23-03-2020-1584952115.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">SSC scholarship 2019</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/achievement-details">
                        <button class="button px-3 mt-3">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;