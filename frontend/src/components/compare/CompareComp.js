import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CompareDetailPageLeft from './CompareDetailPageLeft';
import CompareDetailPageRight from './CompareDetailPageRight';

const CompareComp = props => {
  const [coin, setCoin] = useState([]);
  const [coin1, setCoin1] = useState([]);
  const [coin2, setCoin2] = useState([]);
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);

  let coinListUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=true`;

  useEffect(() => {
    axios
      .get(coinListUrl)
      .then(res => {
        setCoin(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <div className="my-4">
          <h1>Comparisons </h1>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <select
              className="w-full text-center text-xl text-primary bg-gray border border-input px-3 py-2 mb-4 shadow-xl rounded-xl"
              id="coin1"
              onChange={e => {
                setState({ selectedCoin1: e.target.value });
              }}
            >
              <option key="0" value="null">
                ---Select Crypto 1---
              </option>
              {coin.map(coinget => (
                <option key={coinget.id} value={coinget.id}>
                  {coinget.name}
                </option>
              ))}
            </select>

            {state.selectedCoin1 ? <CompareDetailPageLeft crypto={state.selectedCoin1} /> : <h3 className="mt-4 mb-12 text-center">Please select Crypto 1</h3>}
          </div>

          <div className="col-sm-6">
            <select
              className="w-full text-center text-xl text-primary bg-gray border border-input px-3 py-2 mb-4 shadow-xl rounded-xl"
              id="coin2"
              onChange={e => {
                setState2({ selectedCoin2: e.target.value });
              }}
            >
              <option key="0" value="0">
                ---Select Crypto 2---
              </option>
              {coin.map(coinget => (
                <option key={coinget.id} value={coinget.id}>
                  {coinget.name}
                </option>
              ))}
            </select>

            {state2.selectedCoin2 ? <CompareDetailPageRight crypto={state2.selectedCoin2} /> : <h3 className="mt-4 mb-12 text-center">Please select Crypto 2</h3>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareComp;
