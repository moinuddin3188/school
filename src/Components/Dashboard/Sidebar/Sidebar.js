import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = () => {
    return (
        <section className="col-2 sidebar">
            <ul class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <FontAwesomeIcon className='icon' icon={faHome} /> Home
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <FontAwesomeIcon className='icon' icon={faPlus} /> Add Event
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <FontAwesomeIcon className='icon' icon={faPlus} /> Add Notice
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <FontAwesomeIcon className='icon' icon={faPlus} /> Add Teacher
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <FontAwesomeIcon className='icon' icon={faPlus} /> Add Student
                </a>
            </ul>
        </section>
    );
};

export default Sidebar;