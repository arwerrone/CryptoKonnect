import React from 'react';
import AddedCrypto from '../components/dashboard/AddedCrypto';
import { AccountAuth } from '../context/Authentication';
import { Navigate, useNavigate } from 'react-router-dom';
import ChatDashboard from '../components/dashboard/ChatDashboard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logOff } = AccountAuth();
  const navigate = useNavigate();

  // attempt to logOff and redirect to homepage if succeeded
  const handlelogOff = async () => {
    try {
      await logOff();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className="mx-auto max-w-[1150px]">
        <div className="round-corner flex flex-auto justify-between items-center mt-4 py-0">
          <div>
            <h2 className="text-4xl py-3">Dashboard</h2>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <ul className="flex flex-auto justify-between items-center my-0 py-4">
              <li className='px-2'>
                <Link className="btn mt-3 mb-3 p-2 w-full bg-primary text-white rounded-xl shadow-2xl" to="/social">
                  Crypto Social
                </Link>
              </li>
              <li className='px-2'>
                <button onClick={handlelogOff} className="mt-3 mb-3 p-2 w-full bg-secondary text-white rounded-xl shadow-2xl">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="round-corner flex flex-auto justify-between items-center my-10 py-10">
          <div className="w-full">
            <h2 className="text-4xl py-3">Alert List</h2>
            <AddedCrypto />
          </div>
        </div>

        <div className="round-corner flex flex-auto justify-between items-center my-10 py-10">
          <div className="w-full">
            <h2 className="text-4xl py-3">Social</h2>
            <ChatDashboard />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Dashboard;
