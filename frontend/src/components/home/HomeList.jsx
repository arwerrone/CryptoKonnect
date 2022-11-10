import React, { useState } from 'react';

import SingleCrypto from './SingleCrypto';

const HomeList = props => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="round-corner my-3">
      <div className="flex flex-auto justify-between pt-3 pb-3">
        <h2 className="text-4xl">Cryptocurrencies</h2>
        <form>
          <input className="bg-gray border border-input px-3 py-1 rounded-xl shadow-xl" onChange={event => setKeyword(event.target.value)} type="text" placeholder="Find a Crypto" />
        </form>
      </div>
      <p className="pb-4 text-xl">Please click on the Star icon to add crypto(s) to your personal dashboard.</p>
      <table className="w-100 text-left">
        <thead>
          <tr className="border-b border-t">
            <th>Track</th>
            <th>Add</th>
            <th className="px-1">Ranking</th>
            <th className="text-center">Cryptocurrency</th>
            <th>Abbr.</th>
            <th>Price(USD)</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Market</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {props.cryptos
            .filter(key => {
              if (keyword === '') {
                return key;
              } else if (key.name.toUpperCase().includes(keyword.toUpperCase())) {
                return key;
              }
            })
            .map(crypto => (
              <SingleCrypto key={crypto.id} crypto={crypto} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeList;
