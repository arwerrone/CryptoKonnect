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
import Dashboard from './routes/Dashboard';
import CompareComp from './components/compare/CompareComp';
import CryptoDetailPage from './routes/CryptoDetailPage';
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
  let urlStr = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=true';

  useEffect(() => {
    axios
      .get(urlStr)
      .then(res => {
        setCryptos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [urlStr]);

  // const { authIsReady, user } = useAuthContext();
  const { user } = useAuthContext();
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AccountContextProvider>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<HomePage cryptos={cryptos} />} />
          <Route path="/signin" element={user ? <Navigate to="/dashboard" /> : <SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
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
