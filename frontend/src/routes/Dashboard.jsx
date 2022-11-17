import React, { useEffect, useState } from 'react';
import AddedCrypto from '../components/dashboard/AddedCrypto';

import { useAuthContext } from '../../src/hooks/useSocialAuthContext';
import { projectFirestore } from '../firebase';
import SocialAvatar from '../components/social/SocialAvatar';

import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useLogout } from '../../src/hooks/useSocialLogout';

const Dashboard = () => {
  // const { user, logOff } = AccountAuth();
  // const navigate = useNavigate();
  const { user } = useAuthContext();
  const [premium, setPremium] = useState([]);
  const { logout, isPending } = useLogout();

  useEffect(() => {
    projectFirestore
      .collection('users')
      .doc(`${user?.uid}`)
      .onSnapshot(doc => {
        setPremium(doc.data()?.premium);
      });
  }, [user?.uid]);

  if (user) {
    return (
      <div className="mx-auto max-w-[1150px]">
        <div className="round-corner flex flex-auto justify-between items-center mt-4 py-0">
          <div className="flex flex-auto mt-4 py-0 px-2">
            <div>
              <div className="px-2">
                <SocialAvatar src={user.photoURL} />
              </div>
              {premium === false ? <p className="rounded-xl bg-secondary text-white text-center text-lg pb-1 px-1">Free</p> : <p className="rounded-xl bg-danger text-white text-center text-lg pb-1 px-1">Premium</p>}
            </div>
            <div className="px-3">
              <h2 className="text-4xl py-3">Dashboard</h2>
              <div>
                <p>
                  Welcome, <strong>{user?.displayName}</strong>
                </p>
              </div>
            </div>
          </div>

          <div>
            <ul className="flex flex-auto justify-between items-center my-0 py-4">
              <li className="px-2">
                <Link className="shadow-xl btn bg-primary text-white" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="px-2">
                <Link className="shadow-xl btn bg-primary text-white" to="/social">
                  Crypto Social
                </Link>
              </li>

              <li className="px-2">
                {!isPending && (
                  <button onClick={logout} className="shadow-xl btn bg-danger text-white">
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
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Dashboard;
