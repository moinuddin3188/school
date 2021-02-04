import React from 'react';

const ImportantFact = () => {
    const a = [
        { title: 'Hostel Room', count: 50 },
        { title: 'Class Room', count: 60 },
        { title: 'Teachers', count: 40 },
        { title: 'Students', count: 500 }
    ]
    return (
        <section className='fact-container py-5 mt-5'>
            <div className="container">
                <h2>Some Important Fact About us</h2>
                <div className="row">
                    {
                        a.map(a =>
                            <div className="col-3 text-center text-white fact-card">
                                <h1> {a.count} </h1>
                                <p> {a.title} </p>
                                <button className="button px-4 mt-3">DETAILS</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ImportantFact;