import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import '../../Style/Administration.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories/Categories';
import { useHistory } from 'react-router-dom';
import img from '../../Images/AliAshraf.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { currentProfile } from '../../Redux/CurrentProfile/CurrentProfileAction';

const Administration = ({ setCurrentProfile }) => {

    const [principals, setPrincipals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/principalsAndVicePrincipals')
            .then(res => res.json())
            .then(data => setPrincipals(data))
    })

    const history = useHistory()
    const profile = profile => {
        setCurrentProfile(profile)
        history.push('/profile')
    }

    return (
        <>
            <Subheader title='ADMINISTRATION' />
            <section className="container mt-5 administration">
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2>
                            <span style={{ fontWeight: "300" }}>Administration and </span>
                            <span style={{ fontWeight: "600" }}>Authority</span>
                        </h2>
                        <div className="row">
                            {
                                principals.map(principal =>
                                    <div className='col-6 mt-4'>
                                        <img width='150px' src={principal.picture.large} alt="" />
                                        <p className='mt-2 title'>
                                            {principal.section === 'principal-collage' && 'Principal (Collage)'}
                                            {principal.section === 'principal-school' && 'Principal (school)'}
                                            {principal.section === 'vice-principal-collage' && 'vice-principal (Collage)'}
                                            {principal.section === 'vice-principal-school' && 'vice-principal (School)'}
                                        </p>
                                        <p>{`${principal.name.title} ${principal.name.first} ${principal.name.last}`}</p>
                                        <p>Phone: {principal.phone}</p>
                                        <p>Email: {principal.email}</p>
                                        <button onClick={() => profile(principal)} className="button px-4">Profile</button>
                                    </div>
                                )
                            }
                        </div>
                        <div className="row">
                            <div className='col-6 mt-4'>
                                <img width='150px' src={img} alt="" />
                                <p className='mt-2 title'>Chairman</p>
                                <p>Governing body</p>
                                <p>Mr. Md. Kabir Ahmed</p>
                                <p>Phone: 0170000000</p>
                                <p>Email: example@gmail.com</p>
                            </div>
                            <div className='col-6 mt-4'>
                                <img width='150px' src={img} alt="" />
                                <p className='mt-2 title'>Vice-Precedent</p>
                                <p>Governing body</p>
                                <p>Md. Someone</p>
                                <p>Phone: 0170000000</p>
                                <p>Email: example@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentProfile: (profile) => dispatch(currentProfile(profile))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Administration);