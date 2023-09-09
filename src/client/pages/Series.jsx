import React from 'react';
import LatestUpdates from '../components/LatestUpdates';
import TopAdBanner from '../components/TopAdBanner';
import api from '../../api';
import { useEffect, useState } from 'react';



const SeriesPage = () => { 
    const [seriesData, setSeriesData] = useState([])

    useEffect(() => {
        api.get('current-series/')
          .then((res) => {
            console.log(res.data.data);
            setSeriesData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []); 

  return (
    <section className='container mx-auto px-4 mt-8'>
        <div className='container mx-auto '>
            <h1 className="text-3xl font-bold text-center"> Current Series </h1>
        </div>
        
        <div className=' container mx-auto   flex items-start justify-between'>
          <TopAdBanner />
        </div>

        <div className=' container mx-auto  mb-2 xl:flex items-start justify-between'>

        <div className=' mx-auto w-[60%] h-auto'>
            <div className="w-full md:w-3/4 p-4">
            {/* Series Cards */}
            {/* Example Series Card */}
            {seriesData.length === 0 ? (
      <p>Loading...</p>
    ) :  seriesData.map((league) => (<div key={league.league_key} className=" rounded-md p-4 mb-4 shadow-md border-black border-[1px]">
                <h2 className="text-xl font-bold text-center">{league.league_name}</h2>
                <p className="text-gray-600 text-center">Date</p>
            </div>
            ))}
            </div>
        </div>
        <div className=' mx-auto w-[30%] h-auto'>
            <div className='bg-gray-200 w-full p-20 rounded-md text-center'>
                AD Space
            </div>
            <div>
                <LatestUpdates />
            </div>
        </div>

        </div>

       
    </section>
   
  );
};

export default SeriesPage;
