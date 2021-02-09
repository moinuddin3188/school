import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import '../../Style/Achievements.scss';
import AchievementCard from './AchievementCard/AchievementCard';

const Achievements = () => {
    const a = [1,1,1,1,1,];
    return (
        <>
            <Subheader title={'ACHIEVEMENTS'} />
            <section className="container mt-5 achievements">
                <div className="title mb-4">
                    <p>Achievements</p>
                </div>
                <div className="row">
                    {
                        a.map(() => <AchievementCard />)
                    }
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Achievements;