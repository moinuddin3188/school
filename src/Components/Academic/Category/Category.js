import React from 'react';
import { useHistory } from 'react-router-dom';

const Category = () => {

    const history = useHistory();
    const getPath = path => {
        history.push(path);
    }

    return (
        <div className='col-lg-3 col-md-6 col-12 pl-lg-0'>
            <div className='menu-title'>
                <p>Academic</p>
            </div>
            <ul class="list-group rounded-0">
                <li class="list-group-item" onClick={() => getPath('/syllabus-all')}>Syllabus</li>
                <li class="list-group-item" onClick={() => getPath('/exam-routine')}>Exam routine</li>
                <li class="list-group-item" onClick={() => getPath('/public-result')}>Public result</li>
                <li class="list-group-item" onClick={() => getPath('/academic-result')}>Academic result</li>
            </ul>
        </div>
    );
};

export default Category;