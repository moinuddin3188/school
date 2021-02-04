import React from 'react';
import img from '../../../Images/47498481-a-portrait-of-a-men-in-studio-gray-background.png';

const PrincipalCard = () => {
    return (
        <div className='col-4'>
            <div className="principal-card text-center">
                <div className='place-container'></div>
                <h4 className='mt-2 mb-0'>Principal</h4>
                <img width='37%' src={img} alt=""/> <br/>
                <button className='button px-4 mt-2'>DETAILS</button>
                <h4 className='mt-3 mb-0'>Vice-Principal</h4>
                <img width='37%' src={img} alt=""/> <br/>
                <button className='button px-4 mt-2'>DETAILS</button>
            </div>
        </div>
    );
};

export default PrincipalCard;