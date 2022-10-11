import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Sparklines, SparklinesLine } from 'react-sparklines';
// import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
// import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';

const CryptoDetailPage = () => {
  const [crypto, setCrypto] = useState({});
  const params = useParams();

  let urlStr = `https://api.coingecko.com/api/v3/coins/${params.cryptoId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(urlStr).then(res => {
      setCrypto(res.data);
      // console.log(res.data);
    });
  }, [urlStr]);

  return (
    <div>
      <p className="font-bold text-4xl">{crypto?.name} price</p>
      <p>({crypto.symbol?.toUpperCase()} / CAD)</p>
    </div>
  );
};

export default CryptoDetailPage;
