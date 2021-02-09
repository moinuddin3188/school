import React from 'react';
import Footer from '../Home/Footer/Footer';
import Subheader from '../Subheader/Subheader';
import '../../Style/Profile.scss';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import { connect } from 'react-redux';
import CV from './CV/CV';
import img from '../../Images/Ali Ashraf2.jpg';
import { setProfile } from '../../Redux/Profile/ProfileAction/ProfileAction';


const Profile = ({ profile, setProfile }) => {
    return (
        <>
            <Subheader title='PROFILE' />
            <section className='container mt-5 profile'>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 pl-lg-0">
                        <div className='profile-of mb-4'>
                            <p>Profile</p>
                        </div>
                        <img width='200px' src={img} alt="" />
                    </div>
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className="profile-of">
                            <p>Profile of Md. Yousuf</p>
                        </div>
                        <div className='mt-4'>
                            <h4>Dr. Muhammad Yousuf</h4>
                            <p>Professor</p>
                            <p>Email: example@gmail.com</p>
                            <p>Phone: +880170000000</p>
                            <div className='my-4'>
                                <ul class="list-group list-group-horizontal">
                                    <li
                                        onClick={() => setProfile('education')}
                                        className={profile === 'education' ? "list-group-item active" : "list-group-item"}
                                    >
                                        Education
                                    </li>
                                    <li
                                        onClick={() => setProfile('experience')}
                                        className={profile === 'experience' ? "list-group-item active" : "list-group-item"}
                                    >
                                        Experience
                                    </li>
                                    <li
                                        onClick={() => setProfile('cv')}
                                        className={profile === 'cv' ? "list-group-item active" : "list-group-item"}
                                    >
                                        CV
                                    </li>
                                </ul>
                            </div>
                            {profile === 'education' && <Education />}
                            {profile === 'experience' && <Experience />}
                            {profile === 'cv' && <CV />}
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
        profile: state.profile.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProfile: (profile) => dispatch(setProfile(profile))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);