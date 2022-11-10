import React, { useState } from 'react';

import SingleCrypto from './SingleCrypto';
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';
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
      <p className="text-base">
        Please click on the <strong>Star</strong>{' '}
        <span className="inline-block">
          <AiOutlineStar />
        </span>{' '}
        icon to add crypto(s) to your personal <strong>Dashboard</strong>.
      </p>
      <p className="pb-4 text-base">
        Or click on the <strong>Add</strong>{' '}
        <span className="inline-block">
          <IoIosAddCircleOutline />
        </span>{' '}
        icon to add crypto(s) to your personal <strong>Portfolio</strong>.
      </p>
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
