import React, { useEffect, useState } from 'react';
import { fakeData } from '../../../FakeData/FakeData';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Menu from '../Menu/Menu';

const Students = () => {
    
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/student')
        .then(res => res.json())
        .then(data => setStudents(data))
    })

    return (
        <>
            <Subheader title='STUDENTS' />
            <section className='container mt-5 academic'>
                <div className="row">
                    <Menu />
                    <div className="col-lg-9 col-12 pr-lg-0 mt-5 mt-lg-0">
                        <div className='menu-title'>
                            <p>Students</p>
                        </div>
                        <div className="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Picture</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Roll</th>
                                        <th scope="col">Previous</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((student, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img width='80px' src={student.picture.large} alt="" />
                                                </td>
                                                <td>{`${student.name.first} ${student.name.last}`}</td>
                                                <td>{student.dob.age}</td>
                                                <td>{student.registered.age}</td>
                                                <td>{student.phone}</td>
                                                <td>{`${student.location.street.name}, ${student.location.city} ${student.location.state}`}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Students;