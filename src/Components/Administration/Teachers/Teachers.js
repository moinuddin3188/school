import React from 'react';
import { useHistory } from 'react-router-dom';
import { fakeData } from '../../../FakeData/FakeData';
import Footer from '../../Home/Footer/Footer';
import Subheader from '../../Subheader/Subheader';
import Categories from '../Categories/Categories';

const Teachers = () => {

    const history = useHistory();
    const getPath = path => {
        history.push(path)
    }

    return (
        <>
            <Subheader title={'TEACHERS'} />
            <section className='container mt-5 administration'>
                <div className="row">
                    <Categories />
                    <div className="col-md-9 col-12 pr-md-0 mt-5 mt-md-0">
                        <h2 style={{ fontWeight: '600' }}>Teachers</h2>
                        <div className="row mt-5">
                            <div className="col-6">
                                <div className='teacher-section'>
                                    <h5>Teachers School Section</h5>
                                    <button onClick={() => getPath('/teachers-school')} className="button px-4">See all</button>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='teacher-section'>
                                    <h5>Teachers Collage Section</h5>
                                    <button onClick={() => getPath('/teachers-collage')} className="button px-4">See all</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Teachers;