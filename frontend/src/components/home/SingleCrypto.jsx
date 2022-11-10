import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IoIosAddCircleOutline, IoIosAddCircle } from 'react-icons/io';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import { AccountAuth } from '../../context/Authentication';
import { db } from '../../firebase';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';

const SingleCrypto = props => {
  const [addedCrypto, setAddedCrypto] = useState(false);
  const [addedAmount, setAddedAmount] = useState(false);
  const { user } = AccountAuth();

  // const cryptoPath = db.collection('users').doc(`${user?.email}`);
  const cryptoPath = db.collection('users').doc(`${user?.uid}`);

  const addCrypto = async () => {
    // if (user?.email) {
    if (user?.uid) {
      setAddedCrypto(true);
      await cryptoPath.update({
        alertList: firebase.firestore.FieldValue.arrayUnion({
          // amount: 1,
          id: props.crypto.id,
          name: props.crypto.name,
          image: props.crypto.image,
          price: props.crypto.current_price,
          rank: props.crypto.market_cap_rank,
          symbol: props.crypto.symbol
        })
      });
    } else {
      alert('Please log in to add cryptos to your alert list');
    }
  };

  const addAmount = async () => {
    if (user?.uid) {
      setAddedAmount(true);
      await cryptoPath.update({
        portfolioList: firebase.firestore.FieldValue.arrayUnion({
          amount: 1,
          id: props.crypto.id,
          name: props.crypto.name,
          image: props.crypto.image,
          price: props.crypto.current_price,
          change: props.crypto.price_change_percentage_24h,
          rank: props.crypto.market_cap_rank,
          symbol: props.crypto.symbol
        })
      });
    } else {
      alert('Please log in to add cryptos to your portfolio');
    }
  };

  return (
    <tr className="border-t h-[75px]">
      <td className="text-xl" onClick={addCrypto}>{addedCrypto ? <AiFillStar /> : <AiOutlineStar />}</td>
      <td className="text-xl" onClick={addAmount}>{addedAmount ? <IoIosAddCircle /> : <IoIosAddCircleOutline />}</td>
      <td>{props.crypto.market_cap_rank}</td>
      <td>
        <Link to={`/crypto/${props.crypto.id}`}>
          <div className="items-center flex">
            <img src={props.crypto.image} alt={props.crypto.id} className="rounded-full w-10 mr-1" />

            <p className="mt-3 ml-5">{props.crypto.name}</p>
          </div>
        </Link>
      </td>

      <td>{props.crypto.symbol.toUpperCase()}</td>
      <td>
        $
        {
          // add dollar sign and format
          props.crypto.current_price.toLocaleString()
        }
      </td>

      <td>{/* add green/red for positive/negative percentage */ props.crypto.price_change_percentage_24h < 0 ? <p className="my-4 text-red-500">{props.crypto.price_change_percentage_24h.toFixed(4)}%</p> : <p className="my-4 text-green-600">{props.crypto.price_change_percentage_24h.toFixed(4)}%</p>}</td>
      <td>
        $
        {
          // add dollar sign and format
          props.crypto.total_volume.toLocaleString()
        }
      </td>
      <td>
        $
        {
          // add dollar sign and format
          props.crypto.market_cap.toLocaleString()
        }
      </td>
      <td>
        <Sparklines data={props.crypto.sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default SingleCrypto;
