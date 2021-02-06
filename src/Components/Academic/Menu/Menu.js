import React from 'react';
import { useHistory } from 'react-router-dom';

const Menu = () => {

    const history = useHistory();
    const getPath = path => {
        history.push(path);
    }

    return (
        <div className='col-lg-3 col-md-6 col-12 pl-lg-0'>
            <div className='menu-title'>
                <p>Class 9</p>
            </div>
            <ul class="list-group rounded-0">
                <li class="list-group-item" onClick={() => getPath('/class_home/class_9')}>Home page</li>
                <li class="list-group-item" onClick={() => getPath('/class_teacher')}>Class Teacher</li>
                <li class="list-group-item" onClick={() => getPath('/students')}>Students</li>
                <li class="list-group-item" onClick={() => getPath('/syllabus')}>Syllabus</li>
                <li class="list-group-item" onClick={() => getPath('/class_routine')}>Class Routine</li>
                <li class="list-group-item" onClick={() => getPath('/books')}>Books</li>
                <li class="list-group-item" onClick={() => getPath('/photo_gallery')}>Photo Gallery</li>
                <li class="list-group-item" onClick={() => getPath('/class_contact')}>Contact</li>
            </ul>
        </div>
    );
};

export default Menu;