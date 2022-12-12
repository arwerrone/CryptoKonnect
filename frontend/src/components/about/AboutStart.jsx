import React from 'react';

import supportImg from '../../assets/support.jpg';

const AboutStart = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[450px] bg-gray-700/90 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-white uppercase text-center">Vision</h2>
          <h3 className="text-5xl font-bold py-3 text-center">Our Product</h3>
          <p className="py-7 text-2xl text-white">For beginner to advanced crypto investors and traders who need to update crypto market intelligence from multiple sources while performing some crypto wallet’s functions, Crypto Konnect is a quality provider of crypto market intelligence and support service.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStart;
