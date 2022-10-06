import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeList from '../components/home/HomeList';

const HomePage = props => {
  return (
    <div>
      <HomeHero />
      <HomeList cryptos={props.cryptos} />
    </div>
  );
};

export default HomePage;
