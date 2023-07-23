import React from 'react';
import { BiCricketBall } from 'react-icons/bi'

import {BsFillPlayFill} from 'react-icons/bs';
import { IconContext } from "react-icons"; 

import { useSelector} from 'react-redux';

const CurrentSeries = () => {
  const currentSeriesData = [
    {
      name: 'Series 1',
      logo: 'https://ik.imagekit.io/c7syb8qpjp/Series/1CI.png',
      matches: 5,
      startDate: 'June 12th',
      endDate: 'July 12th',
    },
    {
      name: 'Series 2',
      logo: 'https://ik.imagekit.io/c7syb8qpjp/Series/1CI.png',
      matches: 3,
      startDate: 'June 12th',
      endDate: 'July 12th',
    },
    {
      name: 'Series 3',
      logo: 'https://ik.imagekit.io/c7syb8qpjp/Series/1CI.png',
      matches: 4,
      startDate: 'June 12th',
      endDate: 'July 12th',
    },
  ];
  const isDarkMode =  useSelector((state) => state.isdarkmode)
  return (
    <div className='xl:ml-8 mt-8 px-auto'>
    <div className="flex items-center justify-between mb-4 py-1 bg-gradient-to-r  from-[#3f3f73] to-purple-900 rounded-lg">
      <div className="flex items-center text-white">
    
        <h2 className="xl:text-lg font-bold mx-3 whitespace-nowrap ">Current Series</h2>
            {/* Cool animated icon here */}


        <BiCricketBall className=" mr-1 sm:w-2 sm:h-2 xl:w-6 xl:h-6 md:w-4 md:h-4 animate-ping" />
        <BiCricketBall className=" mr-1 sm:w-2 sm:h-2 xl:w-6 xl:h-6 md:w-4 md:h-4 animate-ping" />
        <BiCricketBall className=" mr-1 sm:w-2 sm:h-2 xl:w-6 xl:h-6 md:w-4 md:h-4 animate-ping" />
        <BiCricketBall className=" mr-1 sm:w-2 sm:h-2 xl:w-6 xl:h-6 md:w-4 md:h-4 animate-ping" />
        {/* <BiCricketBall className="w-6 h-6 mr-2 animate-ping" />
        <BiCricketBall className="w-6 h-6 mr-2 animate-ping" />
        <BiCricketBall className="w-6 h-6 mr-2 animate-ping" /> */}

      </div>
      <button className="hover:text-blue-500 ml-auto xl:ml-56 mr-2 whitespace-nowrap text-white">View All</button>
    </div>
    <div className="">
      {currentSeriesData.map((series, index) => (
        <div key={index} className={`${isDarkMode ? 'bg-white/10':'bg-black/10'} flex mb-2  rounded-lg`}>
        <div className="w-16 h-14 rounded-lg bg-red-900 " >
        <img src={series.logo} alt={series.name} className='w-full h-full' />
        </div>
          
          <div className='flex flex-col ml-2 '>
          <p className="font-bold">{series.name}</p>
          <div className={`${isDarkMode ? 'border-t-[1px] border-black':'border-t-[1px] border-white'} flex whitespace-nowrap text-sm`}>
            
            <p className='mr-2'>{series.matches} Matches</p>
            <p className='mr-2'>|</p>
            <p> {series.startDate} to {series.endDate}</p>
          </div>
          </div>
          
          <IconContext.Provider value={{ size: '55px' }}><BsFillPlayFill className='ml-auto '/></IconContext.Provider>    
          
        </div>
      ))}
    </div>
  </div>
  );
};

export default CurrentSeries;
