import React from 'react';

const AboutFeatured = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">We Solve the problem of Crypto Tracking</h2>
          <p className="text-2xl pt-6 text-gray-500">The time-consuming process of keeping track of all the cryptos listed on multiple exchanges around the world.</p>
          <p className="text-2xl pb-6 text-gray-500">Malicious actors can often spread false information causing 
confusion in the crypto market. </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Reliable Sources</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Available</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">Safe</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatured;
