import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const SingleCrypto = props => {
  return (
    <tr className="border-t h-[75px]">
      <td>
        <AiOutlineStar />
      </td>
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
