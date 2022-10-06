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
import CryptoDetailPage from './routes/CryptoDetailPage';

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

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage cryptos={cryptos} />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/compare' element={<CompareComp/>} />
        <Route path="/crypto/:cryptoId" element={<CryptoDetailPage />}>
          <Route path=":cryptoId" />
        </Route>

        <Route path="/wallet" element={<WalletComp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Web3ReactProvider>
  );
}

export default App;
