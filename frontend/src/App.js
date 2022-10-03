import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/coins/Coins';
import Coin from './routes/coin/Coin';
import Footer from './components/footer/Footer';
import NavbarComp from './components/NavbarComp';
import NotFound from './routes/NotFound';
import WalletComp from './components/wallet/WalletComp';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setCoins(response.data);
        // console.log(response.data[0])
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (

    <Web3ReactProvider getLibrary={getLibrary}>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
        <Route path='/wallet' element={<WalletComp/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </Web3ReactProvider>


  );
}

export default App;
