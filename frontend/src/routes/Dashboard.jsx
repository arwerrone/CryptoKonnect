import React from 'react';
import AddedCrypto from '../components/dashboard/AddedCrypto';
import { AccountAuth } from '../context/Authentication';
import { Navigate } from 'react-router-dom';
// import ChatDashboard from '../components/dashboard/ChatDashboard';
import { Link } from 'react-router-dom';

import { useLogout } from '../../src/hooks/useSocialLogout';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../../src/hooks/useSocialAuthContext';

const Dashboard = () => {
  // const { user, logOff } = AccountAuth();
  const { user } = AccountAuth();
  // const navigate = useNavigate();
  /*
  const handlelogOff = async () => {
    try {
      await logOff();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };
*/
  const { logout, isPending } = useLogout();

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
              <li className="px-2">
                <Link className="btn bg-white border-primary text-primary" to="/social">
                  Crypto Social
                </Link>
              </li>

              <li className="px-2">
                {!isPending && (
                  <button onClick={logout} className="btn bg-secondary text-white">
                    Sign Out
                  </button>
                )}

                {isPending && (
                  <button className="btn bg-secondary text-white" disabled>
                    Logging out...
                  </button>
                )}
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
      
        {/* 
        <div className="round-corner flex flex-auto justify-between items-center my-10 py-10">
          <div className="w-full">
            <h2 className="text-4xl py-3">Social</h2>
            <ChatDashboard />
          </div>
        </div> 
        */}
      </div>
      
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Dashboard;
