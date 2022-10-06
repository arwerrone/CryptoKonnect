import React from 'react';
import HomeList from '../components/home/HomeList';

const HomePage = props => {
  return (
    <div>
      <HomeList cryptos={props.cryptos} />
    </div>
  );
};

export default HomePage;
