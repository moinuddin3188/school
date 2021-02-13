import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fakeData } from '../../../FakeData/FakeData';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';

const Staff = () => {

    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/staff')
        .then(res => res.json())
        .then(data => setStaff(data))
    }, []);

    return (
        <>
            <Subheader title={'STAFF'} />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2 style={{ fontWeight: '600' }}>Staffs</h2>
                        <div className="mt-5 table-responsive">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Picture</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Joining Date</th>
                                        <th scope="col">Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        staff.map((staff, index) =>
                                            <tr>
                                                <td>
                                                    <img width='100px' src={staff.picture.large} alt="" />
                                                </td>
                                                <td>{`${staff.name.first} ${staff.name.last}`}</td>
                                                <td>{staff.registered.date.slice(0, 10)}</td>
                                                <td>Driver</td>
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

export default Staff;