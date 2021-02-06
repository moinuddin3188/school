import React from 'react';
import '../../Style/Subheader.scss';

const Subheader = ({title}) => {
    return (
        <section className="subheader d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h1>{title}</h1>
            </div>
        </section>
    );
};

export default Subheader;