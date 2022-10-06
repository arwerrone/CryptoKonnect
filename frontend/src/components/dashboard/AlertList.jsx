import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AlertList = () => {
  const [cryptos, setCryptos] = useState([]);

  return (
    <div>
      {cryptos?.length === 0 ? (
        <p>
          Your Alert List is empty. Please go to Homepage to add cryptos to your Alert List. <Link to="/">Go to Crypto Search.</Link>
        </p>
      ) : (
        <table className="w-100 text-left">
          <thead>
            <tr className="border-b border-t">
              <th className="px-3">Ranking</th>
              <th className="text-center">Crypto</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map(crypto => (
              <tr key={crypto.id} className="overflow-hidden h-[75px]">
                <td>{crypto?.rank}</td>
                <td>
                  <Link to={`/crypto/${crypto.id}`}>
                    <div className="items-center flex">
                      <img src={crypto?.image} className="w-10 mr-1" alt="/" />
                      <div>
                        <p>{crypto?.name}</p>
                        <p className="text-left text-gray-600 text-small">{crypto?.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-10">
                  <AiOutlineClose className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AlertList;
