import React, { useEffect } from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import '../../Style/Profile.scss';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import { connect } from 'react-redux';
import CV from './CV/CV';


const Profile = ({ profileSection, setProfileSection, profile }) => {

    const { name, section, email, phone, picture } = profile;
console.log(profile)
    return (
        <>
            <Subheader title='PROFILE' />
            <section className='container mt-5 profile'>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 pl-lg-0">
                        <div className='profile-of mb-4'>
                            <p>Profile</p>
                        </div>
                        <img width='200px' src={picture.large} alt="" />
                    </div>
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className="profile-of">
                            <p>Profile of {`${name.first} ${name.last}`}</p>
                        </div>
                        <div className='mt-4'>
                            <h4>{`${name.first} ${name.last}`}</h4>
                            <p>
                                {section === 'collage' && 'Professor'}
                                {section === 'school' && 'Senior Teacher'}
                                {section === 'principal-collage' && 'Principal collage'}
                                {section === 'principal-school' && 'Principal school'}
                                {section === 'vice-principal-collage' && 'Vice-principal collage'}
                                {section === 'vice-principal-school' && 'Vice-principal school'}
                            </p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <div className='my-4'>
                                <ul class="list-group list-group-horizontal">
                                    <li
                                        onClick={() => setProfileSection('education')}
                                        className={profileSection === 'education' ? "list-group-item active" : "list-group-item"}
                                    >
                                        Education
                                    </li>
                                    <li
                                        onClick={() => setProfileSection('experience')}
                                        className={profileSection === 'experience' ? "list-group-item active middle" : "list-group-item middle"}
                                    >
                                        Experience
                                    </li>
                                    <li
                                        onClick={() => setProfileSection('cv')}
                                        className={profileSection === 'cv' ? "list-group-item active" : "list-group-item"}
                                    >
                                        CV
                                    </li>
                                </ul>
                            </div>
                            {profileSection === 'education' && <Education />}
                            {profileSection === 'experience' && <Experience />}
                            {profileSection === 'cv' && <CV />}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const mapStateToProps = state => {
    return {
        profileSection: state.profile.profile,
        profile: state.currentProfile.profile
    }
}

export default connect(
    mapStateToProps,
    null
)(Profile);