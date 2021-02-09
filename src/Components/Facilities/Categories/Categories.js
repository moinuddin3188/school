import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../Style/Facilities.scss';

const Categories = () => {

    const history = useHistory();
    const getPath = path => {
        history.push(path)
    }

    return (
        <div className="col-md-3 col-12 pl-md-0">
            <div className="title">
                <p>Facilities</p>
            </div>
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <span onClick={() => getPath('/hostel')}>Resident</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/debating-club')}>Debating club</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/science-club')}>Science club</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/cultural-club')}>Cultural club</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/canteen')}>Canteen</span> </li>
                    <li class="list-group-item"> <span onClick={() => getPath('/library')}>Library</span> </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;