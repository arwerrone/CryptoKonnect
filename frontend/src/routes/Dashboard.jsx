import React from 'react';
import AlertList from '../components/dashboard/AlertList';

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-[1150px]">
      <div className='round-corner flex flex-auto justify-between items-center my-10 py-10'>
        <div>
          <h2 className="text-4xl py-3">Dashboard</h2>
          <div>
            <p>Welcome, User1</p>
          </div>
        </div>
        <div>
          <button className='mt-5 mb-3 p-2 w-full bg-secondary text-white rounded-xl shadow-2xl'>Log Out</button>
        </div>
      </div>
      <div className='round-corner flex flex-auto justify-between items-center my-10 py-10'>
        <div>
          <h2 className="text-4xl py-3">Alert List</h2>
          <AlertList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
