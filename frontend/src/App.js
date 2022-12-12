import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavbarComp from './components/NavbarComp';
import NotFound from './routes/NotFound';
import WalletComp from './components/wallet/WalletComp';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import HomePage from './routes/HomePage';
import SigninPage from './routes/SigninPage';
import SignupPage from './routes/SignupPage';
import AccountPage from './routes/AccountPage';
import Portfolio from './routes/Portfolio';
import Dashboard from './routes/Dashboard';
import CompareComp from './components/compare/CompareComp';
import CryptoDetailPage from './routes/CryptoDetailPage';
import SplashPage from './routes/SplashPage';
import AboutPage from './routes/AboutPage';

//Premium
import PremiumPage from './components/premium/PremiumPage';
import '@stripe/stripe-js';
import CancelPage from './components/premium/CancelPage';
import SuccessPage from './components/premium/SuccessPage';

import { AccountContextProvider } from './context/Authentication';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useSocialAuthContext';

// social functions
import SocialDashboard from './routes/social/socialDashboard/SocialDashboard';
import Create from './routes/social/socialCreate/SocialCreate';
import SocialLogin from './routes/social/socialLogin/SocialLogin';
import SocialSignup from './routes/social/socialSignup/SocialSignup';
import Post from './routes/social/socialPost/SocialPost';
import SocialChat from './routes/social/socialChat/SocialChat';

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  const [cryptos, setCryptos] = useState([]);
  let urlStr = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true';

  useEffect(() => {
    const getAPIData = async () => {
      axios
        .get(urlStr)
        .then(res => {
          setCryptos(res.data);
          console.log(res.data);
          // Activate Notifications

          if (res.data[0].current_price > 16000) {
            new Notification('CryptoKonnect Notification', {
              body: `Price Alert: ${res.data[0].id} has reached $${res.data[0].current_price.toLocaleString()}`,
              // icon: "https://source.unsplash.com/random/?Cryptocurrency/"
              icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
            });
          }

          if (res.data[1].current_price < 1500) {
            new Notification('CryptoKonnect Notification', {
              body: `Price Alert: ${res.data[1].id} has dropped to $${res.data[1].current_price.toLocaleString()}`,
              // icon: "https://source.unsplash.com/random/?Cryptocurrency/"
              icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
            });
          }

          if (res.data[3].current_price > 265) {
            new Notification('CryptoKonnect Notification', {
              body: `Price Alert: ${res.data[3].id} has reached $${res.data[3].current_price.toLocaleString()}`,
              // icon: "https://source.unsplash.com/random/?Cryptocurrency/"
              icon: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850'
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    };

    // API first call
    getAPIData();

    // run the API call every 60 * secs (1000ms)
    const interval = setInterval(() => {
      getAPIData();
      //}, 60 * 1000);
    }, 18000 * 1000);
    return () => clearInterval(interval);
  }, [urlStr]);

  // const { authIsReady, user } = useAuthContext();
  const { user } = useAuthContext();
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AccountContextProvider>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage cryptos={cryptos} />} />
          <Route path="/signin" element={user ? <Navigate to="/dashboard" /> : <SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={user ? <AccountPage /> : <Navigate to="/signin" />} />
          <Route path="/portfolio" element={user ? <Portfolio /> : <Navigate to="/signin" />} />

          <Route path="/getpremium" element={user ? <PremiumPage /> : <Navigate to="/signin" />} />
          <Route path="/getpremium/cancel" element={<CancelPage />} />
          <Route path="/getpremium/success" element={<SuccessPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/compare" element={<CompareComp />} />
          <Route path="/crypto/:cryptoId" element={<CryptoDetailPage />}>
            <Route path=":cryptoId" />
          </Route>
          <Route path="/wallet" element={<WalletComp />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/social" element={user ? <SocialDashboard /> : <Navigate to="/socialsignin" />} />
          <Route path="/create" element={user ? <Create /> : <Navigate to="/socialsignin" />} />
          <Route path="/posts/:id" element={user ? <Post /> : <Navigate to="/socialsignin" />} />
          <Route path="/chat" element={<SocialChat />} />

          <Route path="/socialsignin" element={user ? <Navigate to="/social" /> : <SocialLogin />} />
          <Route path="/socialsignup" element={user ? <Navigate to="/social" /> : <SocialSignup />} />
        </Routes>
        <Footer />
      </AccountContextProvider>
    </Web3ReactProvider>
  );
}

export default App;
