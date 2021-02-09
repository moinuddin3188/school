import React, { useEffect, useState } from 'react';
import '../../Style/Subheader.scss';

const Subheader = ({title}) => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 105 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <section className="subheader d-flex justify-content-center align-items-center" style={{marginTop: sticky && '54px'}}>
            <div className="text-center">
                <h1>{title}</h1>
            </div>
        </section>
    );
};

export default Subheader;