import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { AccountAuth } from '../../context/Authentication';

const AddedCrypto = () => {
  const [cryptos, setCryptos] = useState([]);
  const { user } = AccountAuth();

  useEffect(() => {
    db.collection('users')
      .doc(`${user?.email}`)
      .onSnapshot(doc => {
        setCryptos(doc.data()?.alertList);
      });
  }, [user?.email]);

  const cryptoPath = db.collection("users").doc(`${user?.email}`)

  const deleteCrypto = async selectedId => {
    try {
      const result = cryptos.filter(coin => coin.id !== selectedId);
      await cryptoPath.update({
        alertList: result
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      {cryptos?.length === 0 ? (
        <p>
          Your Alert List is empty. Please go to Homepage to add cryptos to your Alert List. <Link to="/">Go to Crypto Search.</Link>
        </p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-t">
              <th className="text-left">Ranking</th>
              <th className="text-left">Crypto</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cryptos?.map(crypto => (
              <tr key={crypto.id} className="text-left overflow-hidden h-[75px]">
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
                  <AiOutlineClose onClick={() => deleteCrypto(crypto.id)} className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddedCrypto;
