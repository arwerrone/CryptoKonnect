import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeHero = () => {
  const [hero, setHero] = useState([]);

  let urlStr = 'https://api.coingecko.com/api/v3/search/trending';

  // fetch latest trending cryptos
  useEffect(() => {
    axios.get(urlStr).then(res => {
      setHero(res.data.coins);
    });
  }, [urlStr]);

  return (
    <div className="round-corner my-8 py-3 text-primary">
      <h2 className="text-4xl">Top Trending</h2>
      <div className="grid grid-cols-3 gap-3">
        {hero.map(crypto => (
          <div key={crypto.item.id} className="round-corner flex justify-between hover:scale-100 duration-200 ease-in-out">
            <div className="flex items-center mx-1 w-full justify-between">
              <div className="flex">
                <img className="h-20 mt-2 rounded-full mr-1 ml-1" src={crypto.item.small} alt="" />
                <div>
                  <p className="mt-3 font-bold">{crypto.item.name}</p>
                  <p>{crypto.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img className="w-5 mr-1 mt-1" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="/" />
                <p className='mt-3'>{crypto.item.price_btc.toFixed(8)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
