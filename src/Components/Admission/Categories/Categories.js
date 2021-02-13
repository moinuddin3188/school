import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../Style/Admission.scss';

const Categories = () => {

    const history = useHistory();
    const getPath = path => {
        history.push(path)
    }

    return (
        <div className='col-md-3 col-12 pl-md-0'>
            <img width='100%' src="https://www.stxavierscmipublicschool.com/wp-content/uploads/2020/05/unnamed.png" alt="" />
            <div className="admission-menu-title mt-4">
                <p>Admission</p>
            </div>
            <div className="admission-menu">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <span onClick={() => getPath('/admission')}>Admission circular</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/admission-form')}>Admission form</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/admission-result')}>Admission result</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/admission-fees')}>Fees</span> </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;