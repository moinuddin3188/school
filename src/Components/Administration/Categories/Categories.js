import React from 'react';

const Categories = () => {
    return (
        <div className="col-3 pl-0">
            <img width='100%' src="https://www.cuet.ac.bd/frontend/images/administ.jpg" alt="" />
            <div className="text-center category-title">
                <p className='mb-0'>CATEGORIES</p>
            </div>
            <div className='categories'>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Authority</li>
                    <li class="list-group-item">Committee</li>
                    <li class="list-group-item">Campus</li>
                    <li class="list-group-item">Hostel</li>
                    <li class="list-group-item">Others list</li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;