import React, { useEffect, useState } from 'react';

import { useAuthContext } from '../../src/hooks/useSocialAuthContext';
import { projectFirestore } from '../firebase';
import SocialAvatar from '../components/social/SocialAvatar';
import PortfolioCryptoDetail from '../components/portfolio/PortfolioCryptoDetail';

import { Navigate } from 'react-router-dom';
import { useLogout } from '../../src/hooks/useSocialLogout';

import PortfolioAddedCrypto from '../components/portfolio/PortfolioAddedCrypto';

const Dashboard = () => {
  let sum = 0;
  let sumChange = 0;
  let change = 0;
  const [amounts, setAmounts] = useState([]);

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

  useEffect(() => {
    projectFirestore
      .collection('users')
      .doc(`${user?.uid}`)
      .onSnapshot(doc => {
        setAmounts(doc.data()?.portfolioList);
      });
  }, [user?.uid]);

  if (amounts) {
    amounts.forEach(a => (sum += a.amount * a.price));
    // for (let i = 0; i < cryptos.length; i++) {
    //   sum += amounts[i].amount * cryptos[i].price;
    // }
  }

  if (amounts) {
    sumChange = 0;
    for (let i = 0; i < amounts.length; i++) {
      sumChange += (amounts[i].change * amounts[i].amount * amounts[i].price) / 100;
    }
    if (sum !== 0) {
      change = (sumChange / sum) * 100;
    }
  }

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
              <h2 className="text-4xl py-3">Portfolio</h2>
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

        <div className="mt-8">
          <PortfolioAddedCrypto />
        </div>
        <hr />
        <div className="flex flex-auto justify-between items-center my-0 py-0">
          <div className="w-full">
            <div className="flex justify-between">
              <h4>{user.displayName}'s Net Worth:</h4>
              <h4 className="pr-4 text-green-600">${sum.toLocaleString()}</h4>
            </div>
            <div className="mt-2 flex justify-between">
              <p>Net Worth Change (last 24h):</p>
              {sumChange < 0 ? <p className="pr-4 text-danger">${sumChange.toLocaleString()}</p> : <p className="pr-4 text-green-600">${sumChange.toLocaleString()}</p>}
            </div>
            <div className="flex justify-between">
              <p>Change Percentage (last 24h):</p>
              {change < 0 ? <p className="pr-4 text-danger">{change.toFixed(4)}%</p> : <p className="pr-4 text-green-600">{change.toFixed(4)}%</p>}
            </div>
            <hr />
            <h4 className="py-3">Your Assets</h4>
            {amounts?.map(crypto => (
              <PortfolioCryptoDetail key={crypto.id} crypto={crypto} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Dashboard;
