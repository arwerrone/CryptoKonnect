import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
// import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { AccountAuth } from '../../context/Authentication';

const PortfolioAddedCrypto = () => {
  const [amounts, setAmounts] = useState([]);
  const { user } = AccountAuth();

  useEffect(() => {
    db.collection('users')
      .doc(`${user?.uid}`)
      .onSnapshot(doc => {
        setAmounts(doc.data()?.alertList);
      });
  }, [user?.uid]);

  const cryptoPath = db.collection('users').doc(`${user?.uid}`);

  const deleteCrypto = async selectedId => {
    try {
      const result = amounts.filter(coin => coin.id !== selectedId);
      await cryptoPath.update({
        alertList: result
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const addMin = async (selectedId, num) => {
    try {
      let result = amounts;
      // const singleArr = amounts.filter(coin => coin.id === selectedId);
      // let obj = singleArr[0];
      // obj.amount = 99;

      for (let i = 0; i < result.length; i++) {
        if (result[i].id === selectedId) {
          result[i].min = num;
        }
      }

      await cryptoPath.update({
        alertList: result
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const addMax = async (selectedId, num) => {
    try {
      let result = amounts;
      // const singleArr = amounts.filter(coin => coin.id === selectedId);
      // let obj = singleArr[0];
      // obj.amount = 99;

      for (let i = 0; i < result.length; i++) {
        if (result[i].id === selectedId) {
          result[i].max = num;
        }
      }

      await cryptoPath.update({
        alertList: result
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addMax(crypto.id, 1);
    // navigate('/portfolio');
  };

  return (
    <div>
      {amounts?.length === 0 ? (
        <p>
          Your Portfolio List is empty. Please go to Homepage to add amounts to your Portfolio List. <Link to="/">Go to Crypto Search.</Link>
        </p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-t">
              <th className="text-left">Remove</th>
              <th className="text-left">Ranking</th>
              <th className="text-left">Crypto</th>
              <th className="text-left">Price</th>
              <th className="text-left">Min Alert</th>
              <th className="text-left">Max Alert</th>
            </tr>
          </thead>
          <tbody>
            {amounts?.map(crypto => (
              <tr key={crypto.id} className="text-left overflow-hidden h-[75px]">
                <td>
                  <AiOutlineClose onClick={() => deleteCrypto(crypto.id)} className="cursor-pointer" />
                </td>
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

                <td className="text-primary">${crypto?.price.toLocaleString()}</td>

                <td>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      addMin(crypto?.id, e.target.valueAsNumber);
                    }}
                  >
                    <input
                      className="text-danger w-50 bg-gray border border-input px-3 py-1 rounded-xl shadow-xl"
                      onChange={e => {
                        addMin(crypto?.id, e.target.valueAsNumber);
                      }}
                      placeholder={crypto?.min}
                      type="number"
                      min="0"
                    />
                  </form>
                </td>

                <td>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      addMax(crypto?.id, e.target.valueAsNumber);
                    }}
                  >
                    <input
                      className="text-danger w-50 bg-gray border border-input px-3 py-1 rounded-xl shadow-xl"
                      onChange={e => {
                        addMax(crypto?.id, e.target.valueAsNumber);
                      }}
                      placeholder={crypto?.max}
                      type="number"
                      min="0"
                    />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PortfolioAddedCrypto;
