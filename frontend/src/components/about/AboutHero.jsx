import React from 'react';
import { Link } from 'react-router-dom';
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid';

import bgImg from '../../assets/cyber-bg.png';

const AboutHero = () => {
  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-4xl font-bold text-primary">Team 2</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Crypto Konnect</h1>
          <p className="text-2xl">Track, Send and Receive hundreds of cryptocurrencies.</p>
          <Link className="btn-danger rounded-lg py-2 w-[30%] bg-green-500 text-center no-underline" to="/">
            Get Started
          </Link>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <br />
        <br />
        <br />
        <div
          className="absolute flex flex-col py-3 md:min-w-[760px] bottom-[5%]
            my-0 mx-4 md:left-1/2 transform md:-translate-x-1/2 bg-white
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p className="text-2xl">Our Team Members</p>
          <div className="flex justify-between flex-wrap px-4 text-xl">
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> Thai Hoa Huynh
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> Angelo Dikon Wong
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> Tyler Barry
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> John Zhang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
