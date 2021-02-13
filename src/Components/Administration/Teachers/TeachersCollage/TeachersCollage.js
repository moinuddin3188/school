import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fakeData } from '../../../../FakeData/FakeData';
import { currentProfile } from '../../../../Redux/CurrentProfile/CurrentProfileAction';
import Footer from '../../../Home/Footer/Footer';
import Subheader from '../../../Subheader/Subheader';
import Categories from '../../Categories/Categories';

const TeachersCollage = ({ setCurrentProfile }) => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teachers-collage')
        .then(res => res.json())
        .then(data => setTeachers(data))
    }, []);

    const [currentTeachers, setCurrentTeachers] = useState([0,10]);
    const showTeachers = teachers.slice(currentTeachers[0], currentTeachers[1]);

    const pagination = (array) => {
        setCurrentTeachers(array)
    }

    const history = useHistory();
    const seeProfile = profile => {
        setCurrentProfile(profile)
        history.push('/profile')
    }

    return (
        <>
            <Subheader title={'TEACHERS'} />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2 style={{ fontWeight: '600' }}>Teachers</h2>
                        <div className='my-4 d-flex'>
                            <p className='title'>Teachers Collage Section</p>
                            <div className='ml-auto'>
                                <label htmlFor="">Search</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Picture</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Joining_Date</th>
                                        <th scope="col">Edu_Qua</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Profile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        showTeachers.map((teacher, index) =>
                                            <tr>
                                                <td>
                                                    <img width='100px' src={teacher.picture.large} alt="" />
                                                </td>
                                                <td>{`${teacher.name.first} ${teacher.name.last}`}</td>
                                                <td>Senior Teacher</td>
                                                <td>English</td>
                                                <td>{teacher.registered.date.slice(0, 10)}</td>
                                                <td>B.A(Honors)</td>
                                                <td>{teacher.phone}</td>
                                                <td>{teacher.email}</td>
                                                <td>
                                                    <button onClick={() => seeProfile(teacher)} className="button px-3">View</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <nav className='mt-3'>
                            <ul class="pagination pagination-md">
                                <li onClick={() => pagination([0, 10])} class="page-item">
                                    <p class="page-link" href="">1</p>
                                </li>
                                <li onClick={() => pagination([10, 20])} class="page-item">
                                    <p class="page-link" href="">2</p>
                                </li>
                                <li onClick={() => pagination([20, 30])} class="page-item">
                                    <p class="page-link" href="">3</p>
                                </li>
                                <li onClick={() => pagination([30, 40])} class="page-item">
                                    <p class="page-link" href="">last</p>
                                </li>
                            </ul>
                        </nav>
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
)(TeachersCollage);