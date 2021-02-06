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
                    <li class="list-group-item" onClick={() => getPath('/administration')}>Authority</li>
                    <li class="list-group-item" onClick={() => getPath('/committee')}>Committee</li>
                    <li class="list-group-item" onClick={() => getPath('/campus')}>Campus</li>
                    <li class="list-group-item" onClick={() => getPath('/hostel')}>Hostel</li>
                    <li class="list-group-item" onClick={() => getPath('/')}>Others list</li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;