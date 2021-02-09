import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../../Style/Dashboard.scss';

const Dashboard = () => {
    return (
        <main className='container-fluid dashboard'>
            <div className="row">
                <Sidebar />
            </div>
        </main>
    );
};

export default Dashboard;