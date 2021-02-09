import React from 'react';
import { useHistory } from 'react-router-dom';

const Categories = () => {

    const history = useHistory();
    const getPath = path => {
        history.push(path);
    }

    return (
        <div className="col-md-3 col-12 pl-md-0">
            <img width='100%' src="https://www.cuet.ac.bd/frontend/images/administ.jpg" alt="" />
            <div className="text-center category-title">
                <p className='mb-0'>CATEGORIES</p>
            </div>
            <div className='categories'>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <span onClick={() => getPath('/administration')}>Authority</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/committee')}>Governing body</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/campus')}>Teachers</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/hostel')}>Staff</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/campus')}>Campus</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/')}>Others list</span> </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;