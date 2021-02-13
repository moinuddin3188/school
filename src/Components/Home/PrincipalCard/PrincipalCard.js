import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentProfile } from '../../../Redux/CurrentProfile/CurrentProfileAction';

const PrincipalCard = ({ setCurrentProfile }) => {

    const [principals, setPrincipals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/principals')
            .then(res => res.json())
            .then(data => setPrincipals(data))
    }, [])

    const history = useHistory();
    const viewProfile = profile => {
        setCurrentProfile(profile)
        history.push('/profile')
    }

    return (
        <div className='col-md-4 col-12'>
            <div className="principal-card text-center">
                <div className='place-container'></div>
                {
                    principals.map(principal =>
                        <>
                            <h4 className='mt-2 mb-0'>{principal.section === 'principal-collage' ? 'Principal (Collage)' : 'Principal (School)'}</h4>
                            <img className="rounded-circle mt-2" width='37%' src={principal.picture.large} alt="" /> <br />
                            <button onClick={() => viewProfile(principal)} className='button px-4 mt-2'>DETAILS</button>
                        </>
                    )
                }
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentProfile: (profile) => dispatch(currentProfile(profile))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PrincipalCard);