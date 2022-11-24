import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
// import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify';
// import { useParams } from 'react-router-dom';

const CompareDetailPageLeft = (props) => {
  const [crypto, setCrypto] = useState({});
  // const params = useParams();

  // let urlStr = `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true`;
  let urlStr = `https://api.coingecko.com/api/v3/coins/${props.crypto}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(urlStr).then(res => {
      setCrypto(res.data);
      // console.log(res.data);
    });
  }, [urlStr]);

  return (
    <div className="container round-corner my-12 py-8">
      <div className="flex py-8">
        <img className="w-20 mr-8" src={crypto.image?.large} alt="/" />
        <div>
          <p className="text-3xl font-bold">{crypto?.name} price</p>
          <p>({crypto.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between">
            {crypto.market_data?.current_price ? <p className="text-3xl font-bold">${crypto.market_data.current_price.usd.toLocaleString()}</p> : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={crypto.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Cap</p>
              {crypto.market_data?.market_cap ? <p>${crypto.market_data.market_cap.usd.toLocaleString()}</p> : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Volume (24h)</p>
              {crypto.market_data?.market_cap ? <p>${crypto.market_data.total_volume.usd.toLocaleString()}</p> : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">24h High</p>
              {crypto.market_data?.high_24h ? <p>${crypto.market_data.high_24h.usd.toLocaleString()}</p> : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">24h Low</p>
              {crypto.market_data?.low_24h ? <p>${crypto.market_data.low_24h.usd.toLocaleString()}</p> : null}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl font-bold mb-4">Market Stats</p>
          <div className="round-corner shadow-base">
            <div className="flex justify-between py-4">
              <div>
                <p className="text-gray-500 text-sm">Market Rank</p>
                {crypto.market_cap_rank}
              </div>
              <div>
                <p className="text-gray-500 text-sm">Hashing Algorithm</p>
                {crypto.hashing_algorithm ? <p>{crypto.hashing_algorithm}</p> : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm">Trust Score</p>
                {crypto.tickers ? <p>{crypto.liquidity_score.toFixed(2)}</p> : null}
              </div>
            </div>

            <div className="flex justify-between py-4">
              <div>
                <p className="text-primary text-sm">Price Change (24h)</p>
                <strong>{crypto.market_data ? <p className="text-danger">{crypto.market_data.price_change_percentage_24h.toFixed(2)}%</p> : null}</strong>
              </div>
              <div>
                <p className="text-primary text-sm">Price Change (7d)</p>
                <strong>{crypto.market_data ? <p className="text-danger">{crypto.market_data.price_change_percentage_7d.toFixed(2)}%</p> : null}</strong>
              </div>
              <div>
                <p className="text-primary text-sm">Price Change (14d)</p>
                <strong>{crypto.market_data ? <p className="text-danger">{crypto.market_data.price_change_percentage_14d.toFixed(2)}%</p> : null}</strong>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <div>
                <p className="text-gray-500 text-sm">Price Change (30d)</p>
                {crypto.market_data ? <p>{crypto.market_data.price_change_percentage_30d.toFixed(2)}%</p> : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (60d)</p>
                {crypto.market_data ? <p>{crypto.market_data.price_change_percentage_60d.toFixed(2)}%</p> : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (1y)</p>
                {crypto.market_data ? <p>{crypto.market_data.price_change_percentage_1y.toFixed(2)}%</p> : null}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <br />
      <hr />
      <div className="py-4">
        <p className="text-xl font-bold">About {crypto.name}</p>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(crypto.description ? crypto.description.en : '') }}></p>
      </div>
    </div>
  );
};

export default CompareDetailPageLeft;
