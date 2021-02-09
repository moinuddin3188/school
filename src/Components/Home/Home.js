import React from 'react';
import ChoseLink from './ChoseLink/ChoseLink';
import EventCard from './EventCard/EventCard';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import HeaderMain from './Header/HeaderMain/HeaderMain';
import ImportantFact from './ImportantFact/ImportantFact';
import NoticeBoardCard from './NoticeBoardCard/NoticeBoardCard';
import PrincipalCard from './PrincipalCard/PrincipalCard';

const Home = () => {
    return (
        <>
            <HeaderMain />
            <div className="container">
                <div className="row">
                    <EventCard />
                    <NoticeBoardCard />
                    <PrincipalCard />
                </div>
            </div>
            <ImportantFact />
            <ChoseLink />
            <Gallery />
            <Footer />
        </>
    );
};

export default Home;